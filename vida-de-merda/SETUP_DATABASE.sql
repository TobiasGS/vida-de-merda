-- Script SQL para configurar o banco de dados do "Vida de Merda"
-- Execute este script no painel SQL do seu projeto Supabase

-- 1. Criar a tabela para posts anônimos
CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    content TEXT NOT NULL CHECK (char_length(content) <= 1000 AND char_length(content) >= 10),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_approved BOOLEAN DEFAULT true
);

-- 2. Criar índice para melhorar performance das consultas ordenadas por data
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts (created_at DESC);

-- 3. Habilitar RLS (Row Level Security) 
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 4. Política para permitir leitura de posts aprovados para todos (sem autenticação)
CREATE POLICY IF NOT EXISTS "Todos podem visualizar posts aprovados" ON posts
    FOR SELECT
    USING (is_approved = true);

-- 5. Política para permitir inserção anônima (sem autenticação necessária)
CREATE POLICY IF NOT EXISTS "Todos podem criar posts" ON posts
    FOR INSERT
    WITH CHECK (true);

-- 6. (Opcional) Inserir alguns dados de exemplo para testar
INSERT INTO posts (content) VALUES 
('Ontem eu estava no elevador e apertei o botão do andar errado. Quando as portas abriram, entrei num escritório achando que era o meu prédio. Só percebi quando uma senhora me perguntou se eu estava perdido. VMM'),
('Fui ao supermercado e passei 10 minutos procurando meu celular... enquanto falava no telefone com minha mãe. Ela que me fez perceber. VMM'),
('Mandei uma mensagem reclamando do meu chefe para o grupo errado... que incluía o próprio chefe. Tive que inventar que era sobre outro chefe inexistente. VMM');

-- Verificar se tudo foi criado corretamente
SELECT 
    'Tabela criada com sucesso!' as status,
    count(*) as total_posts
FROM posts;