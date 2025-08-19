import { useState, useEffect } from 'react'
import { supabase, type Post } from '../lib/supabase'

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false })
        .limit(50)

      if (error) throw error
      setPosts(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const createPost = async (content: string) => {
    try {
      // Validar limite de caracteres
      if (content.length > 1000) {
        throw new Error('O comentário deve ter no máximo 1000 caracteres')
      }

      if (content.trim().length < 10) {
        throw new Error('O comentário deve ter pelo menos 10 caracteres')
      }

      const { data, error } = await supabase
        .from('posts')
        .insert([{ content: content.trim() }])
        .select()

      if (error) throw error

      // Atualizar lista de posts
      await fetchPosts()
      return { success: true }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return {
    posts,
    loading,
    error,
    createPost,
    refreshPosts: fetchPosts
  }
}