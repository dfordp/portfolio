import { blogs } from '@/data/blogs'
import BlogsListClient from '@/components/BlogsListClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Dilpreet Grover',
  description: 'Technical writings and thoughts on web development, AI, and more.',
  openGraph: {
    title: 'Blog | Dilpreet Grover',
    description: 'Technical writings and thoughts on web development, AI, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Dilpreet Grover',
    description: 'Technical writings and thoughts on web development, AI, and more.',
  }
} 

export default function BlogsPage() {
  return <BlogsListClient blogs={blogs} />
}