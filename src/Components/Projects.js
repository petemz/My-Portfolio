import { useContext } from "react"
import {Context} from "../Context"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
    const { currentPage, isDarkMode } = useContext(Context)

    const projects = [
        {name:"Ignis", languages:"React + Tailwind CSS", description:"An e-commerce website for a fashion brand", link:"https://ignis-petemz.vercel.app", img: require("../Assets/projectsImage/ignis.png")},
        {name:"BudgetBuddy", languages:"Vue + Tailwind CSS", description:"A bugeting app set budgets and to monitor finances", link:"https://try-budget-buddy.netlify.app", img: require("../Assets/projectsImage/budgetBuddy.png")},
        {name:"Yoshiki Art Clone", languages:"React + Tailwind CSS", description:"A clone of the Yoshiki Okamura Art website", link:"https://yoshikiokamura-clone.vercel.app", img: require("../Assets/projectsImage/yoshiki-okamura.png")},
        {name:"ImageHive", languages:"React + Tailwind CSS", description:"A beautiful image gallery powered by the Unsplash API", link:"https://model-unsplash.netlify.app", img: require("../Assets/projectsImage/image-hive.png")},
        {name:"Canal Market Clone", languages:"ReactJS, Tailwind CSS, GSAP", description:"A clone of the Canal Market website", link:"https://canal-market-clone.vercel.app", img: require("../Assets/projectsImage/canal-market.png")},
        {name:"PharmAssist", languages:"React + Tailwind CSS", description:"Manage medication with ease - Prescription app", link:"https://pharamacy.netlify.app", img: require("../Assets/projectsImage/pharmacy.png")},
        {name:"Vivasia", languages:"VueJS + CSS", description:"Unveiling the beauty and diversity of Asia.", link:"https://vivasia.netlify.app", img: require("../Assets/projectsImage/vivasia.png")},
        {name:"Form Templates", languages:"React + Tailwind CSS", description:"A Form Template Search Interface with multiple features.", link:"https://form-templates-petemz.netlify.app", img: require("../Assets/projectsImage/form-temps.png")},
        {name:"Naijchat", languages:"ReactJS, NodeJS, MongoDB, Socket IO", description:"A microblogging platform.", link:"https://naij.netlify.app", img: null},
        {name:"PixSale", languages:"React + Tailwind CSS", description:"Browse and buy amazing photos online.", link:"https://petemz.github.io/bejamas", img: null}
    ]
    
    return (
        <div className="bg-inherit md:px-0 px-6 h-max w-full relative">
            <div>
                <div className="w-max">
                    <p className="text-5xl md:text-4xl font-bold mt-2">Projects</p>
                    <div className="flex items-center">
                        <div className={`w-full h-[2px] mr-2 ${isDarkMode ? 'bg-[#eee]' : 'bg-black'}`}></div>
                        <p className="text-xl md:text-lg flex">
                            <span className="mr-1">Page</span>
                            <span className="font-semibold">{` 0${currentPage.index}`}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full m-auto px-[8%] flex flex-col items-center">
                {projects.map(project => {
                    return (
                        <div className={`relative w-full max-w-[800px] -lg:h-[530px] mt-10 mb-24 p-12 py-14 xs:p-10 grid -lg:grid-cols-[40px_1fr_250px] gap-x-10 rounded-[80px] md:rounded-[60px] xs:rounded-[50px] ${isDarkMode ? 'bg-black' : 'bg-[#d8d2cb]'} border border-emerald-800`} key={project.name}>
                            <div className="lg:hidden my-auto [word-spacing:5px] text-emerald-800 font-semibold w-max rotate-180 flex justify-center [writing-mode:vertical-rl]">
                                <span>{project.languages}</span>
                            </div> 

                            <div className="-lg:h-full mx-auto w-full lg:max-w-[300px] block overflow-hidden rounded-[40px]">
                                {project.img ? 
                                    <img className="object-cover h-full" src={project.img} alt="" />
                                :
                                    <div className="w-full h-full bg-[#C2B9AE]"></div>
                                }

                            </div>

                            <div className="flex flex-col justify-center lg:mt-6">
                                <h2 className="text-5xl lg:text-4xl -lg:mb-14 mb-2 font-semibold break-words">{project.name}</h2>

                                <p>{project.description}</p>

                                <p className="-lg:mb-20 mt-6 mb-2 text-lg hover:underline text-emerald-800"><a href={project.link} target="_blank" rel="noopener noreferrer">VISIT THE WEBSITE</a></p>

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
