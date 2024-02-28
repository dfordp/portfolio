import Aboutme from "./components/Aboutme"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import TechStack from "./components/TechStack"

const App = () => {
  return (
      <div className="px-10 py-3 main">
        <div>
          <Home/>       
        </div>
        <div>
          <Aboutme/>
        </div>
        <div>
          <Experience/>
        </div>
        <div>
          <TechStack/>
        </div>
        <div>
          <Projects/>
        </div>
        <div>
          <Reviews/>
        </div>
        <div>
          <Contact/>
        </div>
      </div>
  )
}

export default App
