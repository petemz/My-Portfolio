import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Context = createContext()

const ContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState({page:"home", index:1})
    const [overlayMenu, setOverlayMenu] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    
    const navItems = ["home", "about", "skills", "projects", "contact"]
    
    const pages = [{page:"home", index:1}, {page:"about", index:2}, {page:"skills", index:3}, {page:"projects", index:4}, {page:"contact", index:5}]
     
    let navigate = useNavigate()

    const pageUp = () => {
        if (currentPage.index !== 1){
            let newPage = pages.find(page => page.index === currentPage.index - 1)
            setCurrentPage(newPage)
            let path = newPage.page === "home" ? "/" : "/" + newPage.page  
            navigate(path)
        }
    }

    const pageDown = () =>{
        if (currentPage.index !== 5) {
            let newPage = pages.find(page => page.index === currentPage.index + 1)
            setCurrentPage(newPage)
            let path = "/" + newPage.page
            navigate(path)
        }
    }
    
    useEffect(() => {
        const storedCurrentPage = window.sessionStorage.getItem("currentPage")
        if (storedCurrentPage) {
            setCurrentPage(JSON.parse(storedCurrentPage));
        }

        const storedColorMode = window.sessionStorage.getItem("darkMode")
        if (storedColorMode !== null && storedColorMode !== undefined) {
            setIsDarkMode(JSON.parse(storedColorMode));
        }
      }, [])
    
    useEffect(() => {
        window.sessionStorage.setItem('currentPage', JSON.stringify(currentPage))
        window.sessionStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    }, [currentPage, isDarkMode])

    return (
        <Context.Provider value={{currentPage, setCurrentPage, overlayMenu, setOverlayMenu, isDarkMode, setIsDarkMode, navItems, pages, pageUp, pageDown}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
