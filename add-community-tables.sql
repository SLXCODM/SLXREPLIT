-- EXECUTE ESSE SCRIPT NO "SQL EDITOR" DO SUPABASE PARA GARANTIR QUE AS TABELAS EXISTEM

-- 1. Tabela de Usuários (Se já existir, ignora)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT,
  role TEXT DEFAULT 'user',
  verification_token TEXT,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  open_id TEXT UNIQUE, -- Para Google Auth
  name TEXT,           -- Nome do Google
  email TEXT,          -- Email do Google
  login_method TEXT    -- 'google' ou 'local'
);

-- 2. Tabela de Pagamentos
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  amount TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, succeeded, failed
  stripe_payment_intent_id TEXT,
  description TEXT,
  currency TEXT DEFAULT 'BRL',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- 3. Tabela de Vídeos (Uploads e Manuais)
CREATE TABLE IF NOT EXISTS videos (
  id SERIAL PRIMARY KEY,
  payment_id INTEGER, -- Pode ser 0 ou null para posts manuais
  client_id INTEGER NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  s3_key TEXT,    -- Caminho do arquivo
  s3_url TEXT,    -- URL pública
  status TEXT DEFAULT 'awaiting_payment', -- awaiting_payment, uploaded, analyzing, completed
  allow_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  file_size TEXT,
  duration TEXT
);

-- 4. Tabela de Análises (Resultado)
CREATE TABLE IF NOT EXISTS analyses (
  id SERIAL PRIMARY KEY,
  video_id INTEGER NOT NULL REFERENCES videos(id),
  analyst_id INTEGER NOT NULL REFERENCES users(id),
  overall_rating INTEGER, -- 1 a 5
  summary TEXT,
  feedback_video_url TEXT,
  recommended_video_url TEXT,
  teaser_text TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- 5. Comentários (Opcional, futuro)
CREATE TABLE IF NOT EXISTS analysis_comments (
  id SERIAL PRIMARY KEY,
  analysis_id INTEGER NOT NULL REFERENCES analyses(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- 6. Itens da Galeria (Opcional, se usar tabela separada, mas o código atual usa 'analyses' com is_public=true)
-- CREATE TABLE IF NOT EXISTS gallery_items ... (Não necessário agora)

-- GARANTIR COLUNAS NOVAS (MIGRAÇÃO AUTOMÁTICA)
-- Adiciona colunas se elas faltarem (caso a tabela já exista antiga)

DO $$
BEGIN
    BEGIN
        ALTER TABLE users ADD COLUMN open_id TEXT UNIQUE;
    EXCEPTION
        WHEN duplicate_column THEN NULL;
    END;
    
    BEGIN
        ALTER TABLE users ADD COLUMN name TEXT;
    EXCEPTION
        WHEN duplicate_column THEN NULL;
    END;

    BEGIN
        ALTER TABLE users ADD COLUMN email TEXT;
    EXCEPTION
        WHEN duplicate_column THEN NULL;
    END;

    BEGIN
        ALTER TABLE users ADD COLUMN login_method TEXT;
    EXCEPTION
        WHEN duplicate_column THEN NULL;
    END;
END $$;
