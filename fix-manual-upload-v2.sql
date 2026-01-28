-- EXECUTE ESSE SCRIPT (VERSÃO V2 - A PROVA DE ERROS)

-- 1. Remove a obrigação de ter Pagamento para criar Vídeo (Isso permite posts manuais)
ALTER TABLE videos ALTER COLUMN payment_id DROP NOT NULL;

-- 2. Garante que allow_public é verdadeiro por padrão
ALTER TABLE videos ALTER COLUMN allow_public SET DEFAULT true;

-- 3. Adiciona a restrição de unicidade APENAS SE ELA NÃO EXISTIR (Para evitar o erro que você viu)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'analyses_video_id_key') THEN
        ALTER TABLE analyses ADD CONSTRAINT analyses_video_id_key UNIQUE (video_id);
    END IF;
END $$;

-- 4. Mensagem de Sucesso
SELECT 'SUCESSO! Agora o banco aceita posts manuais.' as status;
