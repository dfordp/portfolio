import { useState, useEffect } from 'react';
import Logo from "@/assets/Logo.png"
import LogoDark from "@/assets/Logodark.png"
import ProfilePhoto from "@/assets/Profile-Photo.png"
import { ModeToggle } from "@/components/mode-toggle"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaYoutube ,FaBehance} from 'react-icons/fa';


const Home = () => {

  const navigateToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const texts = ['Software Developer', 'Problem Solver', 'Designer', 'Video Editor','Writer', 'Photographer','Youtuber' ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayText(prev => prev + texts[textIndex][prev.length]);
      if (displayText === texts[textIndex]) {
        setTextIndex(prev => (prev + 1) % texts.length);
        setDisplayText('');
      }
    },175);
    return () => clearInterval(timer);
  }, [textIndex, displayText, texts]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between px-6">
        <div>
          <img src={Logo} className="w-20 dark:hidden" />
          <img src={LogoDark} className="w-20 hidden dark:block" />
        </div>
        <div className="flex flex-row  items-center gap-9 my-6 font-medium">
          <div>
            <ModeToggle/>
          </div>
          <div onClick={() => navigateToSection('About')}>
            About
          </div>
          <div onClick={() => navigateToSection('Projects')}>
            Projects
          </div>
          <div onClick={() => navigateToSection('Reviews')}>
            Reviews
          </div>
          <div onClick={() => navigateToSection('Contact')}>
            Contact
          </div>
        </div>
      </div>  
      <div className="flex flex-row px-16 py-28 items-center justify-center gap-24">
        {/* Main Profile with name , pic & social links */}
        <div className="justify-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight px-1 py-2">
            I am
          </h3>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Dilpeet Grover
          </h1>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight px-1 py-2">
            A {displayText}
          </h3>
          <div className='flex flex-row gap-3 py-2 justify-center'>
            <a href="https://github.com/dfordp" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dilpreet-grover-17726b224" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/_dfordp_" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com/FreakAnimated" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.youtube.com/@dfordp" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.behance.net/redjohn8" target="_blank" rel="noopener noreferrer">
              <FaBehance size={24} />
            </a>
          </div>
        </div>
        <div>
          <img src={ProfilePhoto} className="w-60 mx-28 rounded-full outline outline-4 dark:outline-white "/>
        </div>
      </div>    
    </div>
  )
}

export default Home
