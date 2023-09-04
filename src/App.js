import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Context } from "./Context";
import { motion, useAnimation } from 'framer-motion';
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Side from "./Components/Side";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import About from "./Components/About";
import OverlayMenu from "./Components/OverlayMenu";
import Welcome from "./Components/Welcome";
import CustomCursor from './Components/CustomCursor'

function App() {
  const { overlayMenu } = useContext(Context)

  const controls = useAnimation()

  const [isWelcome, setIsWelcome] = useState(true)
  setTimeout(() => {setIsWelcome(false)}, 5900)

  useEffect(() => {
    const timer = setTimeout(async () => {
      await controls.start({ y: '-100%' })
    }, 5000);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div className="bg-[#eee] relative h-screen pb-16 pt-20">
      <Header />
      <Side />
      <Footer />

      <div className="sm:pl-6 pl-16 pr-4 overflow-y-scroll no-scrollbar h-full bg-inherit">
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

      {overlayMenu && <OverlayMenu />}
        
      {isWelcome && 
        <motion.div
          className="slide fixed h-screen w-full z-50 top-0 bg-red-600"
          initial={{ y: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Welcome />
        </motion.div>     
      }

      <CustomCursor/>
    </div> 
  )
}

export default App;
