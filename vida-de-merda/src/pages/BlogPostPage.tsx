import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { AdBanner } from '../components/AdBanner'
import { supabase } from '../lib/supabase'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Article {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  meta_title?: string
  meta_description?: string
  author: string
  reading_time: number
  views_count: number
  category: string
  tags: string[]
  created_at: string
  updated_at: string
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<Partial<Article>[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (slug) {
      fetchArticle(slug)
    }
  }, [slug])

  const fetchArticle = async (articleSlug: string) => {
    try {
      setLoading(true)
      setError(null)

      // Fetch main article
      const { data: articleData, error: articleError } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', articleSlug)
        .eq('status', 'published')
        .maybeSingle()

      if (articleError) throw articleError

      if (!articleData) {
        setError('Artigo não encontrado')
        return
      }

      setArticle(articleData)

      // Update view count
      await supabase
        .from('articles')
        .update({ views_count: articleData.views_count + 1 })
        .eq('id', articleData.id)

      // Fetch related articles
      const { data: relatedData } = await supabase
        .from('articles')
        .select('id, title, slug, excerpt, author, reading_time, category, created_at')
        .eq('status', 'published')
        .neq('id', articleData.id)
        .limit(3)
        .order('created_at', { ascending: false })

      if (relatedData) {
        setRelatedArticles(relatedData)
      }
    } catch (err) {
      console.error('Error fetching article:', err)
      setError('Erro ao carregar artigo')
    } finally {
      setLoading(false)
    }
  }

  const shareArticle = async () => {
    if (article && navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Artigo não encontrado</h1>
        <p className="text-gray-400 mb-6">{error || 'O artigo que você procura não existe ou foi removido.'}</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEOHead 
        title={article.meta_title || article.title}
        description={article.meta_description || article.excerpt}
        keywords={article.tags.join(', ')}
        type="article"
        author={article.author}
        publishedTime={article.created_at}
        modifiedTime={article.updated_at}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full">
              {article.category.replace('-', ' ')}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>
                {formatDistanceToNow(new Date(article.created_at), {
                  addSuffix: true,
                  locale: ptBR
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.reading_time} minutos de leitura</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>{article.views_count} visualizações</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              {article.excerpt}
            </p>
            <button
              onClick={shareArticle}
              className="ml-4 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              title="Compartilhar artigo"
            >
              <Share2 className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </header>

        {/* Ad Banner */}
        <AdBanner 
          slot="article-top-banner"
          format="horizontal"
          className="mb-8"
        />

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: article.content
                .split('\n')
                .map(paragraph => {
                  if (paragraph.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold text-white mb-6 mt-12">${paragraph.slice(2)}</h1>`
                  }
                  if (paragraph.startsWith('## ')) {
                    return `<h2 class="text-2xl font-bold text-white mb-4 mt-8">${paragraph.slice(3)}</h2>`
                  }
                  if (paragraph.startsWith('### ')) {
                    return `<h3 class="text-xl font-bold text-gray-200 mb-3 mt-6">${paragraph.slice(4)}</h3>`
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return `<p class="font-bold text-gray-200 mb-4">${paragraph.slice(2, -2)}</p>`
                  }
                  if (paragraph.startsWith('- ')) {
                    return `<li class="text-gray-300 mb-2 ml-6">${paragraph.slice(2)}</li>`
                  }
                  if (paragraph.trim() === '') {
                    return '<br />'
                  }
                  return `<p class="text-gray-300 mb-4 leading-relaxed">${paragraph}</p>`
                })
                .join('')
            }}
          />
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Ad Banner */}
        <AdBanner 
          slot="article-bottom-banner"
          format="horizontal"
          className="my-12"
        />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Artigos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="block bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{related.author}</span>
                    <span>{related.reading_time} min</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}