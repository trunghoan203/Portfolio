'use client'

import { useState, useEffect } from 'react'
import { LanguageContext, Language } from './language-context'
import { translations, TranslationKey } from '@/utils/translations'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'en' || saved === 'vi')) {
      setLanguageState(saved)
    }
    setMounted(true)
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['en'][key] || key
  }

  // Always provide context, even before mount (with default values)
  // This prevents hydration mismatches and ensures context is available
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
