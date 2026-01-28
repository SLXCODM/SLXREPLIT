-- SCRIPT DE EMERGÊNCIA (NUCLEAR)
-- Esse script remove a regra que trava o banco se o ID do pagamento não existir.

-- 1. Remove a verificação de "Chave Estrangeira" (Foreign Key) da coluna payment_id
-- O nome da constraint geralmente é videos_payment_id_payments_id_fk ou similar.
-- Vamos tentar remover de forma genérica.

DO $$
DECLARE r RECORD;
BEGIN
    FOR r IN (
        SELECT conname 
        FROM pg_constraint 
        WHERE conrelid = 'videos'::regclass 
        AND confrelid = 'payments'::regclass
    ) LOOP
        EXECUTE 'ALTER TABLE videos DROP CONSTRAINT ' || quote_ident(r.conname);
    END LOOP;
END $$;

-- 2. Garante novamente que aceita NULO
ALTER TABLE videos ALTER COLUMN payment_id DROP NOT NULL;

SELECT 'TRAVA DE SEGURANÇA REMOVIDA. AGORA ACEITA TUDO.' as status;
