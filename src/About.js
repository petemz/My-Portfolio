import badges from "./Icons"
import {Context} from "./Context"
import { useContext } from "react"

const About = () => {
    const {currentPage} = useContext(Context)

    return ( 
        <div className="px-8 mr-40 overflow-hidden w-full flex justify-between relative bg-[#eee] pb-16">
            <div className="pt-56">
                <p className="text-5xl font-bold mt-2">About</p>
                <div className="flex items-center justify-center">
                    <div className="w-8 h-[2px] bg-black mr-2"></div>
                    <span className="text-xl">
                        <span>Page</span>
                        <span>{` 0${currentPage.index}`}</span>
                    </span>
                </div>
            </div>

            <div className="pt-20 w-[700px] flex flex-col justify-center">
                <div>
                    <p>Hi, I'm a frontend engineer who is passionate about creating interactive, responsive and optimized web applications. I've a good understanding of the software development lifecycle. My skills include Javascript,Typescript, Reactjs, React nataive, Nextjs, Nuxtjs, Vuejs, Nodejs,Graphql, css, scss,Tailwind css Html,Git, Github, Gitlab. I'm presently exploring Golang for server-side development</p> 
                </div>

                <div className="grid grid-cols-4 gap-5">
                    {badges.map((item, index) => {
                        return(
                            <div key={index} className="border-emerald-800 bg-[#d8d2cb] border w-max">
                                {item.badge}
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default About