import { useContext } from "react"
import {Context} from "../Context"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
    const { currentPage } = useContext(Context)

    const projects = [
        {name:"Ignis", languages:"React + Tailwind CSS", description:"An e-commerce website for a fashion brand", link:"https://ignis-petemz.vercel.app", img: require("../Assets/projectsImage/ignis.png")},
        {name:"Yoshiki Art Clone", languages:"React + Tailwind CSS", description:"A clone of the Yoshiki Okamura Art website", link:"https://yoshikiokamura-clone.vercel.app", img: require("../Assets/projectsImage/yoshiki-okamura.png")},
        {name:"ImageHive", languages:"React + Tailwind CSS", description:"Beautiful image gallery powered by the Unsplash API", link:"https://model-unsplash.netlify.app", img: require("../Assets/projectsImage/image-hive.png")},
        {name:"Canal Market Clone", languages:"ReactJS, Tailwind CSS, GSAP", description:"A clone of the Canal Market website", link:"https://canal-market-clone.vercel.app", img: require("../Assets/projectsImage/canal-market.png")},
        {name:"PharmAssist", languages:"React + Tailwind CSS", description:"Manage medication with ease - Prescription app", link:"https://pharamacy.netlify.app", img: require("../Assets/projectsImage/pharmacy.png")},
        {name:"Vivasia", languages:"VueJS + CSS", description:"Unveiling the beauty and diversity of Asia.", link:"https://vivasia.netlify.app", img: require("../Assets/projectsImage/vivasia.png")},
        {name:"Form Templates", languages:"React + Tailwind CSS", description:"A Form Template Search Interface with multiple features.", link:"https://form-templates-petemz.netlify.app", img: require("../Assets/projectsImage/form-temps.png")},
        {name:"Naijchat", languages:"ReactJS, NodeJS, MongoDB, Socket IO", description:"A microblogging platform.", link:"https://naij.netlify.app", img: {}},
        {name:"PixSale", languages:"React + Tailwind CSS", description:"Browse and buy amazing photos online.", link:"https://petemz.github.io/bejamas", img: {}}
    ]
    
    return (
        <div className="bg-inherit md:px-0 px-6 h-max w-full  relative">
            <div /*className="fixed py-1 z-10 w-full bg-inherit flex items-center"*/ className="">
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

            <div className="w-full m-auto px-[8%] flex flex-col items-center" /*className="w-full pt-28 md:gap-5 gap-x-10 gap-y-6 sm:grid-cols-1 cpro:grid-cols-1 cpro:bg-green-800 lg:grid-cols-2 m-auto lg:w-max grid-cols-3 grid"*/>
                {projects.map(project => {
                    /*return(
                        <div key={project.name} className=" h-60 group sm:w-[320px] w-[320px] xl:w-[305px] p-7 transition-all ease-out relative duration-700 hover:rounded-b-none rounded-md bg-[#d8d2cb]">
                            <h2 className="text-2xl font-semibold mb-5">{project.name}</h2>
                            <p className="mb-3 font-semiold">{project.languages.toUpperCase()}</p>
                            <p className="mb-8">{project.description}</p>

                            <a className="block w-max" href={project.link} target="_blank" rel="noopener noreferrer">
                                <button className="flex text-sm px-1 group-hover:scale-110 ease-in transition-all duration-300 items-center">
                                    <div className="mr-2 rotate-45">
                                        <FaArrowUp />
                                    </div>
                                    <span>View</span>
                                </button>
                            </a>
                            {/*<!-- Custom CSS to animate the border on hover -->}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all ease-out duration-300 group-hover:w-full"></div>
                        </div>
                    )*/
                    return (
                        <div className="relative w-full max-w-[800px] -lg:h-[530px] mt-10 mb-24 p-12 py-14 xs:p-10 grid -lg:grid-cols-[40px_1fr_250px] gap-x-10 rounded-[80px] md:rounded-[60px] xs:rounded-[50px] bg-[#d8d2cb] border border-emerald-800" key={project.name}>
                            <div className="lg:hidden my-auto [word-spacing:5px] text-emerald-800 font-semibold w-max rotate-180 flex justify-center [writing-mode:vertical-rl]">
                                <span>{project.languages}</span>
                            </div> 

                            <div className="h-full mx-auto w-full lg:max-w-[300px]">
                                {project.img && <img className="object-cover rounded-[40px] h-full" src={project.img} alt="" />}
                            </div>

                            <div className="flex flex-col justify-center lg:mt-6 text-lg">
                                <h2 className="text-5xl lg:text-4xl -lg:mb-14 mb-2 font-semibold break-words">{project.name}</h2>

                                <p className="-lg:mb-20 mb-2 text-emerald-800"><a href={project.link} target="_blank" rel="noopener noreferrer">VISIT THE WEBSITE</a></p>

                                <FaGithub className="-md:text-3xl text-2xl"/>
                            </div>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Projects