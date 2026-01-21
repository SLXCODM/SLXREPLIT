-- ============================================
-- SUPABASE SETUP - SLX Community Platform
-- ============================================
-- Execute este SQL no SQL Editor do Supabase

-- 1. CRIAR TABELAS
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT,
  name TEXT,
  open_id TEXT,
  login_method TEXT,
  role TEXT DEFAULT 'user' NOT NULL,
  last_signed_in TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  amount TEXT NOT NULL,
  currency TEXT DEFAULT 'BRL' NOT NULL,
  status TEXT NOT NULL,
  stripe_payment_intent_id TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS videos (
  id SERIAL PRIMARY KEY,
  payment_id INTEGER NOT NULL,
  client_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  s3_key TEXT NOT NULL,
  s3_url TEXT NOT NULL,
  file_size INTEGER,
  duration INTEGER,
  status TEXT DEFAULT 'awaiting_payment' NOT NULL,
  allow_public BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS analyses (
  id SERIAL PRIMARY KEY,
  video_id INTEGER NOT NULL UNIQUE,
  analyst_id INTEGER NOT NULL,
  overall_rating INTEGER NOT NULL,
  summary TEXT NOT NULL,
  feedback_video_url TEXT,
  recommended_video_url TEXT,
  teaser_text TEXT,
  is_public BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS analysis_comments (
  id SERIAL PRIMARY KEY,
  analysis_id INTEGER NOT NULL,
  timestamp INTEGER NOT NULL,
  comment TEXT NOT NULL,
  category TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS gallery_items (
  id SERIAL PRIMARY KEY,
  analysis_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- 2. CRIAR SUA CONTA ADMIN
-- IMPORTANTE: Substitua 'SEU_EMAIL_AQUI' pelo seu email real!
INSERT INTO users (email, name, role, login_method, password)
VALUES (
  'M1n3bas3@gmail.com',  -- ← SEU EMAIL
  'SLX - Admin',          -- ← SEU NOME
  'admin',                -- ← ROLE DE ADMIN
  'local',
  -- Senha padrão: "admin123" (você pode mudar depois no site)
  '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8.d9c3d3e8f3b3b2a6a0c0e3f3d3c3b3a3'
)
ON CONFLICT (email) DO UPDATE SET role = 'admin';

-- 3. ÍNDICES PARA PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_videos_client_id ON videos(client_id);
CREATE INDEX IF NOT EXISTS idx_videos_status ON videos(status);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_analyses_video_id ON analyses(video_id);

-- ============================================
-- PRONTO! Copie a DATABASE_URL e cole no Vercel
-- ============================================
