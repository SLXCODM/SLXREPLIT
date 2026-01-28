-- SCRIPT V2 (RODE ESSE!)
-- Este script corrige o erro "relation already exists" e libera o upload manual.

-- 1. Libera pagamento nulo (Safe)
ALTER TABLE videos ALTER COLUMN payment_id DROP NOT NULL;

-- 2. Define padrão público (Safe)
ALTER TABLE videos ALTER COLUMN allow_public SET DEFAULT true;

-- 3. Adiciona a proteção de unicidade SOMENTE se ela não existir (Isso corrige o erro 42P07)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'analyses_video_id_key') THEN
        ALTER TABLE analyses ADD CONSTRAINT analyses_video_id_key UNIQUE (video_id);
    END IF;
END $$;

-- 4. Confirmação
SELECT 'SUCESSO! Tabela consertada e pronta para Upload Manual.' as status;
