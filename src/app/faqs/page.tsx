'use client'

import FAQContent from '@/components/sections/FAQContent'
import FAQHero from '@/components/sections/FAQHero'
import { useState } from 'react'

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div>
      <FAQHero onSearch={handleSearch} />
      <FAQContent searchQuery={searchQuery} />
    </div>
  )
}
