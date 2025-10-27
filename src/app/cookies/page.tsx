import CookieContent from '@/components/sections/CookieContent'
import CookieHero from '@/components/sections/CookieHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | RupeeFlow',
  description:
    'Learn about how RupeeFlow uses cookies and similar tracking technologies. Understand what cookies we use, why we use them, and how to manage your cookie preferences.',
}

export default function CookiePage() {
  return (
    <div>
      <CookieHero />
      <CookieContent />
    </div>
  )
}
