import { SEOHead } from '../components/SEOHead'
import { Header } from '../components/Header'
import { PostForm } from '../components/PostForm'
import { PostList } from '../components/PostList'
import { AdBanner } from '../components/AdBanner'
import { Link } from 'react-router-dom'
import { BookOpen, MessageCircle, TrendingUp } from 'lucide-react'

export function HomePage() {
  return (
    <>
      <SEOHead 
        title="Vida de Merda - Compartilhe Momentos Constrangedores Anônimos"
        description="A maior plataforma brasileira para compartilhar histórias constrangedoras de forma anônima. Transforme seus perrengues em entretenimento e conecte-se com pessoas que passaram por situações similares."
        keywords="vida de merda, histórias constrangedoras, momentos embaraçosos, humor brasileiro, situações engraçadas, perrengues, trapalhadas"
        type="website"
      />
      
      <Header />
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Quick Links Section */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link 
              to="/historias" 
              className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
                <h3 className="text-xl font-bold text-white ml-3">Histórias por Categoria</h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300">
                Explore histórias organizadas por temas como trabalho, relacionamentos, escola e muito mais.
              </p>
            </Link>

            <Link 
              to="/blog" 
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                <h3 className="text-xl font-bold text-white ml-3">Blog & Artigos</h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300">
                Leia artigos sobre psicologia do humor, como superar situações constrangedoras e muito mais.
              </p>
            </Link>

            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white ml-3">Estatísticas</h3>
              </div>
              <p className="text-gray-400">
                Mais de <span className="text-green-400 font-semibold">1000+</span> histórias compartilhadas e <span className="text-green-400 font-semibold">50+</span> artigos publicados.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Post Form */}
            <PostForm />
            
            {/* Ad Banner */}
            <AdBanner 
              slot="home-middle-banner"
              format="horizontal"
              className=""
            />
            
            {/* Post List */}
            <PostList />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Vertical Ad */}
            <AdBanner 
              slot="sidebar-banner"
              format="vertical"
              className=""
            />
            
            {/* Popular Categories */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Categorias Populares</h3>
              <div className="space-y-3">
                <Link to="/categoria/trabalho" className="block text-gray-400 hover:text-purple-400 transition-colors">
                  🏢 Trabalho
                </Link>
                <Link to="/categoria/relacionamentos" className="block text-gray-400 hover:text-purple-400 transition-colors">
                  ❤️ Relacionamentos
                </Link>
                <Link to="/categoria/escola-faculdade" className="block text-gray-400 hover:text-purple-400 transition-colors">
                  🎓 Escola/Faculdade
                </Link>
                <Link to="/categoria/transporte" className="block text-gray-400 hover:text-purple-400 transition-colors">
                  🚗 Transporte
                </Link>
                <Link to="/categoria/familia" className="block text-gray-400 hover:text-purple-400 transition-colors">
                  👨‍👩‍👧‍👦 Família
                </Link>
              </div>
            </div>

            {/* Recent Blog Posts */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Artigos Recentes</h3>
              <div className="space-y-3">
                <Link to="/blog/como-superar-situacoes-constrangedoras-5-dicas-psicologicas" className="block">
                  <p className="text-sm text-gray-400 hover:text-purple-400 transition-colors line-clamp-2">
                    Como Superar Situações Constrangedoras: 5 Dicas Psicológicas
                  </p>
                </Link>
                <Link to="/blog/por-que-rimos-das-nossas-proprias-trapalhadas" className="block">
                  <p className="text-sm text-gray-400 hover:text-purple-400 transition-colors line-clamp-2">
                    Por Que Rimos das Nossas Próprias Trapalhadas?
                  </p>
                </Link>
                <Link to="/blog/o-poder-terapeutico-de-compartilhar-experiencias-embaracosas" className="block">
                  <p className="text-sm text-gray-400 hover:text-purple-400 transition-colors line-clamp-2">
                    O Poder Terapêutico de Compartilhar Experiências Embaraçosas
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}