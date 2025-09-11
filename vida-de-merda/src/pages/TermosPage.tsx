import { SEOHead } from '../components/SEOHead'

export function TermosPage() {
  return (
    <>
      <SEOHead 
        title="Termos de Uso - Vida de Merda"
        description="Leia nossos termos de uso e condições gerais. Entenda as regras para usar nossa plataforma, política de conteúdo e direitos dos usuários."
        keywords="termos de uso, condições gerais, regras da plataforma, política de conteúdo, direitos dos usuários"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Termos de Uso
          </h1>
          <p className="text-gray-400 text-lg">
            Última atualização: 12 de setembro de 2025
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ao acessar e usar o website Vida de Merda (www.vidademerda.blog), você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com algum destes termos, não deve usar nossos serviços.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam o serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                O Vida de Merda é uma plataforma digital que permite aos usuários compartilhar anonimamente experiências constrangedoras, situações embaraçosas e "perrengues" do dia a dia. Também oferecemos:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Publicação de histórias anônimas</li>
                <li>• Leitura de experiências compartilhadas por outros usuários</li>
                <li>• Acesso a artigos sobre psicologia do humor e desenvolvimento pessoal</li>
                <li>• Sistema de categorização de histórias</li>
                <li>• Conteúdo educativo e de entretenimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Elegibilidade</h2>
              <p className="text-gray-300 leading-relaxed">
                Você deve ter pelo menos 18 anos de idade para usar nossos serviços. Menores de 18 anos só podem usar o serviço com supervisão e consentimento dos pais ou responsáveis legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Política de Conteúdo</h2>
              
              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.1 Conteúdo Permitido</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Histórias pessoais reais sobre situações constrangedoras</li>
                <li>• Experiências embaraçosas do cotidiano</li>
                <li>• Relatos de "perrengues" e trapalhadas</li>
                <li>• Conteúdo com tom humorístico e educativo</li>
                <li>• Histórias que promovam empatia e conexão humana</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.2 Conteúdo Proibido</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                É estritamente proibido compartilhar conteúdo que contenha:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Informações pessoais identificáveis (nomes, endereços, telefones, etc.)</li>
                <li>• Conteúdo sexual explícito ou pornográfico</li>
                <li>• Violência, assédio, bullying ou intimidação</li>
                <li>• Discriminação baseada em raça, gênero, religião, orientação sexual</li>
                <li>• Atividades ilegais ou prejudiciais</li>
                <li>• Spam, propaganda não solicitada ou links maliciosos</li>
                <li>• Conteúdo que viole direitos autorais ou propriedade intelectual</li>
                <li>• Histórias falsas ou inventadas</li>
                <li>• Conteúdo que exponha ou humilhe outras pessoas</li>
                <li>• Linguagem excessivamente ofensiva ou vulgar</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.3 Diretrizes de Qualidade</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Histórias devem ter entre 10 e 1000 caracteres</li>
                <li>• Use linguagem clara e respeitosa</li>
                <li>• Foque na sua experiência pessoal</li>
                <li>• Evite detalhes gráficos desnecessários</li>
                <li>• Mantenha o tom construtivo e empático</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Moderação e Revisão</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Todos os conteúdos submetidos passam por processo de moderação antes da publicação. Reservamo-nos o direito de:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Revisar, editar ou recusar qualquer conteúdo</li>
                <li>• Remover conteúdo que viole estes termos</li>
                <li>• Suspender ou banir usuários que violem repetidamente as regras</li>
                <li>• Modificar categorias ou classificações de histórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Direitos e Responsabilidades do Usuário</h2>
              
              <h3 className="text-xl font-semibold text-gray-200 mb-3">6.1 Seus Direitos</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Usar o serviço de acordo com estes termos</li>
                <li>• Compartilhar suas experiências anonimamente</li>
                <li>• Acessar conteúdo publicado na plataforma</li>
                <li>• Entrar em contato para suporte ou feedback</li>
                <li>• Solicitar remoção de conteúdo próprio</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">6.2 Suas Responsabilidades</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Fornecer informações verdadeiras</li>
                <li>• Respeitar outros usuários e a comunidade</li>
                <li>• Não tentar identificar outros usuários</li>
                <li>• Não usar o serviço para fins ilegais</li>
                <li>• Reportar conteúdo inadequado</li>
                <li>• Manter a confidencialidade de informações sensíveis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Propriedade Intelectual</h2>
              
              <h3 className="text-xl font-semibold text-gray-200 mb-3">7.1 Conteúdo do Usuário</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ao submeter conteúdo para nossa plataforma, você concede ao Vida de Merda uma licença mundial, não exclusiva, livre de royalties para usar, reproduzir, modificar, adaptar, publicar e distribuir esse conteúdo.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">7.2 Conteúdo da Plataforma</h3>
              <p className="text-gray-300 leading-relaxed">
                Todo o conteúdo original do site (design, textos, artigos, código) é protegido por direitos autorais e pertence ao Vida de Merda ou seus licenciadores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Anonimato e Privacidade</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Comprometemo-nos a manter o anonimato dos usuários:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Não coletamos informações pessoais para publicação de histórias</li>
                <li>• Não tentamos identificar autores de histórias anônimas</li>
                <li>• Removemos qualquer informação identificável do conteúdo</li>
                <li>• Seguimos rigorosa política de privacidade</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Isenção de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                O serviço é fornecido "como está" e "conforme disponível". Não garantimos:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Disponibilidade contínua ou sem interrupções</li>
                <li>• Ausência de erros ou falhas</li>
                <li>• Segurança total contra ataques ou violações</li>
                <li>• Adequação para fins específicos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitação de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed">
                Em nenhuma circunstância seremos responsáveis por danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Publicidade e Monetização</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Utilizamos serviços de publicidade (Google AdSense) para monetizar a plataforma:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Anúncios podem ser exibidos junto ao conteúdo</li>
                <li>• Não controlamos o conteúdo dos anúncios de terceiros</li>
                <li>• Receitas de publicidade ajudam a manter o serviço gratuito</li>
                <li>• Você pode usar bloqueadores de anúncio, mas isso pode afetar a funcionalidade</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Rescisão</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Podemos suspender ou encerrar seu acesso aos nossos serviços a qualquer momento, com ou sem causa, com ou sem aviso prévio.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Você pode parar de usar nossos serviços a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Alterações nos Termos</h2>
              <p className="text-gray-300 leading-relaxed">
                Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas serão notificadas através do site. O uso continuado após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Lei Aplicável</h2>
              <p className="text-gray-300 leading-relaxed">
                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contato</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Para questões sobre estes Termos de Uso:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Email:</strong> contato@vidademerda.blog</li>
                <li>• <strong>Formulário:</strong> <a href="/contato" className="text-purple-400 hover:text-purple-300">Página de Contato</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">16. Disposições Gerais</h2>
              <p className="text-gray-300 leading-relaxed">
                Se qualquer disposição destes termos for considerada inválida ou inexequível, as disposições restantes permanecerão em pleno vigor e efeito. Estes termos constituem o acordo completo entre você e o Vida de Merda.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}