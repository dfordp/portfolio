'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  href?: string;
  logoUrl?: string;
}

export default function ExperienceContent() {
  const experiences: ExperienceItem[] = [
    {
      company: "Odena",
      position: "Consultant",
      duration: "September 2025 – Present",
      description: "",
      href: "https://www.linkedin.com/company/odena",
      logoUrl: "/odena.JPG",
    },
    {
      company: "Hobfit",
      position: "SDE-II",
      duration: "June 2025 – August 2025",
      description: "",
      href: "https://www.hobfitwellness.com/",
      logoUrl: "/hobfit.png",
    },
    {
      company: "Future Tech Design",
      position: "Engineering Intern",
      duration: "April 2025 – June 2025",
      description: "",
      href: "https://ftdplm.com/",
      logoUrl: "/ftd.jpeg",
    },
    {
      company: "Fada Club",
      position: "Community Creator",
      duration: "June 2024 – May 2025",
      description: "",
      href: "https://fada-club.vercel.app/",
      logoUrl: "/fadaclub.jpeg",
    },
    {
      company: "Appleute",
      position: "SDE",
      duration: "Jan 2025 – April 2025",
      description: "",
      href: "https://www.appleute.de/en/",
      logoUrl: "/appleute.jpeg",
    },
    {
      company: "Codemod",
      position: "Consultant",
      duration: "Sept 2024 – December 2024",
      description: "",
      href: "https://codemod.com/",
      logoUrl: "/codemod.jpeg",
    },
    {
      company: "Meved HR Solutions",
      position: "SDE",
      duration: "February 2024 – May 2024",
      description: "",
      href: "",
      logoUrl: "/meved.jpeg",
    },
    {
      company: "SimplifyNote",
      position: "SDE Intern",
      duration: "July 2023 – September 2023",
      description: "",
      href: "https://www.linkedin.com/company/simplify-notes",
      logoUrl: "/simplifynote.jpeg",
    },
    {
      company: "Zinx Ze",
      position: "Founder",
      duration: "March 2020 – June 2023",
      description: "",
      href: "",
      logoUrl: "/zinx.png",
    },
  ];

  return (
    <div className="space-y-6 dark:text-white/70 text-black/70 pb-6">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          {/* Left side - Logo, Company & Position */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Company Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden flex-shrink-0">
              {exp.logoUrl ? (
                <Image 
                  src={exp.logoUrl} 
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                  {exp.company.charAt(0)}
                </span>
              )}
            </div>
            
            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium dark:text-white text-black text-base sm:text-lg">
                {exp.href ? (
                  <Link 
                    href={exp.href} 
                    target="_blank" 
                    className="hover:text-[#006FEE] transition-colors"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="text-xs sm:text-sm opacity-70">
                {exp.position}
              </p>
            </div>
          </div>
          
          {/* Right side - Duration */}
          <div className="pl-13 sm:pl-0 sm:text-right flex-shrink-0">
            <p className="text-xs sm:text-sm opacity-50">
              {exp.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
