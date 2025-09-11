import { useState, useEffect } from 'react'
import { supabase, type Post } from '../lib/supabase'
import { generateUniqueUserId } from '../utils/userIdentifier'

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
    const userIdentifier = generateUniqueUserId()
    console.log('📦 Iniciando toggle like:', { postId, userIdentifier })
    
    try {
      // Operação atômica: verificar e executar ação
      const { data: existingLike, error: selectError } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_identifier', userIdentifier)
        .maybeSingle()

      if (selectError) {
        console.error('❌ Erro ao verificar like existente:', selectError)
        throw selectError
      }

      console.log('🔍 Like existente:', existingLike ? 'SIM' : 'NÃO')
      
      let newLikedState = false
      
      if (existingLike) {
        // Remover curtida existente
        console.log('🗾 Removendo curtida...')
        const { error: deleteError } = await supabase
          .from('comment_likes')
          .delete()
          .eq('id', existingLike.id) // Usar ID específico para maior segurança

        if (deleteError) {
          console.error('❌ Erro ao remover curtida:', deleteError)
          throw deleteError
        }
        
        newLikedState = false
        console.log('✅ Curtida removida com sucesso')
      } else {
        // Adicionar nova curtida com verificação de duplicatas
        console.log('🟢 Adicionando nova curtida...')
        const { error: insertError } = await supabase
          .from('comment_likes')
          .insert({
            post_id: postId,
            user_identifier: userIdentifier
          })

        if (insertError) {
          console.error('❌ Erro ao adicionar curtida:', insertError)
          // Se for erro de duplicata, tentar novamente
          if (insertError.code === '23505') {
            console.log('🔄 Erro de duplicata detectado, recarregando estado...')
            return await toggleLike(postId) // Retry uma vez
          }
          throw insertError
        }
        
        newLikedState = true
        console.log('✅ Curtida adicionada com sucesso')
      }

      // Recontar curtidas de forma robusta
      console.log('📊 Recontando curtidas...')
      const { count: actualCount, error: countError } = await supabase
        .from('comment_likes')
        .select('*', { count: 'exact', head: true })
        .eq('post_id', postId)

      if (countError) {
        console.error('❌ Erro ao contar curtidas:', countError)
        throw countError
      }

      const finalCount = actualCount || 0
      console.log('📊 Contagem final:', finalCount)
      
      // Atualizar contador no post
      const { error: updateError } = await supabase
        .from('posts')
        .update({ likes_count: finalCount })
        .eq('id', postId)

      if (updateError) {
        console.error('❌ Erro ao atualizar contador:', updateError)
        throw updateError
      }

      console.log('✅ Operação completa:', { liked: newLikedState, count: finalCount })

      // Atualizar lista de posts
      await fetchPosts()
      return { 
        success: true, 
        liked: newLikedState, 
        count: finalCount,
        userIdentifier 
      }
    } catch (err: any) {
      console.error('❌❌ Erro crítico no toggleLike:', err)
      return { success: false, error: err.message, userIdentifier }
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
    refreshPosts: fetchPosts
  }
}