'use client'

import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import { setBackgroundMusicController } from './ui/resizable-navbar'

let isInitialized = false
let globalSound: Howl | null = null

export default function BackgroundMusic() {
  const [, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const retryCountRef = useRef(0)
  const maxRetries = 3

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || hasStarted || isInitialized) return

    isInitialized = true

    const sound = new Howl({
      src: ['/Akeboshi.mp3'],
      loop: true,
      volume: 0.05,
      autoplay: false,
      preload: true,
      html5: false,
      rate: 1.0,
      onload: () => {
        console.log('🎵 Audio loaded successfully')
      },
      onplay: () => {
        setIsPlaying(true)
        setHasStarted(true)
        retryCountRef.current = 0
        console.log('🎵 Playing successfully')
      },
      onstop: () => {
        setIsPlaying(false)
        console.log('🎵 Stopped')
      },
      onpause: () => {
        setIsPlaying(false)
        console.log('🎵 Paused')
      },
      onplayerror: () => {
        console.log('Play error, retrying...')
        if (retryCountRef.current < maxRetries) {
          retryCountRef.current++
          setTimeout(() => {
            if (!hasStarted) sound.play()
          }, 1000)
        }
      }
    })

    globalSound = sound

    // Set up the controller for the navbar
    setBackgroundMusicController({
      pause: () => {
        sound.fade(0.05, 0, 1000)
        setTimeout(() => sound.pause(), 1000)
      },
      play: () => {
        sound.play()
        sound.fade(0, 0.05, 1000)
      }
    })

    // Try to start automatically
    const startMusic = () => {
      if (sound.state() === 'loaded') {
        sound.volume(0)
        sound.play()
        sound.fade(0, 0.05, 2000)
      }
    }

    // Handle user interactions
    const handleInteraction = () => {
      if (!hasStarted) {
        startMusic()
      }
    }

    // Add interaction listeners
    const events = ['click', 'touchstart', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true })
    })

    // Initial attempt
    if (typeof window !== 'undefined') {
      window.addEventListener('load', startMusic)
    }

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction)
      })
      window.removeEventListener('load', startMusic)
    }
  }, [isClient, hasStarted])

  // Don't render anything on server side
  if (!isClient) return null

  return null
}

// Export a function to access the global sound instance
export const getGlobalSound = () => globalSound