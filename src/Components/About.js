import CredlyBadge from "./Icons"
import { Context } from "../Context"
import { useContext } from "react"
import reactCert from '../Assets/reactCert.png'

const About = () => {
    const {currentPage} = useContext(Context)
    const badges = [
        {id:"1568ba80-aa62-44d6-bb48-02fcefc409ed"},
        {id:"a0d994dd-5bcd-4773-8ee2-89aae28a7afe"},
        {id:"08a95129-c507-41cd-aa0a-51d35318800b"},
        {id:"9f495df8-7bb3-450b-9023-c965185b2b82"},
        {id:"b3db4ffd-6a28-4a88-8c9f-f87b307d083a"},
        {id:"5e49495c-1bd8-4834-8e12-d9be0d23c701"}
    ]

    return ( 
        <div className="bg-inherit md:pl-0 xl:pl-6 pl-40 2xl:pl-24 pb-2 flex justify-between h-full w-full relative">
            <div className="xl:fixed xl:py-1 xl:w-full bg-inherit flex items-center">
                <div className="w-max">
                    <p className="text-5xl md:text-4xl font-bold mt-2">About</p>
                    <div className="flex items-center pb-3">
                        <div className="w-full h-[2px] mr-2 bg-black"></div>
                        <p className="text-xl md:text-lg flex">
                            <span className="mr-1">Page</span>
                            <span className="font-semibold">{` 0${currentPage.index}`}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-4 xl:pt-28 w-[750px] xl:w-full h-full overflow-y-auto flex flex-col items-ce">
                <div className="mb-10">
                    <p className="text-lg">Hi! I'm <span className=" font-semibold">Peter Emmies</span>, a student of Computer Science at the University of Lagos. As a frontend web developer, I am dedicated to creating functional, interactive and sleek web applications that meet the needs of clients and users alike. With expertise in JavaScript, React.js, Vue.js, and other technologies.
                    <br/>I also have a strong understanding and knowledge of cybersecurity and networking principles. I am always eager to take on new challenges and push my skills to the next level.
                    In my free time, I love playing chess and listening to music.</p> 
                </div>

                <div className="w-2/3 m-auto mb-20">
                    <img src={reactCert} alt={'React Certiificate'}/>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-6">Badges</h2>

                    <div className="grid xs:grid-cols-2 grid-cols-3 m-auto w-full max-w-[800px]">
                        {badges.map(badge => {
                            return(
                                <CredlyBadge id={badge.id} key={badge.id}/>
                            )}
                        )}
                    </div>                    
                </div>

            </div>
        </div>
    )
}

export default About