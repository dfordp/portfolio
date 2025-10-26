import { FC } from 'react'
import Link from 'next/link'
import { BlogPost } from '@/types/blog'

interface BlogCardProps {
  blog: BlogPost
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  const CardContent = () => (
    <article className="group cursor-pointer touch-manipulation">
      {/* Swiss Design Grid Layout */}
      <div className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-200 dark:border-neutral-800">
        
        {/* Title - Takes up most of the grid */}
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-tight mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            {blog.title}
          </h2>
        </div>

        {/* Metadata - Right aligned, minimal */}
        <div className="col-span-12 lg:col-span-4 lg:text-right">
          <div className="flex lg:justify-end gap-4 text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Description - Clean typography */}
        <div className="col-span-12 mt-2">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {blog.description}
          </p>
        </div>

        {/* Tags - Minimal, horizontal */}
        <div className="col-span-12 mt-4">
          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* External Link Indicator - Minimal */}
        {blog.externalUrl && (
          <div className="col-span-12 mt-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
              <span>Medium</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </article>
  )

  if (blog.externalUrl) {
    return (
      <a 
        href={blog.externalUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full touch-manipulation active:opacity-75"
        style={{ 
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        <CardContent />
      </a>
    )
  }

  return (
    <Link 
      href={`/blogs/${blog.id}`} 
      className="block w-full touch-manipulation active:opacity-75"
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <CardContent />
    </Link>
  )
}
