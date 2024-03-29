import {Button} from '@/components/ui/button';


const projects = [
  {
    name : "Ecommerce Admin Dashboard CMS", 
    description : "The service offers a comprehensive dashboard for retailers, supporting both product management and sales analysis.",
    github_link : "https://github.com/dfordp/e-commerce-admin",
    deployed_link : "https://e-commerce-admin-dfordp.vercel.app/",
  },
  {
    name : "AI Companion(GenAI ChatBot)", 
    description : "A platform which uses Large Language Models(LLMs) to create interactive chat-bots based on real-world personalities.",
    github_link : "https://github.com/dfordp/langchain-project",
    deployed_link : "https://langchain-project-two.vercel.app/",
  },
  {
    name : "One Med", 
    description : "A personal medical repo which allows one to manage their own & their family's records with link sharing and in-app storage",
    github_link : "https://github.com/dfordp/one-med-client",
    deployed_link : "https://one-med-client.vercel.app",
  },
  {
    name : "HackMate", 
    description : "A platform facilitating collaborative learning and innovation among a diverse technical community for hackathon events.",
    github_link : "https://github.com/dfordp/Hackmate-Intial-working-",
    deployed_link : "",
  },
  {
    name : "AI summariser", 
    description : "GPT-4 Summarizer: Automatically generates concise summaries of articles via API integration, enhancing content digestion and analysis",
    github_link : "https://github.com/dfordp/ai-summariser",
    deployed_link : "https://ai-summariser.vercel.app/",
  },
  {
    name : "TreeTrooper", 
    description : "The system allows users to monitor and manage their plants' health without prior knowledge, enabling immediate preventive actions.",
    github_link : "https://github.com/dfordp/solution-challenge-2024",
    deployed_link : "",
  },
  {
    name : "Messenger App", 
    description : "Implemented real-time chat features,instantaneous message delivery, synchronized data, private messaging, and scalable group chat capabilities.",
    github_link : "https://github.com/dfordp/messenger-app",
    deployed_link : "https://messenger-app-pi.vercel.app/",
  }
]

const Projects = () => {
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div>
     <h1 className="scroll-m-20 font-extrabold tracking-tight text-2xl lg:text-4xl py-8 flex flex-row justify-center whitespace-nowrap my-6">
          Projects
      </h1>
      <div className="flex flex-row gap-4 py-10 px-5 overflow-x-scroll custom-scrollbar">
        {projects.map((project, index) => (
          <div key={index} className="w-80 h-56 flex-none dark:bg-[rgba(0,0,0,0.05)] outline outline-1 rounded-md">
            <div className="pt-3 flex flex-row">
              <p className="leading-7 [&:not(:first-child)]:pt-1 pl-4 font-bold ">{project.name}</p>
            </div>
            <p className="leading-7 [&:not(:first-child)]:py-2 pl-4 pr-2 font-medium text-xs">{project.description}</p>
            <div className="flex flex-row justify-between p-4">
              <Button onClick={() => handleClick(project.github_link)} className=''>GitHub</Button>
              {project.deployed_link && <Button onClick={() => handleClick(project.deployed_link)}>Deployed</Button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects
