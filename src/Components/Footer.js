import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import {Context} from "../Context"
import { useContext } from "react"

const Footer = () => {
    const {currentPage, toUpperCase,  pageUp, pageDown} = useContext(Context)
    const currentYear = new Date().getFullYear()

    return (
        <footer className="z-40 fixed bg-inherit w-full bottom-0 h-16 sm:h-14 sm:px-6 px-8 ">
            <div className="h-full flex items-center justify-between sm:hidden">
                <div className=" text-sm font-medium ">
                    <span>Peter Emmies @ </span>
                    <span>{currentYear}</span>
                </div>

                <nav className="text-xl text-[#5f5f5f]">
                    <ul className="flex">
                        <a href="mailto:peteremmies7@gmail.com" target="blank">
                            <li className="ml-4">
                                <FaEnvelope/>
                            </li>
                        </a>
                        <a href="https://github.com/petemz" target="blank">
                            <li className="ml-4">
                                <FaGithub />
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/peter-emmies" target="blank">
                            <li className="ml-4">
                                <FaLinkedin />
                            </li>
                        </a>
                        <a href="https://twitter.com/petemz_" target="blank">
                            <li className="ml-4">
                                <FaTwitter />
                            </li>
                        </a>
                        <a href="https://www.instagram.com/petemz" target="blank">
                            <li className="ml-4">
                                <FaInstagram />
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>

            <div className="sm:flex hidden h-full items-center justify-between">
                <div className="flex text-base">
                    <p className=" font-semibold mr-4">{toUpperCase(currentPage.page)}</p>
                    <p className="">
                        <span>{`0${currentPage.index} `}</span>
                        <span className="text-[#9c9c9c]">/ 05</span>
                    </p>
                </div>

                <div className="flex text-sm">
                    <div onClick={() => pageUp()} className="mr-6">
                        <FaArrowLeft />
                    </div>
                    <div onClick={() => pageDown()}>
                        < FaArrowRight />
                    </div>
                </div>
            </div>
            
        </footer>
      )
}

export default Footer