-- ==========================================
-- SCRIPT FINAL DE CONFIGURAÇÃO (SUPABASE)
-- RODE ESTE SCRIPT INTEIRO NO SQL EDITOR
-- ==========================================

-- 1. Tabela de Usuários
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT,
    name TEXT,
    open_id TEXT,
    login_method TEXT,
    role TEXT DEFAULT 'user' NOT NULL,
    last_signed_in TIMESTAMP DEFAULT now(),
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);

-- 2. Tabela de Vídeos
CREATE TABLE IF NOT EXISTS videos (
    id SERIAL PRIMARY KEY,
    payment_id INTEGER, -- Nullable para permitir posts manuais
    client_id INTEGER NOT NULL REFERENCES users(id),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    s3_key TEXT NOT NULL,
    s3_url TEXT NOT NULL,
    file_size INTEGER,
    duration INTEGER,
    status TEXT DEFAULT 'awaiting_payment' NOT NULL,
    allow_public BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);

-- 3. Tabela de Pagamentos
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    amount TEXT NOT NULL,
    currency TEXT DEFAULT 'BRL' NOT NULL,
    status TEXT NOT NULL,
    stripe_payment_intent_id TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);

-- 4. Tabela de Análises
CREATE TABLE IF NOT EXISTS analyses (
    id SERIAL PRIMARY KEY,
    video_id INTEGER NOT NULL UNIQUE REFERENCES videos(id) ON DELETE CASCADE,
    analyst_id INTEGER NOT NULL REFERENCES users(id),
    overall_rating INTEGER NOT NULL,
    summary TEXT NOT NULL,
    feedback_video_url TEXT,
    recommended_video_url TEXT,
    teaser_text TEXT,
    is_public BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP DEFAULT now() NOT NULL,
    updated_at TIMESTAMP DEFAULT now() NOT NULL
);

-- 5. Tabela de Comentários de Análise
CREATE TABLE IF NOT EXISTS analysis_comments (
    id SERIAL PRIMARY KEY,
    analysis_id INTEGER NOT NULL REFERENCES analyses(id) ON DELETE CASCADE,
    timestamp INTEGER NOT NULL,
    comment TEXT NOT NULL,
    type TEXT DEFAULT 'general' NOT NULL
);

-- 6. Tabela da Galeria
CREATE TABLE IF NOT EXISTS gallery_items (
    id SERIAL PRIMARY KEY,
    analysis_id INTEGER NOT NULL UNIQUE REFERENCES analyses(id) ON DELETE CASCADE,
    featured BOOLEAN DEFAULT false NOT NULL,
    category TEXT,
    "order" INTEGER DEFAULT 0 NOT NULL
);

-- 7. Tabelas Adicionais do Site (Se não existirem)
CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    external_url TEXT,
    featured BOOLEAN DEFAULT false,
    "order" TEXT DEFAULT '0'
);

CREATE TABLE IF NOT EXISTS about_content (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  last_updated TIMESTAMP DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS weapon_likes (
  weapon_id TEXT PRIMARY KEY,
  likes TEXT DEFAULT '0' NOT NULL
);

-- ==========================================
-- FIXES E PERMISSÕES
-- ==========================================

-- Garante que payment_id é opcional (Upload Manual)
ALTER TABLE videos ALTER COLUMN payment_id DROP NOT NULL;

-- Define o Admin Padrão (Troque se necessário)
UPDATE users SET role = 'admin' WHERE email = 'm1n3bas3@gmail.com';

SELECT 'ESTRUTURA COMPLETA CRIADA COM SUCESSO!' as status;
