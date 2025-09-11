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

  const createPost = async (content: string, categoryId?: string) => {
    try {
      // Validar limite de caracteres
      if (content.length > 1000) {
        throw new Error('O comentário deve ter no máximo 1000 caracteres')
      }

      if (content.trim().length < 10) {
        throw new Error('O comentário deve ter pelo menos 10 caracteres')
      }

      const postData: any = { content: content.trim() }
      if (categoryId) {
        postData.category_id = categoryId
      }

      const { data, error } = await supabase
        .from('posts')
        .insert([postData])
        .select()

      if (error) throw error

      // Atualizar lista de posts
      await fetchPosts()
      return { success: true }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  const toggleLike = async (postId: string) => {
    try {
      // Usar IP como identificador único do usuário
      const userIdentifier = localStorage.getItem('user-id') || 
        Math.random().toString(36).substring(2, 15)
      
      if (!localStorage.getItem('user-id')) {
        localStorage.setItem('user-id', userIdentifier)
      }

      // Verificar se já curtiu
      const { data: existingLike } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_identifier', userIdentifier)
        .maybeSingle()

      if (existingLike) {
        // Remover curtida
        await supabase
          .from('comment_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_identifier', userIdentifier)

        // Decrementar contador
        const { data: currentPost } = await supabase
          .from('posts')
          .select('likes_count')
          .eq('id', postId)
          .single()
        
        if (currentPost) {
          await supabase
            .from('posts')
            .update({ likes_count: Math.max(0, (currentPost.likes_count || 0) - 1) })
            .eq('id', postId)
        }
      } else {
        // Adicionar curtida
        await supabase
          .from('comment_likes')
          .insert([{ post_id: postId, user_identifier: userIdentifier }])

        // Incrementar contador
        const { data: currentPost } = await supabase
          .from('posts')
          .select('likes_count')
          .eq('id', postId)
          .single()
        
        if (currentPost) {
          await supabase
            .from('posts')
            .update({ likes_count: (currentPost.likes_count || 0) + 1 })
            .eq('id', postId)
        }
      }

      // Atualizar lista de posts
      await fetchPosts()
      return { success: true, liked: !existingLike }
    } catch (err: any) {
      return { success: false, error: err.message }
    }
  }

  const checkUserLike = async (postId: string) => {
    try {
      const userIdentifier = localStorage.getItem('user-id')
      if (!userIdentifier) return false

      const { data } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_identifier', userIdentifier)
        .maybeSingle()

      return !!data
    } catch (err) {
      return false
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
    toggleLike,
    checkUserLike,
    refreshPosts: fetchPosts
  }
}