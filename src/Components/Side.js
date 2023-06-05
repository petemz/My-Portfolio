import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import {Context} from "../Context"
import { useContext } from "react"

const Side = () => {
    const {currentPage, toUpperCase, pageUp, pageDown} = useContext(Context)
    
    const currentDate = new Date().toLocaleDateString()

    return (
        <div className=" h-[520px] fixed z-10 sm:hidden left-4 mt-5 text-base justify-between items-center flex [writing-mode:vertical-lr]">
            <div className="flex">
                <p className="mb-6 text-[#9c9c9c] text-lg font-semibold ">{toUpperCase(currentPage.page)}</p>
                <p className="">{currentDate}</p>
            </div>

            <div className="flex text-base items-center">
                <p className="mb-6">
                    <span>{`0${currentPage.index}`}</span>
                    <span>/ 05</span>
                </p>
                <div className="flex text-sm">
                    <div onClick={() => pageUp()} className="mb-5">
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