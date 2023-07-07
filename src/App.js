import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Side from "./Components/Side";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects"
import About from "./Components/About"
import Welcome from "./Components/Welcome";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useContext } from "react";
import {Context} from "./Context";
import { FiX } from "react-icons/fi";

function App() {
  const {currentPage, setCurrentPage, overlayMenu, setOverlayMenu, navItems, toUpperCase,} = useContext(Context)

  const [isWelcome, setIsWelcome] = useState(true)
  setTimeout(() => {setIsWelcome(false)}, 6000)

  return (
    <div className="bg-[#eeeeee] cursor-context-menu h-screen pb-16 pt-20">
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

      {overlayMenu && 
        <div className="bottom-20 top-0 pt-32 h-full w-full fixed z-50 bg-inherit ">
          <button onClick={() => setOverlayMenu(false)} className="text-4xl absolute top-8 right-8 ">
            <FiX />
          </button>
          <div>  
            {navItems.map((nav, index) => {
              return(
                <Link 
                  onClick={() => {
                    setCurrentPage({page:nav, index: index + 1})
                    setOverlayMenu(false)
                  }} 
                  to={nav === 'home' ? '/' : '/' + nav} 
                  key={nav}
                >
                  <div className={`${currentPage.page === nav ? 'line-through text-emerald-800 italic' : 'hover:text-emerald-500 hover:italic transition-[font-style] duratin-300 duration-300'}  hover:line-through text-4xl font-semibold h-12 mb-12 flex justify-center items-center`}>
                    <span className="w-max px-1">{toUpperCase(nav)}</span>
                  </div>
                </Link>
              )}
            )}
          </div>
        </div>
      }
        
      {isWelcome && <Welcome />}
    </div> 
  )
}

export default App;
