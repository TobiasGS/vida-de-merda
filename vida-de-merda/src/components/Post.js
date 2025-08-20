import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Post({ post }) {
  const [localLikes, setLocalLikes] = useState(0);

  const handleLike = async () => {
    try {
      // Insere like no banco
      const { error } = await supabase
        .from('likes')
        .insert({ post_id: post.id });

      if (!error) {
        setLocalLikes(prev => prev + 1);
      }
    } catch (error) {
      console.error('Erro ao dar like:', error);
    }
  };

  return (
    <div className="post">
      <p className="content">{post.content}</p>
      <div className="post-footer">
        <button 
          className="like-button" 
          onClick={handleLike}
        >
          ❤️ {post.likes_count + localLikes}
        </button>
        <span className="timestamp">
          {new Date(post.created_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}