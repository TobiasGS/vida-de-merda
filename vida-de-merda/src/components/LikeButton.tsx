import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { usePosts } from '../hooks/usePosts'

interface LikeButtonProps {
  postId: string
  likesCount: number
  size?: 'sm' | 'md' | 'lg'
}

export function LikeButton({ postId, likesCount, size = 'md' }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentLikes, setCurrentLikes] = useState(likesCount)
  const { toggleLike, checkUserLike } = usePosts()

  useEffect(() => {
    checkIfUserLiked()
  }, [postId])

  const checkIfUserLiked = async () => {
    const liked = await checkUserLike(postId)
    setIsLiked(liked)
  }

  const handleLikeClick = async () => {
    if (isLoading) return

    setIsLoading(true)
    
    // Atualização otimista para feedback instantâneo
    const wasLiked = isLiked
    setIsLiked(!wasLiked)
    setCurrentLikes(prev => wasLiked ? prev - 1 : prev + 1)
    
    const result = await toggleLike(postId)
    
    if (!result.success) {
      // Reverter se deu erro
      setIsLiked(wasLiked)
      setCurrentLikes(prev => wasLiked ? prev + 1 : prev - 1)
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