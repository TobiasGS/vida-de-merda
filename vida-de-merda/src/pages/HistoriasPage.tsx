import { useState, useEffect } from 'react'
import { SEOHead } from '../components/SEOHead'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { supabase } from '../lib/supabase'
import { Link } from 'react-router-dom'
import { Search, Filter, Calendar, Heart } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Post {
  id: string
  content: string
  created_at: string
  likes_count: number
  is_featured: boolean
  category_id?: string
  categories?: {
    name: string
    slug: string
    color: string
  }
}

interface Category {
  id: string
  name: string
  slug: string
  color: string
  description: string
}

export function HistoriasPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [sortBy, setSortBy] = useState<'recent' | 'likes'>('recent')

  useEffect(() => {
    fetchData()
  }, [selectedCategory, sortBy])

  const fetchData = async () => {
    try {
      setLoading(true)
      
      // Fetch categories
      const { data: categoriesData } = await supabase
        .from('categories')
        .select('*')
        .order('name')
      
      if (categoriesData) {
        setCategories(categoriesData)
      }

      // Build posts query
      let query = supabase
        .from('posts')
        .select(`
          *,
          categories (
            name,
            slug,
            color
          )
        `)
        .eq('is_approved', true)

      // Apply category filter
      if (selectedCategory) {
        query = query.eq('category_id', selectedCategory)
      }

      // Apply sorting
      if (sortBy === 'recent') {
        query = query.order('created_at', { ascending: false })
      } else {
        query = query.order('likes_count', { ascending: false })
      }

      query = query.limit(50)

      const { data: postsData } = await query

      if (postsData) {
        setPosts(postsData)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <SEOHead 
        title="Histórias Constrangedoras por Categoria"
        description="Explore milhares de histórias constrangedoras organizadas por categorias como trabalho, relacionamentos, escola, transporte e muito mais. Encontre situações com as quais você se identifica."
        keywords="histórias constrangedoras por categoria, perrengues trabalho, situações embaraçosas escola, momentos constrangedores relacionamento"
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Histórias por Categoria
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore histórias constrangedoras organizadas por temas. Encontre situações com as quais você se identifica e descubra que não está sozinho em suas trapalhadas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('')}
            className={`p-4 rounded-xl border transition-all duration-200 ${
              selectedCategory === ''
                ? 'bg-purple-600/20 border-purple-500/50 text-purple-300'
                : 'bg-gray-900/50 border-gray-700 text-gray-400 hover:border-purple-500/30'
            }`}
          >
            <div className="text-2xl mb-2">🔥</div>
            <div className="font-semibold">Todas</div>
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-xl border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600/20 border-purple-500/50 text-purple-300'
                  : 'bg-gray-900/50 border-gray-700 text-gray-400 hover:border-purple-500/30'
              }`}
            >
              <div className="text-2xl mb-2">{category.name.includes('Trabalho') ? '🏢' : 
                category.name.includes('Escola') ? '🎓' :
                category.name.includes('Relacionamentos') ? '❤️' :
                category.name.includes('Família') ? '👨‍👩‍👧‍👦' :
                category.name.includes('Transporte') ? '🚗' :
                category.name.includes('Compras') ? '🛍️' :
                category.name.includes('Saúde') ? '🏥' :
                category.name.includes('Festas') ? '🎉' :
                category.name.includes('Tecnologia') ? '💻' :
                category.name.includes('Esportes') ? '🏃‍♂️' :
                category.name.includes('Comida') ? '🍕' :
                category.name.includes('Viagens') ? '✈️' : '😊'}</div>
              <div className="font-semibold text-sm">{category.name}</div>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar histórias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
          
          {/* Sort */}
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'recent' | 'likes')}
              className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            >
              <option value="recent">Mais recentes</option>
              <option value="likes">Mais curtidas</option>
            </select>
          </div>
        </div>

        {/* Posts List */}
        {loading ? (
          <div className="py-12">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">Nenhuma história encontrada.</p>
              </div>
            ) : (
              filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`bg-gray-900/50 border rounded-xl p-6 transition-all duration-200 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 ${
                    post.is_featured ? 'border-purple-500/50 bg-purple-900/10' : 'border-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-purple-400 font-semibold text-sm">
                        #{filteredPosts.length - index}
                      </span>
                      {post.categories && (
                        <Link
                          to={`/categoria/${post.categories.slug}`}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs font-medium rounded-full hover:bg-purple-600/30 transition-colors"
                        >
                          {post.categories.name}
                        </Link>
                      )}
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
              ))
            )}
          </div>
        )}
      </div>
    </>
  )
}