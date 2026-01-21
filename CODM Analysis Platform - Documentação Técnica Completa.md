# CODM Analysis Platform - Documentação Técnica Completa

## 1. Visão Geral do Projeto

A plataforma CODM Analysis é um serviço web onde jogadores de Call of Duty Mobile podem enviar vídeos de gameplay para análise profissional. O fluxo é: cliente paga via Stripe → faz upload do vídeo → analista revisa e fornece feedback → cliente visualiza análise → conteúdo pode ser compartilhado na galeria pública.

**Stack Tecnológico:**
- Frontend: React 19 + Tailwind CSS 4 + TypeScript
- Backend: Express 4 + tRPC 11 + Node.js
- Banco de Dados: MySQL/TiDB com Drizzle ORM
- Armazenamento: S3 (via helpers Manus)
- Pagamentos: Stripe
- Autenticação: Manus OAuth

---

## 2. Arquitetura do Banco de Dados

### Tabelas Principais

#### `users`
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  openId VARCHAR(64) UNIQUE NOT NULL,
  name TEXT,
  email VARCHAR(320),
  loginMethod VARCHAR(64),
  role ENUM('user', 'admin', 'analyst') DEFAULT 'user',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  lastSignedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### `payments`
```sql
CREATE TABLE payments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT NOT NULL,
  stripePaymentIntentId VARCHAR(255) UNIQUE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status ENUM('pending', 'succeeded', 'failed', 'canceled') DEFAULT 'pending',
  description TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);
```

#### `videos`
```sql
CREATE TABLE videos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  paymentId INT NOT NULL,
  clientId INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  s3Key VARCHAR(500) NOT NULL,
  s3Url TEXT NOT NULL,
  fileSize INT,
  duration INT,
  status ENUM('pending', 'analyzing', 'completed', 'rejected') DEFAULT 'pending',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (paymentId) REFERENCES payments(id),
  FOREIGN KEY (clientId) REFERENCES users(id)
);
```

#### `analyses`
```sql
CREATE TABLE analyses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  videoId INT NOT NULL UNIQUE,
  analystId INT NOT NULL,
  overallRating INT,
  summary TEXT,
  isPublic BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (videoId) REFERENCES videos(id),
  FOREIGN KEY (analystId) REFERENCES users(id)
);
```

#### `analysis_comments`
```sql
CREATE TABLE analysis_comments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  analysisId INT NOT NULL,
  analystId INT NOT NULL,
  timestamp INT NOT NULL,
  type ENUM('tip', 'observation', 'improvement', 'praise') DEFAULT 'observation',
  content TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (analysisId) REFERENCES analyses(id),
  FOREIGN KEY (analystId) REFERENCES users(id)
);
```

#### `gallery_items`
```sql
CREATE TABLE gallery_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  analysisId INT NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnailUrl TEXT,
  isActive BOOLEAN DEFAULT TRUE,
  views INT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (analysisId) REFERENCES analyses(id)
);
```

---

## 3. Fluxos de Negócio

### 3.1 Fluxo de Cliente (Envio de Vídeo)

1. **Autenticação**: Cliente faz login via Manus OAuth
2. **Checkout**: Cliente clica em "Submit Video" → vai para página de checkout
3. **Pagamento**: Cliente vê preço ($29.99), preenche descrição opcional, clica "Proceed to Payment"
4. **Confirmação**: Sistema cria `PaymentIntent` no Stripe, armazena em banco, redireciona para confirmação
5. **Upload**: Após confirmação, cliente é redirecionado para página de upload
6. **Armazenamento**: Cliente faz upload do vídeo → arquivo vai para S3 → metadados salvos em `videos`
7. **Notificação**: Sistema notifica analistas que há novo vídeo para revisar

### 3.2 Fluxo de Analista (Análise de Vídeo)

