'use client'

import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

// Singleton pattern to ensure only one audio instance
let isInitialized = false

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const retryCountRef = useRef(0)
  const maxRetries = 3

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || hasStarted || isInitialized) return

    // Prevent multiple initializations
    isInitialized = true

    // Create a single Howl instance with Web Audio API (more reliable)
    const sound = new Howl({
      src: ['/Akeboshi.mp3'],
      loop: true,
      volume: 0.05, // Very low volume for subtle background audio
      autoplay: false,
      preload: true,
      html5: false, // Use Web Audio API to avoid HTML5 pool issues
      // Audio quality settings for cleaner playback
      rate: 1.0, // Normal playback rate
      onplay: () => {
        setIsPlaying(true)
        setHasStarted(true)
        retryCountRef.current = 0
        console.log('🎵 Background music started successfully')
        
        // Apply smooth fade-in for cleaner audio experience
        sound.fade(0, 0.05, 2000)
      },
      onplayerror: (id: number, error: unknown) => {
        console.log('Play error:', error)
        retryCountRef.current++
        
        if (retryCountRef.current <= maxRetries) {
          console.log(`Retry attempt ${retryCountRef.current}/${maxRetries}`)
          
          // Wait for unlock event and try again
          const delay = Math.pow(2, retryCountRef.current) * 1000
          sound.once('unlock', () => {
            setTimeout(() => {
              if (!hasStarted) {
                console.log(`Retrying after ${delay}ms delay`)
                sound.play()
              }
            }, delay)
          })
        } else {
          console.log('Max retries reached, waiting for user interaction')
        }
      },
      onloaderror: (id: number, error: unknown) => {
        console.log('Load error:', error)
      }
    })

    // Store reference to prevent garbage collection

    // Function to start music with smooth fade-in
    const startMusic = () => {
      try {
        // Start with volume 0 and fade in smoothly
        sound.volume(0)
        sound.play()
        sound.fade(0, 0.05, 2000) // Fade to very low volume over 2 seconds
        return true
      } catch {
        console.log('Autoplay blocked, waiting for user interaction...')
        return false
      }
    }

    // Function to handle user interaction
    const handleUserInteraction = () => {
      if (!hasStarted && !isPlaying) {
        // First try to unlock the audio context
        sound.once('unlock', () => {
          console.log('🎵 Audio unlocked, attempting to play')
          try {
            sound.volume(0)
            sound.play()
            sound.fade(0, 0.05, 2000) // Smooth fade-in to very low volume
          } catch {
            console.log('Still blocked after unlock')
          }
        })
        
        // Trigger unlock by attempting to play
        try {
          sound.volume(0)
          sound.play()
          sound.fade(0, 0.05, 2000) // Smooth fade-in to very low volume
        } catch {
          console.log('Triggering unlock mechanism')
        }
      }
    }

    // Add event listeners for user interaction
    const events = ['click', 'keydown', 'touchstart', 'scroll', 'mousemove', 'focus']
    const removeEventListeners = () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
        window.removeEventListener(event, handleUserInteraction)
      })
    }

    // Add listeners
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true })
      window.addEventListener(event, handleUserInteraction, { once: true })
    })

    // Try to start music with progressive delays
    const tryStartMusic = () => {
      if (startMusic()) return

      // Try again after delays
      const delays = [500, 1000, 2000]
      delays.forEach((delay) => {
        setTimeout(() => {
          if (!hasStarted && retryCountRef.current <= maxRetries) {
            startMusic()
          }
        }, delay)
      })
    }

    // Start trying immediately
    tryStartMusic()

    // Cleanup
    return () => {
      removeEventListeners()
      // Don't unload the global instance here, let it persist
    }
  }, [isClient, hasStarted, isPlaying])

  // Don't render anything on server side
  if (!isClient) {
    return null
  }

  return null // Howler.js handles the audio element internally
}

