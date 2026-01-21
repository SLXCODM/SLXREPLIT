# Projeto: Plataforma de Análise CODM (Comunidade)

## Visão Geral
Este documento detalha o estado atual, os requisitos e as conversas que moldaram a plataforma de análise de vídeos para Call of Duty Mobile.

## Histórico e Contexto (Dezembro 2025)
O usuário solicitou a criação de uma comunidade onde:
1.  **Clientes** fazem upload de gravações de tela (gameplay de CODM).
2.  **Analista (Administrador)** revisa o vídeo e fornece feedback técnico (comentários com timestamps).
3.  **Monetização**: O fluxo envolve o pagamento antes do envio (a ser integrado).
4.  **Galeria Pública**: O analista pode marcar feedbacks específicos como "públicos" para servir de portfólio.
5.  **Internacionalização**: Interface em Português e Inglês.
6.  **Hospedagem**: Implementação via subdomínio (`comunidade.seusite.com`) para segurança do site principal.

## Estrutura Técnica
- **Frontend**: React com Tailwind CSS e Shadcn UI.
- **Backend**: Express.js (Node.js).
- **Banco de Dados**: PostgreSQL (Drizzle ORM).
- **Autenticação**: Replit Auth (OpenID Connect).
- **Armazenamento**: Local `/uploads` (preparado para Object Storage).

## Requisitos Implementados
- [x] Autenticação com Replit.
- [x] Upload de vídeos (limite de 500MB).
- [x] Sistema de feedback com timestamps.
- [x] Notificações internas (vídeo analisado, novo upload).
- [x] Seletor de Idioma (PT/EN).
- [x] Dashboard diferenciado para Cliente e Administrador.

## Configurações de Controle
- **Admin Único**: Atualmente configurado para identificar o usuário `repl_user` ou baseado no primeiro login.
- **Traduções**: Sistema centralizado no frontend.
- **Segurança**: Rotas protegidas por middleware de autenticação.

## Próximas Etapas (Pendentes)
1.  Integração de Pagamentos (Stripe/PayPal).
2.  Configuração de E-mail Transacional (Notificações externas).
3.  Migração para Object Storage (S3/Replit Storage) para produção.

---
*Documento gerado para garantir a continuidade do projeto em caso de perda de contexto.*
