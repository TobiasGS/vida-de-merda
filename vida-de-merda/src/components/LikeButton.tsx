import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { usePosts } from '../hooks/usePosts'
import { supabase } from '../lib/supabase'

interface LikeButtonProps {
  postId: string
  likesCount: number
  size?: 'sm' | 'md' | 'lg'
}

export function LikeButton({ postId, likesCount, size = 'md' }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentLikes, setCurrentLikes] = useState(0)
  const { toggleLike } = usePosts()

  useEffect(() => {
    loadLikeState()
  }, [postId, likesCount])

  const loadLikeState = async () => {
    // Carregar contagem real de curtidas do banco
    const { data: likesData } = await supabase
      .from('comment_likes')
      .select('id', { count: 'exact' })
      .eq('post_id', postId)
    
    const actualCount = likesData?.length || 0
    setCurrentLikes(actualCount)
    
    // Verificar se o usuário atual curtiu
    const userIdentifier = localStorage.getItem('user-id')
    if (userIdentifier) {
      const { data: userLike } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_identifier', userIdentifier)
        .maybeSingle()
      
      setIsLiked(!!userLike)
    }
  }

  const handleLikeClick = async () => {
    if (isLoading) return

    setIsLoading(true)
    
    const result = await toggleLike(postId)
    
    if (result.success) {
      // Atualizar estado baseado no resultado real do banco
      setIsLiked(result.liked)
      setCurrentLikes(result.count || 0)
    } else {
      console.error('Error liking post:', result.error)
      // Recarregar estado real em caso de erro
      await loadLikeState()
    }
    
    setIsLoading(false)
  }

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  const buttonSizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  return (
    <button
      onClick={handleLikeClick}
      disabled={isLoading}
      className={`
        flex items-center space-x-1 rounded-full border transition-all duration-200
        ${isLiked 
          ? 'bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30' 
          : 'bg-gray-800/50 border-gray-600 text-gray-400 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400'
        }
        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
        ${buttonSizeClasses[size]}
      `}
    >
      <Heart 
        className={`${sizeClasses[size]} transition-all duration-200 ${
          isLiked ? 'fill-current' : ''
        }`}
      />
      <span className="font-medium">{currentLikes}</span>
    </button>
  )
}