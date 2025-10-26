import { Metadata } from 'next'
import ArtListClient from '@/components/ArtListClient'
import { art } from '@/data/art'

export const metadata: Metadata = {
  title: 'Art | Dilpreet Grover',
  description: 'Technical writings and thoughts on web development, AI, and more.',
  openGraph: {
    title: 'Art | Dilpreet Grover',
    description: 'Technical writings and thoughts on web development, AI, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art | Dilpreet Grover',
    description: 'Technical writings and thoughts on web development, AI, and more.',
  }
} 

export default function BlogsPage() {
  return <ArtListClient art={art} />
}