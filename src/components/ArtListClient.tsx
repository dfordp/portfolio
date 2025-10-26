'use client'

import OnekoCat from '@/components/OnekoCat'
import ResizablePortfolioNavigation from '@/components/ResizablePortfolioNavigation'
import { FadeInUp } from '@/components/ui/PageTransitions'
import { ArtPost } from '@/types/art'
import { ArtCard } from './ArtCard'

interface ArtListClientListClientProps {
  art: ArtPost[]
}

export default function ArtListClient({ art }: ArtListClientListClientProps) {

  return (
      <div className="min-h-screen w-full bg-white dark:bg-black">
        <ResizablePortfolioNavigation />
        <OnekoCat />
          
          {/* Page Content - Swiss Design Layout */}
          <div className="w-full relative pt-16 sm:pt-16">
            <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
              <div className="max-w-4xl mx-auto">
                
                {/* Header - Minimal Typography */}
                <div className="mb-16 sm:mb-20">
                  <FadeInUp delay={0.2}>
                    <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] font-medium mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">
                      Art
                    </h1>
                  </FadeInUp>
                  <FadeInUp delay={0.4}>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 tracking-wide">
                      just some timepass I do
                    </p>
                  </FadeInUp>
                </div>
                
                {/* Blog List - Clean Grid */}
                {art.length > 0 ? (
                  <div className="space-y-0">
                    {art.map((blog, index) => (
                      <FadeInUp key={blog.id} delay={index * 0.1} duration={0.6}>
                        <ArtCard art={blog} />
                      </FadeInUp>
                    ))}
                  </div>
                ) : (
                  <FadeInUp delay={0.6}>
                    <div className="text-center py-16 sm:py-20">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                        Coming soon
                      </p>
                    </div>
                  </FadeInUp>
                )}
              </div>
            </div>
          </div>
        </div>
  )
}