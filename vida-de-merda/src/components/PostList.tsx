import { usePosts } from '../hooks/usePosts'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { LikeButton } from './LikeButton'

export function PostList() {
  const { posts, loading, error, refreshPosts } = usePosts()

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-6 animate-pulse">
            <div className="space-y-3">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              <div className="h-3 bg-gray-700 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 text-center">
        <p className="text-red-400 mb-4">Erro ao carregar as histórias: {error}</p>
        <button
          onClick={refreshPosts}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center">
        <p className="text-gray-400 text-lg">Ainda não há histórias compartilhadas.</p>
        <p className="text-gray-500 mt-2">Seja o primeiro a compartilhar sua história constrangedora!</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Histórias Recentes ({posts.length})
        </h2>
        <button
          onClick={refreshPosts}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          Atualizar
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="bg-gray-900 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-purple-400 font-semibold text-sm">
                #{posts.length - index}
              </span>
              <span className="text-gray-500 text-sm">
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBR
                })}
              </span>
            </div>
            
            <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
            
            <div className="mt-4 pt-3 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.content.length} caracteres</span>
                  <span>•</span>
                  <span>Anônimo</span>
                </div>
                <LikeButton 
                  postId={post.id} 
                  likesCount={post.likes_count || 0} 
                  size="sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}