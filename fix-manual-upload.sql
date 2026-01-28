-- EXECUTE ESSE SCRIPT NO "SQL EDITOR" DO SUPABASE PARA CORRIGIR O ERRO DE UPLOAD MANUAL

-- 1. Remove a obrigação de ter Pagamento para criar Vídeo (Isso permite posts manuais)
ALTER TABLE videos ALTER COLUMN payment_id DROP NOT NULL;

-- 2. Garante que os outros campos estão certos
ALTER TABLE videos ALTER COLUMN status SET DEFAULT 'completed';
ALTER TABLE videos ALTER COLUMN allow_public SET DEFAULT true;

-- 3. Verifica se a tabela analyses existe (caso não tenha rodado o anterior)
CREATE TABLE IF NOT EXISTS analyses (
  id SERIAL PRIMARY KEY,
  video_id INTEGER NOT NULL REFERENCES videos(id) ON DELETE CASCADE,
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

-- 4. Garante que video_id na tabela analyses é unico
ALTER TABLE analyses ADD CONSTRAINT analyses_video_id_key UNIQUE (video_id);

-- Mensagem de sucesso
SELECT 'Correção Aplicada com Sucesso: Agora posts manuais funcionam!' as mensagem;
