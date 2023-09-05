import { Link } from "react-router-dom"
import {Context} from "../Context"
import { useContext } from "react"
import { FiMenu } from "react-icons/fi"
import Logo from "../Assets/Logo"
import { toUpperCase } from "../Utilities/Utilities"

const Header = () => {
    const {currentPage, setCurrentPage, setOverlayMenu,  isDarkMode, setIsDarkMode, navItems} = useContext(Context)

    const nav = navItems.map((item, index) => {
        const activeLink = currentPage.page === item && `border-b ${isDarkMode ? 'text-white border-white' : 'text-black border-black'}`
        return (
            <li key={index} className={` ml-6 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>
                <Link 
                    onClick={() => setCurrentPage({page:item, index: index + 1})} 
                    to={item === 'home' ? '/' : '/' + item} 
                >
                    <div className={`${activeLink}`}>
                        <span>{toUpperCase(item)}</span>
                    </div>
                </Link>
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all ease-out duration-300 group-hover:w-full"></div>
            </li>
        )}
    )

    return (
        <header className="fixed z-40 top-0 h-20 bg-inherit px-6 w-full flex justify-between items-center"> 
            <Link onClick={() => setCurrentPage({page:'home', index: 1})} to="/">
                <Logo />
            </Link>

        <div className="flex items-center">
            <nav className={`text-[17px] sm:hidden text-[#5f5f5f]`}>  
                <ul className="flex">
                    {nav}
                </ul>
            </nav>

            <button onClick={() => setOverlayMenu(true)} className="text-4xl hidden sm:block">
                {<FiMenu/>}
            </button>

            <button 
                onClick={() => setIsDarkMode(val => !val)}
                className={`${isDarkMode ? 'border-[#eee]' : 'border-black' } flex w-7 h-7 ml-8 border-2 rounded-full overflow-hidden`}
            >
                <div className={`${isDarkMode ? 'bg-[#eee]' : 'bg-black'} h-full w-[43%]`}></div>
            </button>
        </div>
            
        </header>
      )
}

export default Header