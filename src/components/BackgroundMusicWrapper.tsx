'use client'

import dynamic from 'next/dynamic'

// Dynamically import BackgroundMusic with no SSR
const BackgroundMusic = dynamic(() => import('./BackgroundMusic'), {
  ssr: false,
  loading: () => null
})

export default BackgroundMusic
