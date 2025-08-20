import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select(`
        *,
        likes:likes(count)
      `)
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    // Formata a contagem de likes
    const formattedPosts = data?.map(post => ({
      ...post,
      likes_count: post.likes?.[0]?.count || 0
    })) || [];
    
    setPosts(formattedPosts);
  }

  return (
    <div className="container">
      <h1>Vida de Merda</h1>
      <div className="post-list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;