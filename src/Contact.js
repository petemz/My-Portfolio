import { FaArrowRight, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import {Context} from "./Context"
import { useContext } from "react"

const Contact = () => {
    const {currentPage} = useContext(Context)

    const medias = [
        {name: "Email", username: "peteremmie7@gmail.com", link:"mailto:peteremmies7@gmail.com", icon: <FaEnvelope />},
        {name: "Github", username: "petemz", link:"https://github.com/petemz", icon: <FaGithub />}, 
        {name: "LinkedIn", username: "Peter Emmies", link:"https://www.linkedin.com/in/peter-emmies", icon: <FaLinkedin />},
        {name: "Instagram", username: "petemz", link:"https://www.instagram.com/petemz", icon:<FaInstagram />},
        {name: "Twitter", username: "petemz_", link:"https://twitter.com/petemz_", icon:<FaTwitter />}, 
    ]

    return (
        <div className="pl-28 pr-16 h-full flex justify-between">
            <div className="pt-72">
                <p className="text-5xl font-bold mt-2">Contact</p>
                <div className="flex items-center justify-end">
                    <div className="w-8 h-[2px] bg-black mr-2"></div>
                    <span className="text-xl">
                        <span>Page</span>
                        <span>{` 0${currentPage.index}`}</span>
                    </span>
                </div>
            </div>
            
            <div className="relative pt-10 gap-x-10 gap-y-6  grid-cols-2 grid">
                {medias.map(media => {
                    return (
                        <div className="w-[305px] group h-40 relative transition-all ease-out hover:scale-110 duration-500">
                            <div className="absolute pt-6 px-5 bg-[#d8d2cb] group group-hover:bg-black group-hover:text-white top-0 left-0 w-72 h-36 z-10">
                                <div className="flex items-center text-2xl">
                                    <div className="mr-4">
                                        {media.icon}
                                    </div>
                                    <p className="">{media.name}</p>
                                </div>
                                <p className="mt-1 mb-2">
                                    <em>{media.username}</em>
                                </p>
                                <button className="w-[70px] h-8 px-2 text-white group-hover:bg-[#d8d2cb] group-hover:text-black hover:bg-[#d8d2cb] rounded bg-black flex justify-between items-center">
                                    <span>Visit</span>
                                    <span className="text-sm font font-bold"><FaArrowRight /></span>
                                </button>
                            </div>
                            <div className="absolute w-72 h-36 bottom-0 right-0 border-4 group-hover:bg-[#d8d2cb] border-black">
                
                            </div>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Contact