import { useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import { toUpperCase } from "../Utilities/Utilities"
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FiX } from "react-icons/fi"


const OverlayMenu = () => {
    const {currentPage, setCurrentPage, setOverlayMenu, navItems, } = useContext(Context)

    return (
        <div className="bottom-20 top-0 pt-32 h-full w-full fixed z-50 bg-inherit ">
            <button 
                onClick={() => setOverlayMenu(false)} 
                className="text-4xl absolute top-8 right-8"
            >
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
        
            <nav className="text-xl text-[#5f5f5f] absolute right-8 bottom-0">
                <ul className=" justify-end">
                    <a href="mailto:peteremmies7@gmail.com" target="_blank" rel="noopener noreferrer">
                        <li className="my-4 hover:text-orange-400">
                            <FaEnvelope/>
                        </li>
                    </a>
                    <a href="https://github.com/petemz" target="_blank" rel="noopener noreferrer">
                        <li className="my-4 hover:text-black">
                            <FaGithub />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/peter-emmies" target="_blank" rel="noopener noreferrer">
                        <li className="my-4 hover:text-blue-600">
                            <FaLinkedin />
                        </li>
                    </a>
                    <a href="https://twitter.com/petemz_" target="_blank" rel="noopener noreferrer">
                        <li className="my-4 hover:text-blue-500">
                            <FaTwitter />
                        </li>
                    </a>
                    <a href="https://www.instagram.com/petemz" target="_blank" rel="noopener noreferrer">
                        <li className="my-4 hover:text-red-400">
                            <FaInstagram />
                        </li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default OverlayMenu