import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noindex?: boolean
}

export function SEOHead({
  title = 'Vida de Merda - Compartilhe Momentos Constrangedores Anônimos',
  description = 'Plataforma para compartilhar histórias constrangedoras de forma anônima. Transforme seus perrengues em entretenimento e conecte-se com pessoas que passaram por situações similares.',
  keywords = 'vida de merda, histórias constrangedoras, momentos embaraçosos, humor brasileiro, situações engraçadas, perrengues, trapalhadas, histórias anônimas',
  image = '/og-image.jpg',
  url = 'https://www.vidademerda.blog',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Equipe Vida de Merda',
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title.includes('Vida de Merda') ? title : `${title} | Vida de Merda`
  const canonicalUrl = `${url}${typeof window !== 'undefined' ? window.location.pathname : ''}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Vida de Merda" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="pt-br" />
      <meta name="geo.region" content="BR" />
      <meta name="geo.placename" content="Brasil" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Vida de Merda",
          "url": "https://www.vidademerda.blog",
          "logo": "https://www.vidademerda.blog/logo.png",
          "description": "Plataforma para compartilhar histórias constrangedoras de forma anônima",
          "sameAs": [
            "https://www.vidademerda.blog"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "vidademerda.contato@gmail.com",
            "contactType": "Customer Service"
          }
        })}
      </script>
    </Helmet>
  )
}