import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { HistoriasPage } from './pages/HistoriasPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { SobrePage } from './pages/SobrePage'
import { ContatoPage } from './pages/ContatoPage'
import { PrivacidadePage } from './pages/PrivacidadePage'
import { TermosPage } from './pages/TermosPage'
import { CookiesPage } from './pages/CookiesPage'
import { CategoriaPage } from './pages/CategoriaPage'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Fundo com efeito de gradient animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
            
            <div className="relative z-10">
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/historias" element={<HistoriasPage />} />
                  <Route path="/categoria/:slug" element={<CategoriaPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/sobre" element={<SobrePage />} />
                  <Route path="/contato" element={<ContatoPage />} />
                  <Route path="/privacidade" element={<PrivacidadePage />} />
                  <Route path="/termos" element={<TermosPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                </Routes>
              </Layout>
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App