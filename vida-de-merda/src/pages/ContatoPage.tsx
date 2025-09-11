import { useState } from 'react'
import { SEOHead } from '../components/SEOHead'
import { supabase } from '../lib/supabase'
import { Mail, MessageCircle, Shield, AlertTriangle, CheckCircle, Send } from 'lucide-react'

export function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            ip_address: '', // Will be set by trigger if needed
            user_agent: navigator.userAgent
          }
        ])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error: any) {
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Erro ao enviar mensagem')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <SEOHead 
        title="Contato - Fale Conosco"
        description="Entre em contato com a equipe do Vida de Merda. Tire dúvidas, faça sugestões, denuncie conteúdo inadequado ou simplesmente converse conosco."
        keywords="contato vida de merda, fale conosco, suporte, denúncia, feedback, sugestões"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Estamos aqui para ouvir você. Seja para tirar dúvidas, fazer sugestões, denunciar conteúdo ou simplesmente conversar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-600/20 border border-green-500/50 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-300">Mensagem enviada com sucesso! Responderemos em breve.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-600/20 border border-red-500/50 rounded-lg flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-300">{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Dúvida Geral">Dúvida Geral</option>
                    <option value="Sugestão">Sugestão</option>
                    <option value="Denúncia de Conteúdo">Denúncia de Conteúdo</option>
                    <option value="Problema Técnico">Problema Técnico</option>
                    <option value="Parceria/Colaboração">Parceria/Colaboração</option>
                    <option value="Imprensa">Imprensa</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                    placeholder="Descreva sua mensagem em detalhes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                  <div>
                    <div className="font-medium text-white">Email de Contato</div>
                    <div className="text-gray-400 text-sm">vidademerda.contato@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <div>
                    <div className="font-medium text-white">Tempo de Resposta</div>
                    <div className="text-gray-400 text-sm">Até 48 horas úteis</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Perguntas Frequentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white text-sm mb-2">Como posso denunciar conteúdo inadequado?</h4>
                  <p className="text-gray-400 text-sm">
                    Use o formulário acima selecionando "Denúncia de Conteúdo" e descreva detalhadamente o problema.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-2">Vocês respondem todas as mensagens?</h4>
                  <p className="text-gray-400 text-sm">
                    Sim! Respondemos todas as mensagens em até 48 horas úteis.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-2">Posso sugerir melhorias para o site?</h4>
                  <p className="text-gray-400 text-sm">
                    Claro! Adoramos receber sugestões de nossa comunidade.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-2">Como funciona a moderação?</h4>
                  <p className="text-gray-400 text-sm">
                    Revisamos todas as histórias antes da publicação para garantir que sejam respeitosas e apropriadas.
                  </p>
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Diretrizes de Contato</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Seja respeitoso e educado</li>
                <li>• Forneça detalhes suficientes</li>
                <li>• Use o assunto apropriado</li>
                <li>• Aguarde nossa resposta em até 48h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}