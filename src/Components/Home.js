import handwave from "../Assets/handwave.gif"
import { Context } from "../Context"
import { useContext } from "react"
import avatar from "../Assets/avatar.jpeg"
import { Link } from "react-router-dom"

const Home = () => {
    const {setCurrentPage} = useContext(Context)

    return (
        <div className="overflow-y-hidden h-full px-28\ xl:pl-12 xl:pr-10 lg:px-10 flex justify-between xl:items-center lg:pb-16 lg:justify-center">
            <div className="flex flex-col items-center justify-center lg:pt-12">
                <div className="mb-10">
                    <p className="text-center">
                        <span className="text-3xl">Hi there {(<img className="w-9 inline" src={handwave} alt={'hand wave'}/>)}, I'm</span><br/>
                        <span className="text-[60px] xs:text-[50px] leading-[60px] font-bold inline-block mt-2 xl:mb-4 xs:my-8">Peter Emmies,</span><br/>
                        <span className="text-4xl xs:text-3xl">a Web Developer.</span>
                    </p>
                </div>

                <Link 
                    onClick={() => setCurrentPage({page:'contact', index: 5})} 
                    to={'/contact'} 
                >
                    <button className="text-lg w-48 transition-shadow duration-500 ease-in-out h-14 hover:shadow-none shadow-[0.5rem_0.5rem_#ccc] hover:bg-[#ccc] bg-emerald-800 hover:text-emerald-800 text-white">
                        <span>Contact me!</span>
                    </button>
                </Link>
            </div>

            <div className="-xl:pt-14 lg:hidden">
                <div className="w-[430px] xl:w-[350px] xl:h-[350px] h-[430px] relative">
                    <div className="absolute top-0 left-0 w-96 h-96 xl:w-80 xl:h-80 z-10 border border-emerald-800 ">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="absolute w-96 h-96 xl:w-80 xl:h-80 bottom-0 right-0 border-4 border-emerald-800">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home