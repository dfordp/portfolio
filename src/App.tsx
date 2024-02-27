import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import TechStack from "./components/TechStack"

const App = () => {
  return (
      <div className="px-10 py-3 ">
        <div>
          <Home/>       
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
