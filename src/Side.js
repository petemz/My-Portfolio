import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import {Context} from "./Context"
import { useContext } from "react"

const Side = () => {
    const {currentPage, setCurrentPage} = useContext(Context)
    
    const pages = [{page:"home", index:1}, {page:"about", index:2}, {page:"skills", index:3}, {page:"projects", index:4}, {page:"contact", index:5}]
    const currentDate = new Date().toLocaleDateString()
    const toUpperCase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
        
    }
    console.log(currentPage.page)

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

    return (
        <div className=" h-[480px] bg-inherit fixed left-4 mt-28 text-base justify-between items-center flex [writing-mode:vertical-lr]">
            <div className="flex">
                <p className="mb-6 text-[#9c9c9c] text-lg font-semibold ">{toUpperCase(currentPage.page)}</p>
                <p className="">{currentDate}</p>
            </div>

            <div className="flex text-base items-center">
                <p className="mb-6">
                    <span>{`0${currentPage.index}`}</span>
                    <span>/ 05</span>
                </p>
                <div className="flex">
                    <div onClick={() => pageUp()} className="mb-3">
                        < FaArrowUp />
                    </div>
                    <div onClick={() => pageDown()}>
                        <FaArrowDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side