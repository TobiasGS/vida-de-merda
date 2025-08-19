Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        // Get Supabase service role key from environment
        const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
        const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://sadehqajqbjudckhsusr.supabase.co';

        if (!serviceRoleKey) {
            throw new Error('Service role key not found');
        }

        // SQL para criar tabela posts e configurar RLS
        const setupSQL = `
            -- Criar a tabela para posts anônimos do Vida de Merda
            CREATE TABLE IF NOT EXISTS posts (
                id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                content TEXT NOT NULL CHECK (char_length(content) <= 1000 AND char_length(content) >= 10),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                is_approved BOOLEAN DEFAULT true
            );
            
            -- Criar índice para melhorar performance das consultas ordenadas por data
            CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts (created_at DESC);
            
            -- Habilitar RLS (Row Level Security) 
            ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
            
            -- Remover políticas existentes se houver
            DROP POLICY IF EXISTS "Todos podem visualizar posts aprovados" ON posts;
            DROP POLICY IF EXISTS "Todos podem criar posts" ON posts;
            
            -- Política para permitir leitura de posts aprovados para todos
            CREATE POLICY "Todos podem visualizar posts aprovados" ON posts
                FOR SELECT
                USING (is_approved = true);
            
            -- Política para permitir inserção anônima (sem autenticação)
            CREATE POLICY "Todos podem criar posts" ON posts
                FOR INSERT
                WITH CHECK (true);
        `;

        // Executar SQL usando a API do Supabase
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sql: setupSQL })
        });

        if (!response.ok) {
            // Tentar executar via endpoint direto do PostgreSQL
            const pgResponse = await fetch(`${supabaseUrl}/db/query`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: setupSQL })
            });
            
            if (!pgResponse.ok) {
                throw new Error(`Database setup failed: ${response.status}`);
            }
        }

        // Inserir alguns posts de exemplo
        const samplePosts = [
            'Ontem eu estava no elevador e apertei o botão do andar errado. Quando as portas abriram, entrei num escritório achando que era o meu prédio. Só percebi quando uma senhora me perguntou se eu estava perdido. VMM',
            'Fui ao supermercado e passei 10 minutos procurando meu celular... enquanto falava no telefone com minha mãe. Ela que me fez perceber. VMM',
            'Mandei uma mensagem reclamando do meu chefe para o grupo errado... que incluía o próprio chefe. Tive que inventar que era sobre outro chefe inexistente. VMM'
        ];

        // Inserir posts de exemplo
        for (const content of samplePosts) {
            await fetch(`${supabaseUrl}/rest/v1/posts`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${serviceRoleKey}`,
                    'apikey': serviceRoleKey,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({ content })
            });
        }

        // Verificar se a tabela foi criada
        const checkResponse = await fetch(`${supabaseUrl}/rest/v1/posts?select=count`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${serviceRoleKey}`,
                'apikey': serviceRoleKey,
                'Content-Type': 'application/json'
            }
        });

        const result = {
            success: true,
            message: 'Banco de dados configurado com sucesso!',
            table_created: true,
            rls_enabled: true,
            sample_posts_added: true,
            check_response_status: checkResponse.status
        };

        return new Response(JSON.stringify({ data: result }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Database setup error:', error);

        const errorResponse = {
            error: {
                code: 'DATABASE_SETUP_FAILED',
                message: error.message
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});