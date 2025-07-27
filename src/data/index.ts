import Aarchid from "@/assets/Aarchid.jpg"
import Kosu from "@/assets/Kosu.avif"
import Hackmate from "@/assets/Hackmate.jpg"
import OnlyNerds from "@/assets/OnlyNerds.jpg"
import OneMed from "@/assets/OneMed.jpg"
import CompileMe from "@/assets/CompileMe.webp"
import DashBoard from "@/assets/Dashboard.jpg"
import ChatBot from "@/assets/ChatBot.jpg"
import Summarizer from "@/assets/Summarizer.webp"
import Messenger from "@/assets/Messenger.avif"
import Buildspace from "@/assets/Buildspace.jpeg"
import AI from "@/assets/AI_as_software.webp"
import Blockchain from "@/assets/Untapped_Blockchain.webp"
import QuantumComputing from "@/assets/QuantumComputing.jpg"
import AI_Benchmarks from "@/assets/AI_benchmarks.png"
import Echo from "@/assets/Echo.webp"

export const projects = [
    {
      name: "Echo",
      illustration : Echo,
      description: "Programmable Micro Context Protocol (MCP) server + Cloud deployment system that lets content creators automatically spin up a public, branded website",
      github_link : "https://github.com/dfordp/echo-rework",
      deployed_link : "https://echo-rework.vercel.app/",
    },
    {
      name: "OnlyNerds",
      illustration : OnlyNerds,
      description: "Decentralized learning platform with AI-powered course delivery, fork-based content sharing, and verfiable skill credentials through dynamic NFTs.",
      github_link : "https://github.com/dfordp/onlynerds",
      deployed_link : "https://onlynerds-rose.vercel.app/",
    },
    {
      name: "Hackmate",
      illustration : Hackmate,
      description: "A swipe-based matchmaking platform designed to help founders and builders discover potential co-founders, collaborators, or indie hackers",
      github_link : "https://github.com/dfordp/hackmate-rework",
      deployed_link : "https://hackmate-rework.vercel.app/",
    },
    {
      name: "Kosu",
      illustration : Kosu,
      description: "AI-driven event platform with smart team matching and automated workflows, featuring blockchain-based rewards and NFT credentials.",
      github_link : "https://github.com/dfordp/kosu-ai",
      deployed_link : "https://kosu-xi.vercel.app/",
    },
    {
      name: "Aarchid",
      illustration : Aarchid,
      description: "Provide plant care assistance with in-app chat and health checkups using Google's Gemini Pro models for vision and text analysis.",
      github_link : "https://github.com/dfordp/aarkid-client",
      deployed_link : "https://aarkid-client.vercel.app",
    },
    {
      name : "Article summariser",
      illustration : Summarizer, 
      description : "Automatically generates concise summaries of articles via API integration, enhancing content digestion and analysis",
      github_link : "https://github.com/dfordp/ai-summariser",
      deployed_link : "https://ai-summariser.vercel.app/",
    },
    {
      name : "One Med",
      illustration : OneMed,
      description : "A personal medical repo which allows one to manage their own & their family's records with link sharing and in-app storage",
      github_link : "https://github.com/dfordp/one-med-client",
      deployed_link : "https://one-med-client.vercel.app",
    },
    {
      name : "Messenger App",
      illustration : Messenger, 
      description : "Implemented real-time chat features, instantaneous message delivery, synchronized data, private messaging, and scalable group chat capabilities.",
      github_link : "https://github.com/dfordp/messenger-app",
      deployed_link : "https://messenger-app-pi.vercel.app/",
    },
    {
      name : "Compile Me Playground",
      illustration : CompileMe,
      description : "A codepen playground which compiles programs written in multiple popular languages & runs them at near-native speed",
      github_link : "https://github.com/Ankan002/compile-me-playground",
      deployed_link : "https://playground.compile-me.com/",
    },
    {
      name : "E-commerce Admin Dashboard CMS",
      illustration : DashBoard, 
      description : "The service offers a comprehensive dashboard for retailers, supporting both product management and sales analysis.",
      github_link : "https://github.com/dfordp/e-commerce-admin",
      deployed_link : "https://e-commerce-admin-dfordp.vercel.app/",
    },
    {
      name : "AI Companion",
      illustration : ChatBot,
      description : "A platform which uses Large Language Models(LLMs) to create interactive chat-bots based on real-world personalities.",
      github_link : "https://github.com/dfordp/langchain-project",
      deployed_link : "https://langchain-project-two.vercel.app/",
    },
  ]


