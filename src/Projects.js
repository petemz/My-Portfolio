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

    ]
    return (
        <div className="px-8 mr-40 overflow-hidden w-full flex justify-center relative bg-[#eee] pb-16">
            <div className="z-20 absolute h-24 bg-inherit w-full ">
                <p className="text-5xl font-bold mt-2">Projects</p>
                <div className="flex items-center ">
                    <div className="w-8 h-[2px] bg-black mr-2"></div>
                    <span className="text-xl">
                        <span>Page</span>
                        <span>{` 0${currentPage.index}`}</span>
                    </span>
                </div>
            </div>

            <div className="relative pt-28 gap-x-10 gap-y-6 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-4 grid">
                {projects.map(project => {
                    return(
                        <div className=" h-60 group sm:w-56 w-[300px] p-7 transition-all ease-out relative duration-700 hover:rounded-b-none rounded-md bg-[#d8d2cb]">
                            <h2 className="text-2xl font-semibold mb-5">{project.name}</h2>
                            <p className="mb-3 font-semiold">{project.languages.toUpperCase()}</p>
                            <p className="mb-8">{project.description}</p>

                            <a href={project.link} target="blank">
                                <button className="flex text-sm px-1  group-hover:scale-110 ease-in transition-all duration-300 items-center">
                                    <div className="mr-3 rotate-45">
                                        <FaArrowUp />
                                    </div>
                                    <span>View</span>
                                </button>
                            </a>

                            {/*<!-- Custom CSS to animate the border on hover -->*/}
                            <div class="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all ease-out duration-300 group-hover:w-full"></div>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Projects