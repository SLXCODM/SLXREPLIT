# Guia Técnico: Configuração e Independência

Boas notícias: O seu site agora é **100% independente**. Removi a dependência obrigatória do Google Cloud para que você não tenha custos extras nem burocracia.

## 1. Login por Email e Senha (Grátis e Já pronto!)
Esqueça o Google Cloud. Agora os seus alunos podem:
- **Se cadastrar** com Nome, E-mail e Senha.
- **Fazer login** normalmente.
- Tudo isso é processado pelo seu próprio servidor, de graça.

## 2. Stripe (Pagamentos)
O único serviço que você realmente precisa configurar para receber dinheiro é o **Stripe**:
1.  Crie uma conta no [Stripe](https://stripe.com/).
2.  Pegue sua **Secret Key** (começa com `sk_test_` ou `sk_live_`).
3.  Crie um arquivo chamado `.env` na raiz da pasta do site e cole assim:
    ```env
    STRIPE_SECRET_KEY=sua_chave_aqui
    SESSION_SECRET=uma_palavra_segura_qualquer
    ```

## 3. Google Login (OPCIONAL)
Se um dia você quiser que as pessoas cliquem em "Entrar com Google", você precisará criar o projeto no Google Cloud (que tem um nível gratuito bem grande, mas exige cadastro). **Enquanto você não fizer isso, o botão continuará lá como opcional, mas o login por e-mail já resolve tudo.**

---

> [!TIP]
> **Como testar o Painel agora?**
> 1. Vá em `/community/login`.
> 2. Clique na aba **"Criar Conta"** e use qualquer e-mail (ex: teste@teste.com).
> 3. Depois de logado, clique no botão cinza pequeno no final da página: **"[Dev] Ativar Modo Analista SLX"**.
> 4. Pronto! Você terá acesso total ao painel de admin sem configurar nada externo.
