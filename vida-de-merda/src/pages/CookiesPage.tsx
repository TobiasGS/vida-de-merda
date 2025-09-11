import { SEOHead } from '../components/SEOHead'

export function CookiesPage() {
  return (
    <>
      <SEOHead 
        title="Política de Cookies - Vida de Merda"
        description="Entenda como usamos cookies em nosso site. Informações sobre cookies essenciais, analíticos e de publicidade do Google AdSense."
        keywords="política de cookies, cookies site, Google AdSense cookies, Google Analytics cookies"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Política de Cookies
          </h1>
          <p className="text-gray-400 text-lg">
            Última atualização: 12 de setembro de 2025
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. O Que São Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Os cookies permitem que o site "lembre" de suas ações e preferências (como idioma, tamanho da fonte e outras preferências de exibição) durante um período de tempo, para que você não precise re-inserir essas informações sempre que voltar ao site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Como Usamos Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                O Vida de Merda utiliza cookies para melhorar sua experiência de navegação, entender como nosso site é usado e exibir anúncios relevantes. Usamos cookies próprios e de terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Tipos de Cookies que Utilizamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.1 Cookies Essenciais (Sempre Ativados)</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Estes cookies são necessários para que o site funcione corretamente e não podem ser desativados:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• <strong>Cookies de Sessão:</strong> Mantém você logado enquanto navega</li>
                <li>• <strong>Cookies de Segurança:</strong> Protegem contra ataques maliciosos</li>
                <li>• <strong>Cookies de Funcionalidade:</strong> Lembram suas preferências básicas</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.2 Cookies Analíticos</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Utilizamos o Google Analytics para entender como os visitantes usam nosso site:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• <strong>_ga:</strong> Distingue usuários únicos (expira em 2 anos)</li>
                <li>• <strong>_ga_*:</strong> Mantém o estado da sessão (expira em 2 anos)</li>
                <li>• <strong>_gid:</strong> Distingue usuários únicos (expira em 24 horas)</li>
                <li>• <strong>_gat:</strong> Limita a taxa de solicitações (expira em 1 minuto)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Finalidade:</strong> Nos ajudam a entender quantas pessoas visitam o site, quais páginas são mais populares e como os visitantes navegam pelo site.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.3 Cookies de Publicidade (Google AdSense)</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Utilizamos o Google AdSense para exibir anúncios relevantes:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• <strong>_gcl_au:</strong> Usado pelo Google AdSense para eficiência publicitária</li>
                <li>• <strong>IDE:</strong> Usado para medir a eficácia dos anúncios e fornecer anúncios mais relevantes</li>
                <li>• <strong>test_cookie:</strong> Verifica se o navegador suporta cookies</li>
                <li>• <strong>DSID:</strong> Vincula a atividade do usuário em diferentes dispositivos</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Finalidade:</strong> Personalizam os anúncios com base nos seus interesses e medem a eficácia das campanhas publicitárias.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">3.4 Cookies de Terceiros</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Além dos nossos próprios cookies, também permitimos que algumas empresas terceirizadas coloquem cookies no seu dispositivo:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Google Analytics:</strong> Para análise de tráfego e comportamento</li>
                <li>• <strong>Google AdSense:</strong> Para exibição de anúncios</li>
                <li>• <strong>Supabase:</strong> Para funcionalidade do banco de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Duração dos Cookies</h2>
              
              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.1 Cookies de Sessão</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                São temporários e são automaticamente excluídos quando você fecha o navegador.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">4.2 Cookies Persistentes</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Permanecem no seu dispositivo por um período determinado:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Google Analytics:</strong> Até 2 anos</li>
                <li>• <strong>Google AdSense:</strong> Varia de 1 dia a 2 anos</li>
                <li>• <strong>Preferências do Site:</strong> Até 1 ano</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Como Gerenciar Cookies</h2>
              
              <h3 className="text-xl font-semibold text-gray-200 mb-3">5.1 Controle pelo Navegador</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Você pode controlar e/ou excluir cookies conforme desejar. Para mais detalhes, consulte aboutcookies.org. Você pode excluir todos os cookies que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que eles sejam colocados.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">5.2 Instruções por Navegador</h3>
              <ul className="text-gray-300 space-y-3 mb-4">
                <li>
                  <strong>Chrome:</strong> 
                  <span className="text-gray-400 block text-sm mt-1">
                    Configurações {'>'}  Privacidade e segurança {'>'} Cookies e outros dados do site
                  </span>
                </li>
                <li>
                  <strong>Firefox:</strong> 
                  <span className="text-gray-400 block text-sm mt-1">
                    Preferências {'>'} Privacidade e Segurança {'>'} Cookies e dados de sites
                  </span>
                </li>
                <li>
                  <strong>Safari:</strong> 
                  <span className="text-gray-400 block text-sm mt-1">
                    Preferências {'>'} Privacidade {'>'} Cookies e dados de websites
                  </span>
                </li>
                <li>
                  <strong>Edge:</strong> 
                  <span className="text-gray-400 block text-sm mt-1">
                    Configurações {'>'} Privacidade, pesquisa e serviços {'>'} Cookies e permissões de siteermissões de site
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">5.3 Opt-out para Google AdSense</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Você pode optar por não receber anúncios personalizados:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Configurações de Anúncios do Google:</strong> <a href="https://adssettings.google.com" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">adssettings.google.com</a></li>
                <li>• <strong>Opt-out da NAI:</strong> <a href="https://optout.networkadvertising.org" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Consequências de Desabilitar Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você escolher desabilitar cookies, algumas funcionalidades do nosso site podem não funcionar corretamente:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Cookies Essenciais:</strong> O site pode não funcionar adequadamente</li>
                <li>• <strong>Cookies Analíticos:</strong> Não conseguiremos melhorar o site com base no uso</li>
                <li>• <strong>Cookies de Publicidade:</strong> Você verá anúncios menos relevantes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies em Dispositivos Móveis</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Em dispositivos móveis, você pode gerenciar cookies através das configurações do navegador móvel. Alguns dispositivos também oferecem configurações de "Limitar Rastreamento de Anúncios" nas configurações de privacidade do sistema.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Atualizações nesta Política</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Recomendamos que você revisite esta página regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Mais Informações</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Para mais informações sobre como usamos seus dados pessoais, consulte nossa <a href="/privacidade" className="text-purple-400 hover:text-purple-300">Política de Privacidade</a>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver alguma dúvida sobre nossa Política de Cookies, entre em contato conosco:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Email:</strong> contato@vidademerda.blog</li>
                <li>• <strong>Formulário:</strong> <a href="/contato" className="text-purple-400 hover:text-purple-300">Página de Contato</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Recursos Úteis</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Para saber mais sobre cookies e como gerenciá-los:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>About Cookies:</strong> <a href="https://www.aboutcookies.org" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">aboutcookies.org</a></li>
                <li>• <strong>All About Cookies:</strong> <a href="https://www.allaboutcookies.org" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a></li>
                <li>• <strong>Google Privacy:</strong> <a href="https://policies.google.com/privacy" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}