export const experiences = [
    {
      company : 'GeeksforGeeks',
      role : 'Student Coordinator',
      timePeriod : 'April 2022 - March 2023',
      points : [
        "Orchestrated and coordinated marketing events, contributing significantly to the success of the college's technical fest, Digi Fiesta.",
        "Played a key role in securing sponsorship for the event and successfully invited Sandeep Jain Sir to deliver an insightful tech talk at the university",
        "Established connections with a diverse range of tech enthusiasts and industry experts, enhancing networking opportunities and contributing to the dynamic tech community."
      ]
    },
    {
      company : 'Training & Placement Cell,YMCA',
      role : 'Student Coordinator',
      timePeriod : 'December-2022 - December 2024',
      points : [
        "Coordinated and supervised the orchestration of multiple companies' placement drives.",
        "Developed an in-house test-taking platform in collaboration with IT team members, offering assistance to peers in their placement preparation based on past drives.",
        "Responsible for the design and creation of posters and social media content for placement notifications and updates."
      ]
    },
    { 
      company: 'SimplifyNote',
      role: 'Full-Stack Developer',
      timePeriod: 'July 2023 - September 2023',
      points: [
        "Revamped frontend performance: Rewrote the frontend in NextJS, improving time-to-interactive on mobile by 40% through server-side rendering and dynamic imports.",
        "Enabled accessibility with real-time transcriptions: Integrated Google Speech-to-Text API via FastAPI for seamless transcription, ensuring Web Speech API compliance for accessibility.",
        "Transformed billing with custom Stripe integration: Replaced third-party logic with a custom Stripe module, slashing failed payment churn and optimizing recurring billing with webhook-based reconciliation.",
      ]
     },
     { 
      company: 'Meved HR Solutions',
      role: 'Software Developer',
      timePeriod: 'February 2024 - May 2024',
      points: [
        "Transformed recruitment with AI: Built an AI-powered resume screener using BERT NLP models, reducing manual shortlisting by 60% while staying within tight cloud budgets.",
        "Scaled recruitment platform with zero downtime: Containerized services with Docker and ECS Fargate, managing 15,000+ users and optimizing autoscaling to remain under budget.",
        "Boosted recruiter efficiency: Improved API performance by 30% through middleware optimizations, accelerating workflows for recruiters and enhancing AI module responsiveness.",
      ]
    },
    {
      company: 'Codemod Inc.',
      role: 'Consultant',
      timePeriod: "September 2024 ‑  November 2024",
      points: [
        "Accelerated migrations with AI-powered tooling: Led Webpack to Rspack, Radix Vue to Reka-UI, and Enzyme to React Testing Library migrations, improving performance by 10-15% on Netlify and Vercel projects.",
        "Ensured reliability at scale: Conducted performance tests on AWS-amplify and Swagger-UI, optimizing for edge cases and bolstering performance in high-traffic environments.",
        "Fostered AI-driven development: Trained 20+ engineers on AST-based tools (ast-grep, jscodeshift) for large-scale migrations, driving adoption of AI-enhanced workflows."
      ]
    },
    {
      company: 'Appleute Ltd.',
      role: 'Software Developer',
      timePeriod: "January 2025 ‑  April 2025",
      points: [
        "Revolutionized trading with real-time cloud architecture: Engineered a high-performance, role-based trading platform using Microservices, Kafka, and AWS Lambda, processing €2.5K/min in rare-earth metal trades with ultra-low latency.",
        "Optimized investment engine automation: Designed core modules with Spring Boot and PostgreSQL, processing 200+ weekly orders and boosting order-to-delivery tracking by 15%.",
        "Enhanced darknet surveillance with AI: Integrated Falkor.ai, Scrapy, and Elasticsearch for dynamic social media and darknet tracking, slashing alert response time by 40%."
      ]
    },
    {
      company: 'Fada Club',
      role : 'Co-Founder',
      timePeriod : 'June 2024-May 2025',
      points : [
        "Research organization, in order to facilitate and balance project development, enhancement and collaboration among professionals."
      ]
    },
    {
      company: 'Hobit Technologies',
      role : 'Software Development Engineer',
      timePeriod : 'June 2025-Present',
      points : [
        "Scaled global women’s fitness platform infrastructure: Migrated backend APIs and restructured critical services to support 100K+ active users across 30+ countries, reducing average response times by 60% while maintaining infra costs below ₹50K/month.",
        "Built EVA, a real-time AI agent for DB operations: Developed Litechain, an in-house LangChain-like abstraction layer, to power EVA — enabling dynamic, zero-boilerplate AI-driven queries for personalized fitness recommendations and operational workflows.",
        "Modernized backend with microservices & cloud-native patterns: Re-architected legacy monolith into scalable, containerized services, improving system elasticity and cutting infrastructure overhead by 40%.",
        "Automated nutrition planning: Built a plan generation service that cut manual workload for dieticians by 60%, enabling faster personalization and smoother client communication — boosting retention and session throughput by 35%.",
        "Scaled daily notifications: Built a distributed notification system for classes, health tips, and period tracking — handled 2M+ reminders/day with <200ms latency and 99.98% delivery rate, boosting DAUs by 22%."
      ]
    },
  ];
  
