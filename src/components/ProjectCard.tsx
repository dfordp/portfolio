'use client';

import { Project } from '@/types/project'
import { FaGithub} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import donezovideo from '/videos/donezo.mp4';
import mindMentorVideo from '/videos/mind-mentor.mp4';
import satyaCheckVideo from '/videos/satya-check.mp4';
import fleethq from '/videos/fleethq.mp4';
import rebatr from '/videos/rebatr-short.mp4';
import lazycommitVideo from '/videos/lazycommit-video.mp4';
import gocache from '/videos/gocache.mp4';
import quotick from '/videos/quotick.mp4';


interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
}

// Map video IDs to imported video assets
const getVideoSource = (videoId: string) => {
  switch (videoId) {
    case 'donezo':
      return donezovideo;
    case 'mind-mentor':
      return mindMentorVideo;
    case 'satya-check':
      return satyaCheckVideo;
    case 'fleethq':
      return fleethq; 
    case 'rebatr-short':
      return rebatr;
    case 'lazycommit-video':
      return lazycommitVideo;
    case 'gocache':
      return gocache;
    case 'quotick':
      return quotick
    default:
      return null;
  }
};

export const ProjectCard = ({ project, isDetailed = false }: ProjectCardProps) => {
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleLinkClick = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  if (!isDetailed) {
    return (
      <Link href={`/projects/${project.id}`} onClick={handleLinkClick}>
        <div className="hover:underline py-2 text-base sm:text-lg md:text-xl pb-4 sm:pb-5 border-b border-neutral-600 dark:border-neutral-500">
          {project.title}
        </div>
      </Link>
    );
  }

  return (
    <article className="w-full max-w-none px-2 sm:px-0">
      <header className="mb-6 sm:mb-8">
        <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-medium flex-1 min-w-0 break-words">{project.title}</h1>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.liveLink && (
              <Link 
                href={project.liveLink} 
                target="_blank" 
                className="bg-neutral-200 border-2 border-black dark:bg-neutral-800 dark:border-neutral-500 p-1.5 rounded-full hover:opacity-70"
                onClick={handleLinkClick}
              >
                <FiArrowUpRight className="size-4" />
              </Link>
            )}
            {project.githubLink && (
              <Link 
                href={project.githubLink} 
                target="_blank" 
                className="bg-neutral-200 border-2 border-black dark:bg-neutral-800 dark:border-neutral-500 p-1.5 rounded-full hover:opacity-70"
                onClick={handleLinkClick}
              >
                <FaGithub className="size-4" />
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-neutral-100 border-2 border-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Media Section - Fixed Container */}
      <div className="mb-6 sm:mb-8">
        {project.video && getVideoSource(project.video) ? (
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <Video
              src={getVideoSource(project.video)!}
              poster={project.image}
              className="w-full h-full object-cover"
              controls
              playsInline
              autoPlay
              muted
              loop
            />
          </div>
        ) : project.image && (
          <div className="w-full aspect-video relative rounded-lg overflow-hidden">
            <Image 
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 70vw, 60vw"
              quality={95}
              priority
            />
          </div>
        )}
      </div>

      {/* Content Section - Fixed Container */}
      <div className="mb-6 sm:mb-8">
        <div className="space-y-3 sm:space-y-4">
          <div className="text-sm sm:text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {project.longDescription ? (
              project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-neutral-600 dark:text-neutral-400 mb-4 last:mb-0">
                  {paragraph}
                  {index === 0 && project.tweetUrl && (
                    <>
                      {' '}
                      <Link 
                        href={project.tweetUrl} 
                        target="_blank" 
                        className="text-cyan-500 dark:text-cyan-600 hover:underline"
                        onClick={handleLinkClick}
                      >
                        you can view the tweet here
                      </Link>
                    </>
                  )}
                </p>
              ))
            ) : (
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
                {project.tweetUrl && (
                  <>
                    {' '}
                    <Link 
                      href={project.tweetUrl} 
                      target="_blank" 
                      className="text-cyan-500 dark:text-cyan-600 hover:underline"
                      onClick={handleLinkClick}
                    >
                      you can view the tweet here
                    </Link>
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
