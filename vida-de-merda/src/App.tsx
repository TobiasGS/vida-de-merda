import { Header } from './components/Header'
import { PostForm } from './components/PostForm'
import { PostList } from './components/PostList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Fundo com efeito de gradient animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 pb-12">
          <div className="space-y-8">
            {/* Formulário para criar novo post */}
            <PostForm />
            
            {/* Lista de posts */}
            <PostList />
          </div>
        </main>
        
        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm">
              Vida de Merda - Compartilhe seus momentos constrangedores de forma anônima
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Desenvolvido com React + Supabase | 2025
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App