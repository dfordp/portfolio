'use client'

interface BannerOverlayProps {
  position: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export default function BannerOverlay({ position, className = '' }: BannerOverlayProps) {
  const overlayClasses = {
    top: 'absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b dark:from-[#121212] from-[#fff] to-transparent',
    bottom: 'absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t dark:from-[#121212] from-[#fff] to-transparent',
    left: 'absolute top-0 left-0 w-[20px] sm:w-[60px] h-full bg-gradient-to-r dark:from-[#121212]/20 sm:dark:from-[#121212] from-[#fff]/20 sm:from-[#fff] to-transparent',
    right: 'absolute top-0 right-0 w-[20px] sm:w-[60px] h-full bg-gradient-to-l dark:from-[#121212]/20 sm:dark:from-[#121212] from-[#fff]/20 sm:from-[#fff] to-transparent'
  }

  return <div className={`${overlayClasses[position]} ${className}`} />
}
