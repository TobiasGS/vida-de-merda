// Sistema robusto de identificação de usuário para o sistema de curtidas
export function generateUniqueUserId(): string {
  let userId = localStorage.getItem('vida-merda-user-id')
  
  if (!userId) {
    // Criar identificador baseado em múltiplos fatores
    const timestamp = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2, 15)
    const userAgent = navigator.userAgent
    const screenInfo = `${window.screen.width}x${window.screen.height}`
    
    // Hash simples dos dados do navegador para maior unicidade
    const browserHash = btoa(userAgent + screenInfo).substring(0, 8)
    
    userId = `${timestamp}_${random}_${browserHash}`
    localStorage.setItem('vida-merda-user-id', userId)
    
    console.log('🔐 Novo usuário identificado:', userId)
  }
  
  return userId
}