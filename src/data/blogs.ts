import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  {
    id: 'ssh-server-guide',
    title: 'Definitive Guide to AI Benchmarks: Comparing Models, Testing Your Own, and Understanding the Future',
    description: 'A comprehensive guide on securely connecting to remote servers using SSH, tailored for beginners with professional tips and best practices.',
    content: "",
    date: '2025-03-07',
    author: 'Dilpreet Grover',
    tags: ['AI', 'Benchmarking Process', 'Testing', 'Model Evaluation'], 
    readTime: '7 min read',
    externalUrl: [
      'https://levelup.gitconnected.com/definitive-guide-to-ai-benchmarks-comparing-models-testing-your-own-and-understanding-the-future-e61d4cf73a11',
      "https://dev.to/dfordp/definitive-guide-to-ai-benchmarks-comparing-models-testing-your-own-and-understanding-the-future-4d9i"
    ]
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
