import { SEOHead } from '../components/SEOHead'

export function PrivacidadePage() {
  return (
    <>
      <SEOHead 
        title="Política de Privacidade - Vida de Merda"
        description="Política de Privacidade do Vida de Merda. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD e GDPR."
        keywords="política de privacidade, LGPD, GDPR, proteção de dados, cookies, Google AdSense"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Política de Privacidade
          </h1>
          <p className="text-gray-400 text-lg">
            Última atualização: 12 de setembro de 2025
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                O Vida de Merda ("nós", "nosso" ou "site") está comprometido com a proteção da sua privacidade. 
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
                quando você visita nosso site vidademerda.blog (o "Serviço").
              </p>
              <p className="text-gray-300 leading-relaxed">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) 
                do Brasil e o Regulamento Geral sobre a Proteção de Dados (GDPR) da União Europeia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Informações que Coletamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-200 mb-3">2.1 Informações Fornecidas Voluntariamente</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Nome e endereço de e-mail quando você nos contata</li>
                <li>• Conteúdo das mensagens enviadas através do formulário de contato</li>
                <li>• Histórias e relatos enviados para publicação no site</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">2.2 Informações Coletadas Automaticamente</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Endereço IP e informações de localização aproximada</li>
                <li>• Tipo de navegador e sistema operacional</li>
                <li>• Páginas visitadas e tempo gasto no site</li>
                <li>• Dados de interação como cliques e curtidas</li>
                <li>• Informações de cookies e tecnologias similares</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-200 mb-3">2.3 Dados de Terceiros</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Google Analytics para análise de tráfego</li>
                <li>• Google AdSense para exibição de publicidade</li>
                <li>• Dados de redes sociais quando você compartilha nosso conteúdo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Como Usamos Suas Informações</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Utilizamos suas informações para as seguintes finalidades:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Operação do Site:</strong> Fornecer, manter e melhorar nossos serviços</li>
                <li>• <strong>Comunicação:</strong> Responder a suas mensagens e fornecer suporte</li>
                <li>• <strong>Conteúdo:</strong> Publicar e moderar histórias enviadas pelos usuários</li>
                <li>• <strong>Análise:</strong> Compreender como nosso site é usado para melhorar a experiência</li>
                <li>• <strong>Publicidade:</strong> Exibir anúncios relevantes através do Google AdSense</li>
                <li>• <strong>Segurança:</strong> Proteger contra fraudes e atividades maliciosas</li>
                <li>• <strong>Conformidade Legal:</strong> Cumprir obrigações legais aplicáveis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Base Legal para Processamento (LGPD/GDPR)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Processamos seus dados pessoais com base nas seguintes bases legais:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Consentimento:</strong> Para cookies não essenciais e comunicações de marketing</li>
                <li>• <strong>Interesse Legítimo:</strong> Para análise de site e melhorias de segurança</li>
                <li>• <strong>Execução de Contrato:</strong> Para fornecer os serviços solicitados</li>
                <li>• <strong>Obrigação Legal:</strong> Para cumprir requisitos legais aplicáveis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Informações</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Não vendemos suas informações pessoais. Podemos compartilhar dados nas seguintes situações:</p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Prestadores de Serviços:</strong> Google Analytics, Google AdSense, provedores de hospedagem</li>
                <li>• <strong>Obrigação Legal:</strong> Quando exigido por lei ou autoridades competentes</li>
                <li>• <strong>Proteção de Direitos:</strong> Para proteger nossos direitos legais e segurança</li>
                <li>• <strong>Consentimento:</strong> Com seu consentimento explícito para outras finalidades</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Sob a LGPD e GDPR, você tem os seguintes direitos:</p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• <strong>Acesso:</strong> Solicitar uma cópia dos dados que temos sobre você</li>
                <li>• <strong>Retificação:</strong> Corrigir dados incorretos ou incompletos</li>
                <li>• <strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais</li>
                <li>• <strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li>• <strong>Oposição:</strong> Opor-se ao processamento de seus dados</li>
                <li>• <strong>Limitação:</strong> Restringir o processamento em certas circunstâncias</li>
                <li>• <strong>Revogação:</strong> Retirar o consentimento a qualquer momento</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Para exercer seus direitos, entre em contato conosco através do e-mail: contato@vidademerda.blog
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Retenção de Dados</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Mantemos seus dados pessoais apenas pelo tempo necessário para:</p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Cumprir as finalidades descritas nesta política</li>
                <li>• Atender obrigações legais, contábeis ou regulatórias</li>
                <li>• Resolver disputas e fazer cumprir nossos acordos</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Dados de navegação são geralmente mantidos por 26 meses. Histórias publicadas são mantidas 
                indefinidamente, mas podem ser removidas mediante solicitação fundamentada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Segurança</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Criptografia SSL/TLS para transmissão de dados</li>
                <li>• Controles de acesso rigorosos</li>
                <li>• Monitoramento regular de segurança</li>
                <li>• Treinamento de equipe sobre proteção de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Transferências Internacionais</h2>
              <p className="text-gray-300 leading-relaxed">
                Alguns de nossos prestadores de serviços (como Google) podem processar dados fora do Brasil. 
                Quando isso ocorre, garantimos que existam salvaguardas adequadas, como cláusulas contratuais 
                padrão aprovadas ou certificações de adequação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Menores de Idade</h2>
              <p className="text-gray-300 leading-relaxed">
                Nosso site não é direcionado a menores de 13 anos. Não coletamos intencionalmente informações 
                pessoais de crianças menores de 13 anos. Se tomarmos conhecimento de que coletamos dados de 
                uma criança menor de 13 anos, tomaremos medidas para excluir essas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Alterações nesta Política</h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças 
                significativas publicando a nova política em nosso site com a data de "última atualização" 
                revisada. Recomendamos que você revise esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contato</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, 
                entre em contato conosco:
              </p>
              <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                <p className="text-gray-300"><strong>E-mail:</strong> contato@vidademerda.blog</p>
                <p className="text-gray-300"><strong>Site:</strong> vidademerda.blog/contato</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}