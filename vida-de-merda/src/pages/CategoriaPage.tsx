import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { supabase } from '../lib/supabase'
import { Calendar, Heart, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Post {
  id: string
  content: string
  created_at: string
  likes_count: number
  is_featured: boolean
}

interface Category {
  id: string
  name: string
  slug: string
  description: string
  color: string
}

export function CategoriaPage() {
  const { slug } = useParams<{ slug: string }>()
  const [category, setCategory] = useState<Category | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (slug) {
      fetchCategoryData(slug)
    }
  }, [slug])

  const fetchCategoryData = async (categorySlug: string) => {
    try {
      setLoading(true)
      setError(null)

      // Fetch category
      const { data: categoryData, error: categoryError } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', categorySlug)
        .maybeSingle()

      if (categoryError) throw categoryError

      if (!categoryData) {
        setError('Categoria não encontrada')
        return
      }

      setCategory(categoryData)

      // Fetch posts for this category
      const { data: postsData, error: postsError } = await supabase
        .from('posts')
        .select('*')
        .eq('category_id', categoryData.id)
        .eq('is_approved', true)
        .order('created_at', { ascending: false })
        .limit(50)

      if (postsError) throw postsError

      if (postsData) {
        setPosts(postsData)
      }
    } catch (err) {
      console.error('Error fetching category data:', err)
      setError('Erro ao carregar categoria')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error || !category) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Categoria não encontrada</h1>
        <p className="text-gray-400 mb-6">{error || 'A categoria que você procura não existe.'}</p>
        <Link 
          to="/historias" 
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar às Histórias
        </Link>
      </div>
    )
  }

  const getCategoryIcon = (name: string) => {
    if (name.includes('Trabalho')) return '🏢'
    if (name.includes('Escola')) return '🎓'
    if (name.includes('Relacionamentos')) return '❤️'
    if (name.includes('Família')) return '👨‍👩‍👧‍👦'
    if (name.includes('Transporte')) return '🚗'
    if (name.includes('Compras')) return '🛍️'
    if (name.includes('Saúde')) return '🏥'
    if (name.includes('Festas')) return '🎉'
    if (name.includes('Tecnologia')) return '💻'
    if (name.includes('Esportes')) return '🏃‍♂️'
    if (name.includes('Comida')) return '🍕'
    if (name.includes('Viagens')) return '✈️'
    return '😊'
  }

  return (
    <>
      <SEOHead 
        title={`Histórias de ${category.name} - Vida de Merda`}
        description={`${category.description} Leia histórias constrangedoras reais sobre ${category.name.toLowerCase()} compartilhadas anonimamente por nossos usuários.`}
        keywords={`histórias ${category.name.toLowerCase()}, perrengues ${category.name.toLowerCase()}, situações constrangedoras ${category.name.toLowerCase()}`}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/historias" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar às Histórias
          </Link>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{getCategoryIcon(category.name)}</div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Histórias de {category.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            {category.description}
          </p>
          <div className="text-gray-500">
            <span className="font-semibold text-purple-400">{posts.length}</span> histórias nesta categoria
          </div>
        </div>

        {/* Posts List */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-6">
              Ainda não há histórias nesta categoria.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Seja o primeiro a compartilhar
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className={`bg-gray-900/50 border rounded-xl p-6 transition-all duration-200 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 ${
                  post.is_featured ? 'border-purple-500/50 bg-purple-900/10' : 'border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-400 font-semibold text-sm">
                      #{posts.length - index}
                    </span>
                    {post.is_featured && (
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs font-medium rounded-full">
                        Destaque
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDistanceToNow(new Date(post.created_at), {
                          addSuffix: true,
                          locale: ptBR
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-200 leading-relaxed whitespace-pre-wrap mb-4">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{post.content.length} caracteres</span>
                    <span>•</span>
                    <span>Anônimo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Tem uma história de {category.name}?
            </h2>
            <p className="text-gray-400 mb-6">
              Compartilhe sua experiência de forma anônima e ajude outras pessoas a se sentirem menos sozinhas em suas trapalhadas.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Compartilhar História
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}