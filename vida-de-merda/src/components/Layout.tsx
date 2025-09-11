import { ReactNode } from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { AdBanner } from './AdBanner'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      
      {/* Banner AdSense Topo */}
      <AdBanner 
        slot="top-banner"
        format="horizontal"
        className="max-w-4xl mx-auto px-4 py-4"
      />
      
      <main className="min-h-screen">
        {children}
      </main>
      
      {/* Banner AdSense Final */}
      <AdBanner 
        slot="bottom-banner"
        format="horizontal"
        className="max-w-4xl mx-auto px-4 py-4"
      />
      
      <Footer />
    </>
  )
}