export const Blogs = [
  {
    Title : "Definitive Guide to AI Benchmarks",
    illustration : AI_Benchmarks,
    mediumLink : "https://medium.com/gitconnected/definitive-guide-to-ai-benchmarks-comparing-models-testing-your-own-and-understanding-the-future-e61d4cf73a11",
    devToLink  : "https://dev.to/dfordp/definitive-guide-to-ai-benchmarks-comparing-models-testing-your-own-and-understanding-the-future-4d9i"
  },
  {
    Title : "Quantum Computing: Next Big Thing", 
    illustration : QuantumComputing,
    mediumLink  :  "https://medium.com/@dilpreetgrover2/why-quantum-computing-is-the-next-big-thing-f4e6df20172a",
    devToLink :"https://dev.to/dfordp/why-quantum-computing-is-the-next-big-thing-3l63"
  },
  {
    Title : "Untapped Potential of Blockchain", 
    illustration : Blockchain,
    mediumLink  :  "https://medium.com/@dilpreetgrover2/untapped-potential-of-blockchain-ae9744229d43",
    devToLink : "https://dev.to/dfordp/untapped-potential-of-blockchain-a-world-beyond-cryptocurreny-3nm0"
  },
  {
    Title : "Experience using GenAI in Development", 
    illustration : AI,
    mediumLink  :  "https://medium.com/@dilpreetgrover2/my-experience-using-genai-in-software-development-8e5271b38313",
    devToLink :"https://dev.to/dfordp/my-experience-using-genai-in-software-development-6g0"
  },
  {
    Title : "Documenting the Buildspace Challenge",
    illustration : Buildspace,
    mediumLink  : "https://medium.com/@dilpreetgrover2/embracing-the-side-project-hustle-my-journey-through-the-buildspace-challenge-7cf6dba760bc",
    devToLink :"https://dev.to/dfordp/embracing-the-side-project-hustle-my-journey-through-the-buildspace-challenge-1hcc"
  },
]

