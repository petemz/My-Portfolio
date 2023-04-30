import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Context = createContext()

function ContextProvider(props) {
    const [currentPage, setCurrentPage] = useState({page:"home", index:1})
    const [overlayMenu, setOverlayMenu] = useState(false)
    
    const navItems = ["home", "about", "skills", "projects", "contact"]
    const toUpperCase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    
    const pages = [{page:"home", index:1}, {page:"about", index:2}, {page:"skills", index:3}, {page:"projects", index:4}, {page:"contact", index:5}]
        
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
    
    let navigate = useNavigate()

    
    useEffect(() => {
        const storedCurrentPage = window.sessionStorage.getItem("currentPage");
    if (storedCurrentPage) {
      setCurrentPage(JSON.parse(storedCurrentPage));
    }
      }, []);
    
    useEffect(() => {
        window.sessionStorage.setItem('currentPage', JSON.stringify(currentPage));
    }, [currentPage])

    return (
        <Context.Provider value={{currentPage, setCurrentPage, overlayMenu, setOverlayMenu, navItems, toUpperCase, pages, pageUp, pageDown}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