1. **Dashboard**: Analista acessa dashboard com lista de vídeos "pending"
2. **Seleção**: Clica em vídeo para iniciar análise
3. **Revisão**: Assiste vídeo, pode pausar e adicionar comentários timestamped
4. **Comentários**: Para cada comentário, seleciona tipo (tip/observation/improvement/praise)
5. **Resumo**: Escreve resumo geral e dá rating (1-5 estrelas)
6. **Conclusão**: Marca como "completed" → status do vídeo muda para "completed"
7. **Notificação**: Cliente recebe notificação que análise está pronta

### 3.3 Fluxo de Cliente (Visualização de Análise)

1. **Notificação**: Cliente recebe notificação que análise está pronta
2. **Dashboard**: Acessa dashboard, vê vídeo com status "completed"
3. **Visualização**: Clica em "View Analysis" para ver vídeo com comentários
4. **Comentários**: Vê comentários timestamped com dicas do analista
5. **Feedback**: Pode deixar feedback sobre a análise (opcional)

### 3.4 Fluxo de Galeria Pública

1. **Admin Promotion**: Admin/Dono vê análises completadas
2. **Seleção**: Marca análises interessantes como "public"
3. **Galeria**: Análises públicas aparecem em `/gallery` com thumbnail, título, descrição
4. **Visitante**: Visitante vê galeria, pode filtrar/buscar
5. **Prova Social**: Galeria mostra exemplos de análises para atrair novos clientes

---

## 4. Endpoints tRPC

### 4.1 Autenticação
```typescript
// GET /api/trpc/auth.me
// Retorna usuário autenticado

// POST /api/trpc/auth.logout
// Faz logout do usuário
```

### 4.2 Pagamentos
```typescript
// POST /api/trpc/payments.createPaymentIntent
// Input: { amount: number, description?: string }
// Output: { clientSecret: string, paymentIntentId: string }

// POST /api/trpc/payments.confirmPayment
// Input: { paymentIntentId: string, status: 'succeeded' | 'failed' | 'canceled' }
// Output: { success: boolean }
```

### 4.3 Vídeos
```typescript
// POST /api/trpc/videos.createVideoEntry
// Input: { paymentId: number, title: string, description?: string, s3Key: string, s3Url: string, fileSize: number, duration?: number }
// Output: { success: boolean, videoId: number }

// GET /api/trpc/videos.getMyVideos
// Output: Video[] (vídeos do cliente autenticado)

// GET /api/trpc/videos.getPendingVideos
// Output: Video[] (apenas para analistas)

// POST /api/trpc/videos.updateVideoStatus
// Input: { videoId: number, status: 'pending' | 'analyzing' | 'completed' | 'rejected' }
// Output: { success: boolean }
```

### 4.4 Análises
```typescript
// POST /api/trpc/analyses.addComment
// Input: { analysisId: number, timestamp: number, type: 'tip' | 'observation' | 'improvement' | 'praise', content: string }
// Output: { success: boolean, commentId: number }

// POST /api/trpc/analyses.completeAnalysis
// Input: { videoId: number, overallRating: number, summary: string }
// Output: { success: boolean, analysisId: number }

// GET /api/trpc/analyses.getAnalysis
// Input: { videoId: number }
// Output: { analysis: Analysis, comments: Comment[] }

// POST /api/trpc/analyses.makePublic
// Input: { analysisId: number }
// Output: { success: boolean }
```

### 4.5 Galeria
```typescript
// GET /api/trpc/gallery.getPublicItems
// Output: GalleryItem[]

// GET /api/trpc/gallery.searchItems
// Input: { query: string }
// Output: GalleryItem[]
```

---

## 5. Páginas Frontend

### 5.1 Página Pública
- **URL**: `/`
- **Componentes**: Hero section, features, pricing, CTA
- **Ações**: Login, view gallery, submit video (se autenticado)

