import { useEffect } from 'react'

interface AdBannerProps {
  slot: string
  format?: 'horizontal' | 'vertical' | 'square'
  className?: string
}

export function AdBanner({ slot, format = 'horizontal', className = '' }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log('AdSense error:', err)
    }
  }, [])

  const getAdStyle = () => {
    switch (format) {
      case 'horizontal':
        return { display: 'block', width: '100%', height: '90px' }
      case 'vertical':
        return { display: 'block', width: '300px', height: '250px' }
      case 'square':
        return { display: 'block', width: '320px', height: '100px' }
      default:
        return { display: 'block', width: '100%', height: '90px' }
    }
  }

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={getAdStyle()}
        data-ad-client="ca-pub-7087519448195686"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}