'use client'

import Image from 'next/image'
import { useHapticFeedback } from '@/hooks/useHapticFeedback';

interface CallToActionProps {
  profileImage?: string
  profileAlt?: string
  linkText?: string
  linkUrl?: string
  preText?: string
}

export default function CallToAction({
  profileImage = "/Dilpreet.jpeg",
  profileAlt = "Profile",
  linkText = "Book a Free Call",
  linkUrl = "https://cal.com/dilpreet-grover/30min",
  preText = "If you've read this far, you might be interested in what I do."
}: CallToActionProps) {
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleButtonClick = () => {
    if (isMobile()) {
      triggerHaptic('medium'); // Slightly stronger feedback for CTA button
    }
  };

  return (
    <div className="sm:px-12 px-6 mt-6 pb-8 sm:flex sm:justify-between sm:items-center w-full flex-col">
      <p className="opacity-50 font-[family-name:var(--font-instrument-serif)] text-xl mb-4 sm:mb-3">{preText}</p>
      <div className="gradient bg-gradient-to-b from-[#252525] to-[#3B3B3B] rounded-lg p-[1px] relative overflow-hidden w-full sm:w-auto mt-4 sm:mt-0">
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gradient h-full bg-[#1C1C1C] rounded-lg text-white text-sm sm:text-md px-2 sm:px-3 py-2 sm:py-1.5 w-full flex items-center justify-center transition-all group relative overflow-hidden"
          style={{ '--x': '-90.45457%' } as React.CSSProperties}
          onClick={handleButtonClick}
        >
          <div className="flex items-center gap-2 group-hover:gap-8 sm:group-hover:gap-12 transition-all duration-300 relative z-20">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image 
                alt={profileAlt} 
                width={26} 
                height={26} 
                className="w-full h-full object-cover" 
                src={profileImage}
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="flex items-center gap-0 absolute left-[28px] sm:left-[30px] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-plus w-2 h-2 sm:w-3 sm:h-3"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center text-[8px] sm:text-[10px]">
                You
              </div>
            </div>
            <span 
              className="whitespace-nowrap relative block text-sm sm:text-base"
              style={{ 
                maskImage: 'linear-gradient(-75deg, rgba(255,255,255,1) calc(var(--x) + 20%), rgba(255,255,255,0.1) calc(var(--x) + 30%), rgba(0,0,0,1) calc(var(--x) + 100%))' 
              }}
            >
              {linkText}
            </span>
          </div>
          <span 
            className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,transparent_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),transparent_calc(var(--x)+100%))] p-px"
            style={{ 
              mask: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box exclude, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
            }}
          />
        </a>
      </div>
    </div>
  )
}