### 5.2 Página de Checkout
- **URL**: `/checkout`
- **Requer**: Autenticação
- **Componentes**: Preço, descrição do serviço, formulário de descrição do vídeo, botão "Proceed to Payment"
- **Ação**: Chama `payments.createPaymentIntent`, redireciona para `/payment-confirmation`

### 5.3 Confirmação de Pagamento
- **URL**: `/payment-confirmation`
- **Componentes**: Loading spinner, mensagem de sucesso/erro
- **Ação**: Confirma pagamento, redireciona para `/upload-video`

### 5.4 Upload de Vídeo
- **URL**: `/upload-video`
- **Requer**: Autenticação + pagamento confirmado
- **Componentes**: Input de título, textarea de descrição, drag-drop de arquivo, progress bar
- **Validações**: Máximo 500MB, apenas vídeos
- **Ação**: Faz upload para S3, cria entrada em `videos`, redireciona para `/client-dashboard`

### 5.5 Dashboard do Cliente
- **URL**: `/client-dashboard`
- **Requer**: Autenticação + role = 'user'
- **Componentes**: Stats (total vídeos, completed, analyzing, pending), tabs (all, completed, analyzing, pending), lista de vídeos
- **Ações**: Ver análise, enviar novo vídeo

### 5.6 Dashboard do Analista
- **URL**: `/analyst-dashboard`
- **Requer**: Autenticação + role = 'analyst'
- **Componentes**: Stats (pending, in progress, completed), lista de vídeos para analisar
- **Ações**: Clicar em vídeo para analisar

### 5.7 Página de Análise
- **URL**: `/analyze/:id`
- **Requer**: Autenticação + role = 'analyst'
- **Componentes**: 
  - Video player com timeline
  - Slider de timeline
  - Seção de comentários com tipo seletor
  - Textarea para novo comentário
  - Botão "Add Comment"
  - Sidebar com info do vídeo, rating, summary textarea
- **Ações**: Adicionar comentários, completar análise

### 5.8 Visualização de Análise (Cliente)
- **URL**: `/video/:id`
- **Requer**: Autenticação + ser o cliente que enviou
- **Componentes**: Video player, comentários timestamped do analista, rating, resumo
- **Ações**: Nenhuma (apenas visualização)

### 5.9 Galeria Pública
- **URL**: `/gallery`
- **Público**: Sim (sem autenticação)
- **Componentes**: Grid de análises públicas, search bar, filtros
- **Ações**: Clicar em análise para ver detalhes

### 5.10 Detalhes da Galeria
- **URL**: `/gallery/:id`
- **Público**: Sim
- **Componentes**: Video player, comentários, rating, info do analista
- **Ações**: Nenhuma (apenas visualização)

---

## 6. Variáveis de Ambiente Necessárias

```env
# Banco de Dados
DATABASE_URL=mysql://user:password@host/database

# Autenticação
JWT_SECRET=seu_jwt_secret_aqui
VITE_APP_ID=seu_app_id_manus
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://login.manus.im

# Stripe
STRIPE_SECRET_KEY=sk_test_...
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

# S3 / Storage
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=seu_api_key_manus
VITE_FRONTEND_FORGE_API_KEY=seu_frontend_api_key

# Notificações
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=seu_website_id

# Owner Info
OWNER_OPEN_ID=seu_open_id
OWNER_NAME=Seu Nome
```

---

## 7. Componentes UI Reutilizáveis

A plataforma usa shadcn/ui. Componentes principais:

- `Button` - Botões com variantes (default, outline, ghost)
- `Card` - Containers de conteúdo
- `Badge` - Tags de status
- `Tabs` - Navegação entre abas
- `Input` - Campos de texto
- `Textarea` - Campos de texto longo
- `Select` - Dropdowns
- `Slider` - Controle de timeline
- `Alert` - Mensagens de erro/sucesso
- `Dialog` - Modals (se necessário)

---

## 8. Fluxo de Autenticação

