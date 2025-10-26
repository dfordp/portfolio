'use client'


import { BlogContent } from '@/components/BlogContent'
import Link from 'next/link'
import OnekoCat from '@/components/OnekoCat'
import ResizablePortfolioNavigation from '@/components/ResizablePortfolioNavigation'
import { BlogPost } from '@/types/blog'
import { FadeInUp, SlideInFromLeft } from '@/components/ui/PageTransitions'

interface BlogPostClientProps {
  blog: BlogPost
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {

  return (
      <div className="min-h-screen w-full bg-white dark:bg-black">
        <ResizablePortfolioNavigation />
        <OnekoCat />
          
          {/* Blog Content */}
          <div className="w-full relative pt-16 sm:pt-16">
            <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12">
              <div className="max-w-3xl mx-auto">
                <SlideInFromLeft delay={0.2}>
                  <Link 
                    href="/blogs" 
                    className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 inline-flex items-center hover:underline transition-colors"
                  >
                    <span className="mr-2">←</span>
                    <span>Back to blogs</span>
                  </Link>
                </SlideInFromLeft>
                <FadeInUp delay={0.4}>
                  <BlogContent blog={blog} />
                </FadeInUp>
              </div>
            </div>
          </div>
        </div>
  )
}