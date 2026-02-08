'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Position {
  title: string;
  duration: string;
  description?: string;
}

interface ExperienceItem {
  company: string;
  positions: Position[];
  href?: string;
  logoUrl?: string;
}

export default function ExperienceContent() {
  const experiences: ExperienceItem[] = [
      {
      company: "Future Tech Design",
      positions: [
        {
          title: "Consultant",
          duration: "January 2026 – Present",
        },
        {
          title: "Engineering Intern",
          duration: "April 2025 – June 2025",
        }
      ],
      href: "https://ftdplm.com/",
      logoUrl: "/ftd.jpeg",
    },
    {
      company: "Odena",
      positions: [
        {
          title: "Principal Consultant",
          duration: "September 2025 – December 2025",
        }
      ],
      href: "https://www.odena.io/",
      logoUrl: "/odena.png",
    },
    {
      company: "Hobfit",
      positions: [
        {
          title: "SDE-II",
          duration: "June 2025 – August 2025",
        }
      ],
      href: "https://www.hobfitwellness.com/",
      logoUrl: "/hobfit.png",
    },
    {
      company: "Fada Club",
      positions: [
        {
          title: "Founder",
          duration: "June 2024 – May 2025",
        }
      ],
      href: "https://fada-club.vercel.app/",
      logoUrl: "/fadaclub.jpeg",
    },
    {
      company: "Appleute",
      positions: [
        {
          title: "SDE",
          duration: "Jan 2025 – April 2025",
        }
      ],
      href: "https://www.appleute.de/en/",
      logoUrl: "/appleute.jpeg",
    },
    {
      company: "Codemod",
      positions: [
        {
          title: "Consultant",
          duration: "Sept 2024 – December 2024",
        }
      ],
      href: "https://codemod.com/",
      logoUrl: "/codemod.jpeg",
    },
    {
      company: "Meved HR Solutions",
      positions: [
        {
          title: "SDE",
          duration: "February 2024 – May 2024",
        }
      ],
      href: "",
      logoUrl: "/meved.jpeg",
    },
    {
      company: "SimplifyNote",
      positions: [
        {
          title: "SDE Intern",
          duration: "July 2023 – September 2023",
        }
      ],
      href: "https://www.linkedin.com/company/simplify-notes",
      logoUrl: "/simplifynote.jpeg",
    },
    {
      company: "Zinx Ze",
      positions: [
        {
          title: "Founder",
          duration: "March 2020 – June 2023",
        }
      ],
      href: "",
      logoUrl: "/zinx.png",
    },
  ];

  return (
    <div className="space-y-6 dark:text-white/70 text-black/70 pb-6">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex gap-4">
          {/* Left side - Logo */}
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

          {/* Right side - Company & Positions */}
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

            {/* Positions progression */}
            <div className="space-y-2 mt-2">
              {exp.positions.map((position, idx) => (
                <div key={idx} className="flex justify-between items-start gap-2">
                  <p className="text-xs sm:text-sm opacity-70">
                    {position.title}
                  </p>
                  <p className="text-xs sm:text-sm opacity-50 flex-shrink-0">
                    {position.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