1. Usuário clica em "Login"
2. Redireciona para `getLoginUrl()` (Manus OAuth)
3. Após login, callback em `/api/oauth/callback`
4. Session cookie é criado
5. `useAuth()` hook fornece `user`, `isAuthenticated`, `logout()`
6. Rotas protegidas verificam `user.role`

---

## 9. Estrutura de Pastas

```
codm-analysis-platform/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── PaymentConfirmation.tsx
│   │   │   ├── UploadVideo.tsx
│   │   │   ├── ClientDashboard.tsx
│   │   │   ├── AnalystDashboard.tsx
│   │   │   ├── AnalyzeVideo.tsx
│   │   │   ├── VideoDetail.tsx
│   │   │   ├── Gallery.tsx
│   │   │   └── GalleryDetail.tsx
│   │   ├── components/
│   │   │   ├── ui/ (shadcn components)
│   │   │   └── DashboardLayout.tsx
│   │   ├── lib/
│   │   │   ├── trpc.ts
│   │   │   └── storage.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── public/
├── server/
│   ├── routers.ts (tRPC procedures)
│   ├── db.ts (database queries)
│   ├── stripe.ts (Stripe helpers)
│   ├── storage-api.ts (S3 endpoints)
│   └── _core/ (framework internals)
├── drizzle/
│   └── schema.ts (Drizzle ORM schema)
└── package.json
```

---

## 10. Fluxo de Desenvolvimento

1. **Implementar Schema**: Definir tabelas em `drizzle/schema.ts`
2. **Migrations**: Rodar `pnpm db:push` para criar tabelas
3. **DB Helpers**: Adicionar funções em `server/db.ts`
4. **tRPC Procedures**: Criar procedures em `server/routers.ts`
5. **Frontend Pages**: Criar páginas em `client/src/pages/`
6. **Rotas**: Registrar rotas em `client/src/App.tsx`
7. **Testes**: Criar testes em `server/*.test.ts`
8. **Checkpoint**: Salvar checkpoint com `webdev_save_checkpoint`

---

## 11. Considerações de Segurança

- **Stripe Keys**: Secret key apenas no servidor, public key no frontend
- **S3 Access**: Usar helpers Manus que já têm autenticação
- **Role-based Access**: Verificar `ctx.user.role` em procedures
- **Video URLs**: Gerar presigned URLs com expiração
- **Payment Verification**: Sempre verificar status do payment intent no Stripe

---

## 12. Próximos Passos Após Implementação

1. **Notificações em Tempo Real**: Implementar WebSocket para notificações instantâneas
2. **Dashboard Admin**: Criar página admin para gerenciar usuários, vídeos, pagamentos
3. **Video Processing**: Adicionar processamento de vídeo (thumbnail, transcoding)
4. **Email Notifications**: Enviar emails quando análise está pronta
5. **Analytics**: Rastrear conversão, taxa de conclusão, etc.
6. **Feedback System**: Permitir clientes avaliarem análises
7. **Retry Logic**: Implementar retry automático para uploads falhados

---

## 13. Testes Recomendados

- Fluxo completo de pagamento
- Upload de vídeo com validação
- Criação de comentários com timestamp
- Transição de status de vídeo
- Acesso baseado em role
- Visualização de galeria pública
- Busca e filtros na galeria

---

## 14. Performance e Otimizações

- **Lazy Loading**: Carregar vídeos sob demanda
- **Caching**: Cache de análises públicas
- **Compression**: Comprimir vídeos antes de enviar para S3
- **CDN**: Servir vídeos via CDN
- **Database Indexes**: Índices em `videoId`, `userId`, `status`
- **Pagination**: Paginar listas de vídeos

---

## Contato e Suporte

Para dúvidas sobre a implementação, consulte:
- Documentação do tRPC: https://trpc.io
- Documentação do Stripe: https://stripe.com/docs
- Documentação do Drizzle: https://orm.drizzle.team
- Documentação do shadcn/ui: https://ui.shadcn.com
