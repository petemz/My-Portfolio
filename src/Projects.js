import { useContext } from "react"
import {Context} from "./Context"
import { FaArrowUp } from "react-icons/fa"

const Projects = () => {
    const { currentPage } = useContext(Context)

    const projects = [
        {name:"Form Templates", languages:"React + Tailwind CSS", description:"A Form Template Search Interface with multiple features.", link:"https://form-templates-petemz.netlify.app/"},
        {name:"ImageHive", languages:"React + Tailwind CSS", description:"Beautiful image gallery powered by the Unsplash API", link:"https://model-unsplash.netlify.app/"},
        {name:"PharmAssist", languages:"React + Tailwind CSS", description:"Manage medication with ease - Prescription app", link:"https://pharamacy.netlify.app/"},
        {name:"PixSale", languages:"React + Tailwind CSS", description:"Browse and buy amazing photos online.", link:"https://petemz.github.io/bejamas/"},
        {name:"Naijchat", languages:"ReactJS, NodeJS, MongoDB, Socket IO", description:"A microblogging platform.", link:"https://naij.netlify.app"},
    
    ]
    return (
        <div className="bg-inherit md:px-0 px-6 h-max w-full  relative">
            <div className="fixed py-1 z-10 w-full bg-[#eee] flex items-center">
                <div className="w-max">
                    <p className="text-5xl md:text-4xl font-bold mt-2">Projects</p>
                    <div className="flex items-center">
                        <div className="w-full h-[2px] mr-2 bg-black"></div>
                        <p className="text-xl md:text-lg flex">
                            <span className="mr-1">Page</span>
                            <span className="font-semibold">{` 0${currentPage.index}`}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full pt-28 md:gap-5 gap-x-10 gap-y-6 sm:grid-cols-1 cpro:grid-cols-1 cpro:bg-green-800 lg:grid-cols-2 m-auto lg:w-max grid-cols-3 grid">
                {projects.map(project => {
                    return(
                        <div key={project.name} className=" h-60 group sm:w-[320px] w-[320px] xl:w-[305px] p-7 transition-all ease-out relative duration-700 hover:rounded-b-none rounded-md bg-[#d8d2cb]">
                            <h2 className="text-2xl font-semibold mb-5">{project.name}</h2>
                            <p className="mb-3 font-semiold">{project.languages.toUpperCase()}</p>
                            <p className="mb-8">{project.description}</p>

                            <a className="block w-max" href={project.link} target="blank">
                                <button className="flex text-sm px-1 group-hover:scale-110 ease-in transition-all duration-300 items-center">
                                    <div className="mr-2 rotate-45">
                                        <FaArrowUp />
                                    </div>
                                    <span>View</span>
                                </button>
                            </a>
                            {/*<!-- Custom CSS to animate the border on hover -->*/}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all ease-out duration-300 group-hover:w-full"></div>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Projects