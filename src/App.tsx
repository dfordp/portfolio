import Aboutme from "./components/Aboutme"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Projects from "./components/Projects"

const App = () => {
  return (
      <div className="px-10 py-3 main">
        <div id="home">
          <Home/>       
        </div>
        <div id="About">
          <Aboutme/>
        </div>
        <div id="Experience">
          <Experience/>
        </div>
        <div id="Projects">
          <Projects/>
        </div>
        <div id="Blog">
          <Blog/>
        </div>
        <div id="Contact">
          <Contact/>
        </div>
      </div>
  )
}

export default App
