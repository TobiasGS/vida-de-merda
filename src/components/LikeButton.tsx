import React from 'react';
import { Heart } from 'lucide-react';
import { useLike } from '../hooks/useLike';

interface LikeButtonProps {
  postId: string;
  className?: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  postId,
  className = ''
}) => {
  const { likesCount, isLiked, isLoading, toggleLike } = useLike(postId);

  return (
    <button
      onClick={toggleLike}
      disabled={isLoading}
      className={`flex items-center space-x-1 text-sm transition-colors duration-200 ${
        isLiked
          ? 'text-red-500 hover:text-red-600'
          : 'text-gray-500 hover:text-red-500'
      } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'} 
      px-2 py-1 rounded-md ${className}`}
      title={isLiked ? 'Remover curtida' : 'Curtir esta história'}
    >
      <Heart
        size={16}
        className={`${isLiked ? 'fill-current' : ''} transition-all duration-200`}
      />
      <span className="font-medium">{likesCount}</span>
      {isLoading && (
        <div className="w-3 h-3 border border-gray-300 border-t-transparent rounded-full animate-spin ml-1" />
      )}
    </button>
  );
};