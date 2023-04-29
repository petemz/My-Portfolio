import { Link } from "react-router-dom"
import {Context} from "./Context"
import { useContext } from "react"

const Header = () => {
    const {currentPage, setCurrentPage} = useContext(Context)
    const navItems = ["home", "about", "skills", "projects", "contact"]

    const toUpperCase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const nav = navItems.map((item, index) => {
        const activeLink = currentPage.page === item ? `text-black border-b border-black` : ''
        return (
            <li key={item} className="hover:text-black ml-6">
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
        <header className="fixed z-50 top-0 h-20 bg-[#eeeeee] px-6 w-full flex justify-between items-center"> 
            <Link onClick={() => setCurrentPage({page:'home', index: 1})} to="/">
                <div className="text-3xl font-semibold ">
                    <span>Emmies</span>
                </div>
            </Link>

            <nav className="text-[17px] text-[#5f5f5f]">
                <ul className="flex">
                    {nav}
                </ul>
            </nav>
        </header>
      )
}

export default Header