import { useState } from 'react'
import { usePosts } from '../hooks/usePosts'

export function PostForm() {
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const { createPost } = usePosts()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsSubmitting(true)
    setMessage(null)

    const result = await createPost(content)
    
    if (result.success) {
      setContent('')
      setMessage({ type: 'success', text: 'Sua história foi compartilhada com sucesso!' })
    } else {
      setMessage({ type: 'error', text: result.error || 'Erro ao enviar a história' })
    }
    
    setIsSubmitting(false)
    
    // Limpar mensagem após 3 segundos
    setTimeout(() => setMessage(null), 3000)
  }

  const remainingChars = 1000 - content.length

  return (
    <div className="bg-gray-900 border border-purple-500/30 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        Compartilhe sua história constrangedora
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Conte sua história... (mín. 10 caracteres, máx. 1000)"
            className="w-full h-32 p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            maxLength={1000}
            disabled={isSubmitting}
          />
          <div className={`absolute bottom-2 right-2 text-sm ${
            remainingChars < 50 ? 'text-red-400' : 'text-gray-400'
          }`}>
            {remainingChars} caracteres restantes
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || content.trim().length < 10}
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        >
          {isSubmitting ? 'Enviando...' : 'Compartilhar História'}
        </button>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded-lg text-center ${
          message.type === 'success' 
            ? 'bg-green-900/50 border border-green-500/30 text-green-400'
            : 'bg-red-900/50 border border-red-500/30 text-red-400'
        }`}>
          {message.text}
        </div>
      )}
    </div>
  )
}