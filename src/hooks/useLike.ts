import { useState, useCallback, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { generateUniqueUserId } from '../utils/userIdentifier';

interface UseLikeResult {
  likesCount: number;
  isLiked: boolean;
  isLoading: boolean;
  toggleLike: () => void;
}

// Debounce timeout para evitar múltiplas requisições
const DEBOUNCE_DELAY = 500;

const debounceTimeouts = new Map<string, NodeJS.Timeout>();

export const useLike = (postId: string): UseLikeResult => {
  const [likesCount, setLikesCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pendingAction, setPendingAction] = useState<'like' | 'unlike' | null>(null);
  
  const userId = generateUniqueUserId();

  // Carrega o estado inicial do banco de dados
  const loadLikeState = useCallback(async () => {
    try {
      // Busca a contagem total de curtidas para o post
      const { data: likesData, error: likesError } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('post_id', postId);

      if (likesError) {
        console.error('Erro ao carregar contagem de curtidas:', likesError);
        return;
      }

      const totalLikes = likesData?.length || 0;
      setLikesCount(totalLikes);

      // Verifica se o usuário atual curtiu o post
      const { data: userLikeData, error: userLikeError } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_identifier', userId)
        .single();

      if (userLikeError && userLikeError.code !== 'PGRST116') {
        console.error('Erro ao verificar curtida do usuário:', userLikeError);
        return;
      }

      setIsLiked(!!userLikeData);
    } catch (error) {
      console.error('Erro ao carregar estado de curtidas:', error);
    }
  }, [postId, userId]);

  // Executa a ação de curtir/descurtir com upsert robusto
  const executeLikeAction = useCallback(async (action: 'like' | 'unlike') => {
    try {
      setIsLoading(true);

      if (action === 'like') {
        // Upsert: insere apenas se não existir
        const { error } = await supabase
          .from('comment_likes')
          .upsert(
            {
              post_id: postId,
              user_identifier: userId,
              created_at: new Date().toISOString()
            },
            { 
              onConflict: 'post_id,user_identifier',
              ignoreDuplicates: true 
            }
          );

        if (error) {
          console.error('Erro ao adicionar curtida:', error);
          return;
        }

        setIsLiked(true);
      } else {
        // Remove a curtida
        const { error } = await supabase
          .from('comment_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_identifier', userId);

        if (error) {
          console.error('Erro ao remover curtida:', error);
          return;
        }

        setIsLiked(false);
      }

      // Recarrega a contagem atualizada do banco
      const { data: updatedLikes, error: countError } = await supabase
        .from('comment_likes')
        .select('id')
        .eq('post_id', postId);

      if (countError) {
        console.error('Erro ao atualizar contagem:', countError);
        return;
      }

      setLikesCount(updatedLikes?.length || 0);

    } catch (error) {
      console.error('Erro ao executar ação de curtida:', error);
    } finally {
      setIsLoading(false);
      setPendingAction(null);
    }
  }, [postId, userId]);

  // Toggle com debounce
  const toggleLike = useCallback(() => {
    if (isLoading || pendingAction) {
      return; // Previne cliques múltiplos
    }

    const action = isLiked ? 'unlike' : 'like';
    setPendingAction(action);

    // Limpa timeout anterior se existir
    const timeoutKey = `${postId}-${userId}`;
    if (debounceTimeouts.has(timeoutKey)) {
      clearTimeout(debounceTimeouts.get(timeoutKey)!);
    }

    // Atualização otimista da UI
    if (action === 'like') {
      setIsLiked(true);
      setLikesCount(prev => prev + 1);
    } else {
      setIsLiked(false);
      setLikesCount(prev => Math.max(0, prev - 1));
    }

    // Executa a ação com debounce
    const timeout = setTimeout(() => {
      executeLikeAction(action);
      debounceTimeouts.delete(timeoutKey);
    }, DEBOUNCE_DELAY);

    debounceTimeouts.set(timeoutKey, timeout);
  }, [isLiked, isLoading, pendingAction, postId, userId, executeLikeAction]);

  // Carrega estado inicial
  useEffect(() => {
    loadLikeState();
  }, [loadLikeState]);

  // Cleanup dos timeouts
  useEffect(() => {
    return () => {
      const timeoutKey = `${postId}-${userId}`;
      if (debounceTimeouts.has(timeoutKey)) {
        clearTimeout(debounceTimeouts.get(timeoutKey)!);
        debounceTimeouts.delete(timeoutKey);
      }
    };
  }, [postId, userId]);

  return {
    likesCount,
    isLiked,
    isLoading: isLoading || !!pendingAction,
    toggleLike
  };
};