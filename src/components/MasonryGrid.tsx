'use client';

import { Project } from '@/types/project'
import { MasonryProjectCard } from './MasonryProjectCard'
import { useMemo } from 'react'

interface MasonryGridProps {
  projects: Project[];
  className?: string;
}

export const MasonryGrid = ({ projects, className = "" }: MasonryGridProps) => {
  // Show all projects at once
  const displayedItems = projects;

  // Memoize column distribution to avoid recalculating on every render
  const columnData = useMemo(() => {
    const col1: Project[] = [];
    const col2: Project[] = [];
    const col3: Project[] = [];

    displayedItems.forEach((project, index) => {
      const colIndex = index % 3;
      if (colIndex === 0) col1.push(project);
      else if (colIndex === 1) col2.push(project);
      else col3.push(project);
    });

    // For mobile, combine col2 and col3 into remaining items
    const mobileRemaining = [...col2, ...col3];
    
    return { col1, col2, col3, mobileRemaining };
  }, [displayedItems]);

  const { col1, col2, col3, mobileRemaining } = columnData;

  return (
    <div className={`min-h-screen w-full bg-neutral-100 dark:bg-[#161616] p-3 sm:p-6 lg:p-8 xl:p-12 ${className}`}>
      <div className="grid grid-cols-1 gap-4 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 sm:gap-3">
          {col1.map((project) => (
            <div key={project.id}>
              <MasonryProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {/* Column 2 - Hidden on mobile */}
        <div className="hidden sm:flex flex-col gap-3">
          {col2.map((project) => (
            <div key={project.id}>
              <MasonryProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {/* Column 3 - Hidden on mobile and tablet */}
        <div className="hidden lg:flex flex-col gap-3">
          {col3.map((project) => (
            <div key={project.id}>
              <MasonryProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile: Show remaining projects in single column */}
      <div className="sm:hidden flex flex-col gap-4 mt-4">
        {mobileRemaining.map((project) => (
          <div key={project.id}>
            <MasonryProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};
