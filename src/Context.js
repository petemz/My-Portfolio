import { createContext, useState, useEffect } from "react"

const Context = createContext()

function ContextProvider(props) {
    const [currentPage, setCurrentPage] = useState({page:"home", index:1})
    
    useEffect(() => {
        const storedCurrentPage = window.sessionStorage.getItem("currentPage");
    if (storedCurrentPage) {
      setCurrentPage(JSON.parse(storedCurrentPage));
    }
      }, []);
    
    useEffect(() => {
        window.sessionStorage.setItem('currentPage', JSON.stringify(currentPage));
    }, [currentPage])

    console.log(currentPage)

    return (
        <Context.Provider value={{currentPage, setCurrentPage}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
