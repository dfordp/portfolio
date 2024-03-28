import Aboutme from "./components/Aboutme"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Projects from "./components/Projects"
// import Reviews from "./components/Reviews"
import TechStack from "./components/TechStack"

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
          <TechStack/>
        </div>
        <div id="Projects">
          <Projects/>
        </div>
        {/* <div id="Reviews">
          <Reviews/>
        </div> */}
        <div id="Contact">
          <Contact/>
        </div>
      </div>
  )
}

export default App
