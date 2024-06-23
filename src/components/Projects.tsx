import {Button} from '@/components/ui/button';
import { projects } from '@/data';

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
          <div key={index} className="w-48 md:w-80 md:h-56 flex-none dark:bg-[rgba(0,0,0,0.05)] outline outline-1 rounded-md">
            <div className="pt-3 flex flex-row">
              <p className="leading-7 [&:not(:first-child)]:pt-1 pl-4 font-bold ">{project.name}</p>
            </div>
            <p className="leading-7 [&:not(:first-child)]:py-2 pl-4 pr-2 font-medium text-xs">{project.description}</p>
            <div className="flex flex-col gap-3 md:flex-row md:justify-between p-4">
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
