import Footer from "./Footer";
import Header from "./Header"
import Side from "./Side";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects"
import About from "./About"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="bg-[#eeeeee] cursor-context-menu h-screen overflow-scroll ">
      <Header />
      <Side />
      <Footer />

      <div className="pt-20 pl-16 pr-4 pb-16 h-full">
        <Routes>
          <Route exact path="/"
            element={<Home />}/>
          <Route path="/about"
            element={<About />}
          />
          <Route path="/skills"
            element={<Skills />}
          />
          <Route path="/projects"
            element={<Projects />}
          />
          <Route path="/contact" 
            element={<Contact />}
          />
        </Routes>
      </div>
        
    </div> 
  )
}

export default App;
