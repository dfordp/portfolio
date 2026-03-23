import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  {
    id: 'decentralized-os-on-my-own',
    title: 'I tried making a decentralized OS on my own and failed miserably',
    description: 'This is not a success story. This is a physics lesson.',
    content: "",
    date: '2026-03-23',
    author: 'Dilpreet Grover',
    tags: ['Programming', "Technology", "Decentralized ", "Hardware", "Software Development"], 
    readTime: '12 min read',
    externalUrl: [
      'https://medium.com/gitconnected/i-tried-making-a-decentralized-os-on-my-own-and-failed-miserably-60d58dc4d807'
    ]
  },
   {
    id: 'the_ai-mirage',
    title: 'The AI Mirage: Power Grids, Paper Billions, and the Global Reality Check.',
    description: 'This is a report about friction between the digital and the physical, between the promise and the proof, between the hype and the hardware.',
    content: "",
    date: '2026-03-20',
    author: 'Dilpreet Grover',
    tags: ['Artificial Intelligence', "Technology", "Startup", "Data Science", "Business"], 
    readTime: '18 min read',
    externalUrl: [
      'https://medium.com/@dilpreetgrover2/the-ai-mirage-power-grids-paper-billions-and-the-global-reality-check-c9aa12ffc532'
    ]
  },
   {
    id: 'ai-productivity-paradox',
    title: 'The AI Productivity Paradox: Why Efficiency is Skyrocketing While Employees are Burning Out',
    description: 'We pull from the latest peer-reviewed research,to understand why our AI “copilots” may be making us crash.',
    content: "",
    date: '2026-03-18',
    author: 'Dilpreet Grover',
    tags: ['Artificial Intelligence', 'Future Of Work', 'Productivity', 'Mental Health', "Technology"], 
    readTime: '14 min read',
    externalUrl: [
      'https://medium.com/@dilpreetgrover2/the-ai-productivity-paradox-why-efficiency-is-skyrocketing-while-employees-are-burning-out-3747c44910d3'
    ]
  },
  {
    id: 'guide-to-ai-benchmarks',
    title: 'Definitive Guide to AI Benchmarks: Comparing Models, Testing Your Own, and Understanding the Future',
    description: 'We explore the evolution of these benchmarks, explain how they are built and used, and provide a comprehensive comparison of current state-of-the-art models.',
    content: "",
    date: '2025-03-07',
    author: 'Dilpreet Grover',
    tags: ['Artificial Intelligence', 'Benchmarking Process', 'Testing', 'Model Evaluation'], 
    readTime: '7 min read',
    externalUrl: [
      'https://levelup.gitconnected.com/definitive-guide-to-ai-benchmarks-comparing-models-testing-your-own-and-understanding-the-future-e61d4cf73a11',
      "https://dev.to/dfordp/definitive-guide-to-ai-benchmarks-comparing-models-testing-your-own-and-understanding-the-future-4d9i"
    ]
  },
  {
    id: 'intro-to-quantum-computing',
    title: 'Why Quantum Computing is the next big thing?',
    description: 'Whether you’re a fellow engineering student or a tech enthusiast, this article is designed to be the last resource you’ll ever need on quantum computing.',
    content: "",
    date: '2025-02-19',
    author: 'Dilpreet Grover',
    tags: ['Quantum Computing', 'Research', 'Qubits', 'Inovation'], 
    readTime: '7 min read',
    externalUrl: [
      'https://medium.com/@dilpreetgrover2/why-quantum-computing-is-the-next-big-thing-f4e6df20172a',
      "https://dev.to/dfordp/why-quantum-computing-is-the-next-big-thing-3l63"
    ]
  },
  {
    id: 'untapped-potential-of-blockchain',
    title: 'Untapped Potential of Blockchain: A World beyond Cryptocurreny',
    description: 'This blog is for the general public, indie hackers, and technical enthusiasts who want to look beyond the norm and discover new avenues and players in the world of Web3 and blockchain.',
    content: "",
    date: '2025-02-04',
    author: 'Dilpreet Grover',
    tags: ['Startup', 'Web3', 'Blockchain', 'Hackers'], 
    readTime: '7 min read',
    externalUrl: [
      'https://medium.com/@dilpreetgrover2/untapped-potential-of-blockchain-ae9744229d43',
      "https://dev.to/dfordp/untapped-potential-of-blockchain-a-world-beyond-cryptocurreny-3nm0"
    ]
  },
  {
    id: 'experience-using-genai-sde',
    title: 'My Experience Using GenAI in Software Development',
    description: 'I share my personal journey with GenAI, including the benefits it brings, the challenges I haveve faced, and some practical tips for building apps with GenAI technologies.',
    content: "",
    date: '2024-09-10',
    author: 'Dilpreet Grover',
    tags: ['GenAI', 'Software Development', 'Insight', 'Experience'], 
    readTime: '7 min read',
    externalUrl: [
      'https://medium.com/@dilpreetgrover2/my-experience-using-genai-in-software-development-8e5271b38313',
      "https://dev.to/dfordp/my-experience-using-genai-in-software-development-6g0"
    ]
  },
  {
    id: 'journey-through-buildspace-challenge',
    title: 'Embracing the Side Project Hustle: My Journey Through the Buildspace Challenge',
    description: 'In this article, I share my experience of building side projects during the 6-Week Challenge Nights and Weekends Season 5 organized by Buildspace.',
    content: "",
    date: '2024-07-29',
    author: 'Dilpreet Grover',
    tags: ['Buildspace', 'Artificial Intelligence', 'Research', 'Community'], 
    readTime: '7 min read',
    externalUrl: [
      'https://medium.com/@dilpreetgrover2/embracing-the-side-project-hustle-my-journey-through-the-buildspace-challenge-7cf6dba760bc',
      "https://dev.to/dfordp/embracing-the-side-project-hustle-my-journey-through-the-buildspace-challenge-1hcc"
    ]
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
