import { SiC, SiCplusplus, SiJavascript, SiTypescript, SiPython, SiReact, SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiFirebase, SiGithub, SiVercel, SiFigma, SiGooglecloud, SiMicrosoftazure, SiSocketdotio,SiAdobepremierepro  } from 'react-icons/si';
import { FaNodeJs, FaAws } from 'react-icons/fa';
import { TbBrandNextjs } from "react-icons/tb";
import { DiPhotoshop,DiIllustrator   } from "react-icons/di";
import { RiScissorsCutFill } from "react-icons/ri";

const TechStack = () => {
  const techStack = [
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Next.js', icon: <TbBrandNextjs /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'FireBase', icon: <SiFirebase /> },
    { name: 'Socket.io', icon: <SiSocketdotio /> },
    { name: 'Github', icon: <SiGithub /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'Google Cloud', icon: <SiGooglecloud /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Azure', icon: <SiMicrosoftazure /> },
    { name: 'Photoshop', icon: <DiPhotoshop /> }, 
    { name: 'Premiere Pro', icon: <SiAdobepremierepro /> }, 
    { name: 'Illustrator', icon: <DiIllustrator /> }, 
    { name: 'DaVinci Resolve', icon: <RiScissorsCutFill /> },
  ];

  return (
    <div className='px-24'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl justify-center py-16 flex flex-row">
        Skill Set
      </h1>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {techStack.map((tech, index) => (
          <div key={index} className="flex items-center gap-2">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;