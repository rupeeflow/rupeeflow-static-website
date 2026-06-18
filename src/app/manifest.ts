import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RupeeFlow',
    short_name: 'RupeeFlow',
    description: 'Payments, Payouts & Business Credit for India',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#029789',
    icons: [
      {
        src: '/rupeeflow.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

export const dynamic = 'force-static'
