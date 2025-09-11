import { useState, useEffect } from 'react'
import { SEOHead } from '../components/SEOHead'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { supabase } from '../lib/supabase'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, BookOpen, TrendingUp } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  reading_time: number
  views_count: number
  category: string
  tags: string[]
  created_at: string
  featured_image_url?: string
}

export function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const { data } = await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })

      if (data) {
        setFeaturedArticle(data[0] || null)
        setArticles(data)
      }
    } catch (error) {
      console.error('Error fetching articles:', error)
    } finally {
      setLoading(false)
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'psicologia': 'bg-purple-600/20 text-purple-300',
      'desenvolvimento-pessoal': 'bg-blue-600/20 text-blue-300',
      'storytelling': 'bg-green-600/20 text-green-300',
      'cultura-brasileira': 'bg-yellow-600/20 text-yellow-300',
      'carreira': 'bg-red-600/20 text-red-300',
      'educacao': 'bg-indigo-600/20 text-indigo-300',
      'default': 'bg-gray-600/20 text-gray-300'
    }
    return colors[category] || colors.default
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <>
      <SEOHead 
        title="Blog - Artigos sobre Psicologia do Humor e Crescimento Pessoal"
        description="Leia artigos originais sobre psicologia do humor, como superar situações constrangedoras, crescimento pessoal e muito mais. Conteúdo de qualidade para transformação pessoal."
        keywords="blog psicologia humor, artigos crescimento pessoal, como superar constrangimento, psicologia comportamental, desenvolvimento emocional"
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Blog & Artigos
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore conteúdo original sobre psicologia do humor, desenvolvimento pessoal e estratégias para transformar situações constrangedoras em crescimento.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-400 mr-2" />
                <span className="text-purple-300 font-semibold">Artigo em Destaque</span>
              </div>
              
              <Link to={`/blog/${featuredArticle.slug}`} className="block group">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredArticle.reading_time} min de leitura</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>
                      {formatDistanceToNow(new Date(featuredArticle.created_at), {
                        addSuffix: true,
                        locale: ptBR
                      })}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredArticle.category)}`}>
                    {featuredArticle.category.replace('-', ' ')}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <article key={article.id} className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <BookOpen className="w-3 h-3 mr-1" />
                    <span>{article.views_count} views</span>
                  </div>
                </div>
                
                <Link to={`/blog/${article.slug}`} className="block">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                </Link>
                
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{article.reading_time} min</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>
                      {formatDistanceToNow(new Date(article.created_at), {
                        addSuffix: true,
                        locale: ptBR
                      })}
                    </span>
                  </div>
                </div>
                
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quer contribuir com conteúdo?
            </h2>
            <p className="text-gray-400 mb-6">
              Se você tem experiência em psicologia, desenvolvimento pessoal ou simplesmente uma história inspiradora para compartilhar, adoraríamos ouvir de você.
            </p>
            <Link 
              to="/contato" 
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}