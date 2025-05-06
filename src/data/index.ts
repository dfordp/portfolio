import Aarchid from "@/assets/Aarchid.jpg"
import Kosu from "@/assets/Hackmate.avif"
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

export const projects = [
    {
      name: "Kosu",
      illustration : Kosu,
      description: "AI-driven event platform with smart team matching and automated workflows, featuring blockchain-based rewards and NFT credentials.",
      github_link : "https://github.com/dfordp/event-timepass",
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
      role: 'Full-Stack Developer Intern',
      timePeriod: 'July 2023 - September 2023',
      points: [
        "Redesigned the landing page UI/UX, leveraging modern design principles to achieve a 30% increase in user engagement, boosting product adoption and user retention metrics.",
        "Developed a robust speech-to-text feature powered by NLP and voice command technology, leading to a 20% rise in daily active users and expanding product accessibility.",
        "Integrated payment gateway systems at scale, driving a 15% increase in Monthly Recurring Revenue (MRR) by streamlining subscription management and transaction workflows.",
      ]
     },
     { 
      company: 'Meved HR Solutions',
      role: 'Software Developer Intern',
      timePeriod: 'February 2024 - May 2024',
      points: [
        "Designed and implemented core architectural components, achieving a 20% boost in system efficiency and reducing operational costs by 15% through optimized resource allocation and streamlined processes.",
        "Enhanced infrastructure scalability to support 500+ concurrent users with near-zero downtime, reducing peak-hour outages to less than 5 minutes, driving a 25% increase in user satisfaction.",
        "Deployed and optimized middleware layers, improving API response times by 30%, significantly enhancing service delivery and client software integration.",
      ]
    },
    {
      company: 'Codemod Inc.',
      role: 'Consultant',
      timePeriod: "September 2024 ‑  November 2024",
      points: [
        "Automated code migration from Webpack to Rspack, Radix Vue to Reka-UI, and Enzyme to React Testing Library, delivering a 10-15% performance uplift across multiple high-traffic Netlify and Vercel projects.",
        "Conducted comprehensive performance and reliability testing across popular repositories such as AWS-amplify (2.8k stars), Shadcn-vue(5.6k stars), and Swagger-UI(26.8k stars), identifying and optimizing for critical edge cases.",
        "Trained and mentored a cohort of 20+ engineers in leveraging AST-based tools (ast-grep, jscodeshift) for large-scale code transformations, fostering expertise in AI-driven migration workflows. "
      ]
    },
    {
      company: 'Appleute Ltd.',
      role: 'Software Developer Intern',
      timePeriod: "January 2025 ‑  April 2025",
      points: [
        "Orchestrated a cloud-native, role-based trading & surveillance platform for European clients—leveraging microservices and real-time data pipelines to process €2.5K/min in rare-earth metal trades.",
        "Developed core modules for an automated investment-plan engine, handling 200 weekly orders and improving order-to-delivery tracking by 15%.",
        "Assisted in creating a surveillance tool that aggregated data from 10+ darknet sources and tracked live locations/social posts, cutting alert response time by 40%."
      ]
    },
    {
      company: 'Fada Club',
      role : 'Co-Founder',
      timePeriod : 'June 2024-Present',
      points : [
        "Research organization, in order to facilitate and balance project development, enhancement and collaboration among professionals."
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

