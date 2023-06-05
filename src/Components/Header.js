import { Link } from "react-router-dom"
import {Context} from "../Context"
import { useContext } from "react"
import { FiMenu } from "react-icons/fi"
//import { useState } from "react"

const Header = () => {
    const {currentPage, setCurrentPage, setOverlayMenu, navItems, toUpperCase} = useContext(Context)

    const nav = navItems.map((item, index) => {
        const activeLink = currentPage.page === item ? `text-black border-b border-black` : ''
        return (
            <li key={index} className="hover:text-black ml-6">
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
                <div className="text-3xl pb-0.5 pr-2 relative font-semibold ">
                    <span >Emmies</span>
                    <div className="border-b-[3px] border-r-[3px] absolute left-2/3 right-0 top-1/2 bottom-0 border-emerald-800"></div>
                </div>
            </Link>

            
            <button onClick={() => setOverlayMenu(true)} className="text-4xl hidden sm:block">
                { <FiMenu/>}
            </button>
            

            <nav className="text-[17px] sm:hidden text-[#5f5f5f] ">
                
                <ul className="flex">
                    {nav}
                </ul>
            </nav>
        </header>
      )
}

export default Header