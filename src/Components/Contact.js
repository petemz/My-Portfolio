import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import {Context} from "../Context"
import { useContext } from "react"

const Contact = () => {
    const {currentPage} = useContext(Context)

    const medias = [
        {name: "Email", username: "peteremmies7@gmail.com", link:"mailto:peteremmies7@gmail.com", icon: <FaEnvelope />},
        {name: "Github", username: "petemz", link:"https://github.com/petemz", icon: <FaGithub />}, 
        {name: "LinkedIn", username: "Peter Emmies", link:"https://www.linkedin.com/in/peter-emmies", icon: <FaLinkedin />},
        //{name: "Instagram", username: "petemz", link:"https://www.instagram.com/petemz", icon:<FaInstagram />},
        {name: "Twitter", username: "petemz_", link:"https://twitter.com/petemz_", icon:<FaTwitter />}, 
    ]

    return (
        <div className="bg-inherit sm:pl-0 md:pl-4 xl:pl-6 pl-32 2xl:pl-24 pr-16 md:pr-4 flex justify-between h-full w-full relative">
            <div className="xl:fixed xl:py-1 xl:w-full bg-inherit z-20 flex items-center">
                <div className="w-max">
                    <p className="text-5xl md:text-4xl font-bold mt-2">Contact</p>
                    <div className="flex items-center">
                        <div className="w-full h-[2px] mr-2 bg-black"></div>
                        <p className="text-xl md:text-lg flex">
                            <span className="mr-1">Page</span>
                            <span className="font-semibold">{` 0${currentPage.index}`}</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="relative pb-6 xl:px-10 md:px-0 sm:pt-28 xl:w-full sm:w-max h-max my-auto sm:mx-auto gap-x-10 gap-y-16 sm:grid-cols-1 grid-cols-2 grid">
                {medias.map(media => {
                    return (
                        <div className="w-[305px] md:w-72 sm:w-[305px] sm:h-40 md:h-36 group h-40 relative transition-all ease-out hover:scale-110 duration-500" key={media.name}>
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
                                <a href={media.link} target="blank" className="w-max block group-hover:animate-wiggle">
                                    <button className="w-[70px] h-8 px-2 text-white group-hover:bg-[#d8d2cb] group-hover:text-black hover:bg-[#d8d2cb] rounded bg-black flex justify-between items-center">
                                        <span>Visit</span>
                                        <span className="text-sm font font-bold"><FaArrowRight /></span>
                                    </button>
                                </a>
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