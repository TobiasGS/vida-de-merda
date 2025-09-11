import { Link } from 'react-router-dom'
import { Heart, Shield, FileText, Cookie, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900/95 border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block mb-4"
            >
              Vida de Merda
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A plataforma onde você pode compartilhar seus momentos mais constrangedores de forma anônima. 
              Transforme suas trapalhadas em histórias que conectam e divertem.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Heart className="w-4 h-4 text-red-500 mr-2" />
              <span>100% Anônimo • Sem Cadastro • Entretenimento</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/historias" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Histórias
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Blog & Artigos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informações Legais</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacidade" 
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  to="/termos" 
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <Cookie className="w-4 h-4 mr-2" />
                  Política de Cookies
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:contato@vidademerda.blog"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Denunciar Conteúdo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>© {currentYear} Vida de Merda. Todos os direitos reservados.</p>
              <p className="mt-1">Desenvolvido com React + TypeScript + Supabase</p>
            </div>
            
            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>Google AdSense ID: pub-7087519448195686</p>
              <p className="mt-1">Site responsivo e otimizado para SEO</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}