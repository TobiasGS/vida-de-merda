# Vida de Merda 🤦‍♂️

Um site onde pessoas podem compartilhar momentos constrangedores de suas vidas de forma anônima, para entretenimento dos leitores.

## 🚀 Funcionalidades

- ✅ **Sistema de postagem anônima** - Sem necessidade de cadastro
- ✅ **Limitação rigorosa de 1000 caracteres** por comentário
- ✅ **Interface minimalista e responsiva** 
- ✅ **Visualização de posts existentes** em tempo real
- ✅ **Armazenamento seguro no Supabase**
- ✅ **Design otimizado para mobile e desktop**
- ✅ **Carregamento rápido e interface intuitiva**

## 🎨 Design

Interface minimalista com paleta de cores:
- **Roxo**: #8B5CF6, #7C3AED
- **Azul**: #3B82F6, #2563EB  
- **Preto**: #000000, #1F2937

O design evoca diversão e descontração, mantendo a legibilidade como prioridade.

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS
- **Backend**: Supabase (Database + APIs)
- **Formatação de datas**: date-fns

## 📦 Configuração do Banco de Dados

1. Acesse o painel do seu projeto Supabase
2. Vá para a seção "SQL Editor"
3. Execute o script `SETUP_DATABASE.sql` incluído neste projeto
4. Verifique se a tabela `posts` foi criada com sucesso

## 🚀 Como Executar

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview da build
pnpm run preview
```

## 📝 Configuração das Credenciais

As credenciais do Supabase estão configuradas em `src/lib/supabase.ts`:

```typescript
const supabaseUrl = 'https://sadehqajqbjudckhsusr.supabase.co'
const supabaseAnonKey = 'sua-chave-aqui'
```

## 🗃️ Estrutura do Banco

### Tabela: `posts`

| Campo | Tipo | Descrição |
|-------|------|----------|
| `id` | UUID | Chave primária (auto-gerada) |
| `content` | TEXT | Conteúdo do post (10-1000 caracteres) |
| `created_at` | TIMESTAMP | Data de criação (auto-gerada) |
| `is_approved` | BOOLEAN | Status de aprovação (padrão: true) |

## 🛡️ Segurança

- **RLS (Row Level Security)** habilitado
- **Políticas de segurança** configuradas:
  - Qualquer um pode ler posts aprovados
  - Qualquer um pode criar novos posts
- **Validação de dados** no frontend e backend
- **Limite de caracteres** rigorosamente aplicado

## 🎯 Funcionalidades Futuras

- [ ] Sistema de moderação administrativa
- [ ] Categorias de histórias
- [ ] Sistema de reações (curtidas)
- [ ] Compartilhamento social
- [ ] Feed infinito com paginação

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 **Mobile** (320px+)
- 📟 **Tablet** (768px+) 
- 💻 **Desktop** (1024px+)

---

**Desenvolvido com ❤️ usando React + Supabase**