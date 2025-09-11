import { SEOHead } from '../components/SEOHead'
import { Heart, Users, Shield, Lightbulb, Target, Award } from 'lucide-react'

export function SobrePage() {
  return (
    <>
      <SEOHead 
        title="Sobre Nós - A História do Vida de Merda"
        description="Conheça a história e missão da plataforma Vida de Merda. Saiba como começamos e por que acreditamos no poder de compartilhar experiências constrangedoras de forma anônima."
        keywords="sobre vida de merda, história da plataforma, missão, equipe, valores"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Sobre o Vida de Merda
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Uma plataforma criada para celebrar nossa humanidade compartilhada através das situações mais constrangedoras da vida.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Nossa Missão</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Acreditamos que compartilhar nossas experiências mais constrangedoras de forma anônima tem um poder terapêutico único. Nossa missão é criar um espaço seguro onde pessoas possam:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Heart className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span>Desabafar sobre momentos difíceis sem medo de julgamento</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Descobrir que não estão sozinhas em suas trapalhadas</span>
              </li>
              <li className="flex items-start">
                <Lightbulb className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span>Transformar constrangimento em crescimento pessoal</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Encontrar alívio e até risadas em suas experiências difíceis</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Como Tudo Começou</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              O Vida de Merda nasceu da percepção de que todos nós temos histórias constrangedoras que preferimos esconder. Em uma sociedade que valoriza a perfeição e o sucesso, raramente há espaço para falar sobre nossos momentos mais embaraçosos.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Percebemos que existe algo profundamente libertador em compartilhar essas experiências. Não apenas para quem conta, mas também para quem lê e se identifica. De repente, você descobre que aquela situação que te fez querer desaparecer do mundo já aconteceu com outras pessoas também.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Foi assim que criamos esta plataforma: um lugar onde o anônimo não é uma limitação, mas uma libertação. Onde você pode ser completamente honest@ sobre suas trapalhadas sem medo de julgamento.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Anonimato e Segurança</h3>
              </div>
              <p className="text-gray-400">
                Garantimos total anonimato e um ambiente seguro para compartilhamento. Nenhuma informação pessoal é coletada ou armazenada.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Empatia e Compaixão</h3>
              </div>
              <p className="text-gray-400">
                Promovemos um ambiente de compreensão mútua, onde cada história é recebida com empatia e sem julgamento.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Comunidade Inclusiva</h3>
              </div>
              <p className="text-gray-400">
                Celebramos a diversidade de experiências humanas e criamos um espaço onde todos se sentem bem-vindos.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Crescimento Pessoal</h3>
              </div>
              <p className="text-gray-400">
                Acreditamos que compartilhar vulnerabilidades pode ser um catalisador poderoso para crescimento e autoaceitação.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Como Funciona</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Compartilhe Anonimamente</h4>
                <p className="text-gray-400">
                  Escreva sua história constrangedora de forma totalmente anônima. Não pedimos nome, email ou qualquer informação pessoal.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Moderação Respeitosa</h4>
                <p className="text-gray-400">
                  Revisamos conteúdo para garantir que seja apropriado e respeitoso, mantendo a autenticidade das experiências.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Comunidade Se Conecta</h4>
                <p className="text-gray-400">
                  Outras pessoas leem, se identificam e percebem que não estão sozinhas em suas experiências constrangedoras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossa Comunidade</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-400">Histórias Compartilhadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-gray-400">Categorias Diferentes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400">Artigos Publicados</div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quer Saber Mais?
            </h2>
            <p className="text-gray-400 mb-6">
              Se você tem dúvidas, sugestões ou simplesmente quer conversar sobre nossa missão, nós adoraríamos ouvir de você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contato" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Entre em Contato
              </a>
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-600/10 transition-colors"
              >
                Compartilhe sua História
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}