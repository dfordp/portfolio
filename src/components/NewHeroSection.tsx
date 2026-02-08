'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 font-['Inter'] relative">
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl">
          {/* Banner Section */}
          <Reveal delay={0.1} duration={0.8} amount={0.2}>
            <BannerSection 
              bannerImage="/mountain.jpg"
              quote="Thoughts, pixels, and everything in between"
            />
          </Reveal>
          
          {/* Profile Header */}
          <Reveal delay={0.2} duration={0.7} amount={0.3}>
            <ProfileHeader 
              name="Dilpreet Grover"
              age="22"
              title="ideas • systems • stories"
              profileImage="/Dilpreet.jpeg"
              socialLinks={{
                twitter: "https://x.com/dfordp11",
                github: "https://github.com/dfordp",
                linkedin: "https://www.linkedin.com/in/dilpreet-grover-17726b224",
                behance :"https://www.behance.net/redjohn8",
                instagram:"https://www.instagram.com/_dfordp_"
              }}
            />
          </Reveal>
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={20} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>
              
              {/* About Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <ContentSection className="pb-8 pt-6">
                  <ContentParagraph className="mt-6 mb-6">
                    <span className="font-medium dark:text-white text-black">I’m someone who loves exploring ideas.</span> through code, design, and whatever medium feels right that day. I spend most of my time building things that make life a bit simpler or spark curiosity, often blending structure with imagination.
                  </ContentParagraph>
                  <ContentParagraph className="mb-2">
                    <span className="font-medium dark:text-white text-black">Outside of work,</span> I am a part-time artist and a full-time cinephile and audiophile. I enjoy stories in all forms, whether that’s film, sound, or the small experiments that keep me inspired.
                  </ContentParagraph>
                  <ContentParagraph className="mb-2">
                    <span className="font-medium dark:text-white text-black">Currently open to part‑time and contract roles,</span> The kind that let me dive deep into interesting systems, build creative tools, or collaborate on experimental ideas.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

               {/* Experience Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 py-4">
                  <h2 className="text-lg sm:text-xl mb-4 opacity-40 mt-8">Professional Experience</h2>
                  <ExperienceContent />
                </div>
              </Reveal>

                <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                  <SectionBorder className="mt-6" />
                </Reveal>
              
                 {/* Technical Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 py-4">
                  <h2 className="text-lg sm:text-xl mb-4 opacity-40 mt-8">Contributions</h2>
                  <div className="space-y-6 dark:text-white/70 text-black/70 pb-8">
                    <ContentParagraph>
                      I’ve spent the past few years moving between startups, open-source, and R&D labs, where experimentation meets scale.
                    </ContentParagraph>
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">At Odena,</span> I built a distributed microservice system handling 2M+ events per second, created a custom multimedia embedding model that processed 300 TB of data, and deployed LLM-driven classification pipelines tuned for high throughput on a tight budget.  
                      </ContentParagraph>
                      <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">At Hobfit,</span> I re-architected the platform into efficient containerized microservices, scaled to tens of thousands of users, and developed AI assistants powering thousands of daily coaching sessions.
                    </ContentParagraph>
                     <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">At Meved HR,</span> I led the core infrastructure design and backend automation for an AI-driven recruitment platform handling 15K+ users with zero downtime and massive cost efficiency.
                    </ContentParagraph>
                    <ContentParagraph>
                      Earlier at <span className="font-medium dark:text-white text-black"> Appleute</span> and <span className="font-medium dark:text-white text-black"> Codemod</span>, I shipped real-time trading platforms, automated large-scale code migrations, and mentored developers adopting new stacks. I also founded <span className="font-medium dark:text-white text-black"> Fada Club</span>, a creative-tech community, and co‑ran <span className="font-medium dark:text-white text-black">Zinex Ze</span>, an art-led collective that reached millions online.
                    </ContentParagraph>
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">
                        <Link href="https://x.com/dfordp11" target='_blank' className="text-[#006FEE] hover:underline">0→100</Link> systems and ideas
                      </span>
                      <span> building what I want to see exist.</span>
                    </ContentParagraph>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* GitHub Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 mt-4">
                  <h2 className="text-lg sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4">
                    GitHub Contributions <span className="opacity-20">●</span> @dfordp
                  </h2>
                  <div className="mb-6">
                    <ContributionsDisplay
                      username="dfordp"
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Tech Stack Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 mt-6 mb-6">
                  <TechStackMarquee className="w-full" />
                </div>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* call to action*/}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <CallToAction/>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Reachout Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="mt-6">
                  <Reachout 
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
