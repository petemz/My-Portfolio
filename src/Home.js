import handwave from "./handwave.gif"
import avatar from "./avatar.jpeg"

const Home = () => {
    
    return (
        <div className=" pl-28 xl:pl-12 pr-28 xl:pr-10 flex justify-between">
          <div className="pt-36">
            <div className="mb-10">
              <p className="">
                <span className="text-3xl">Hi there {(<img className="w-9 inline" src={handwave} alt={'hand wave'}/>)}, I'm</span><br/>
                <span className="text-[60px] font-bold inline-block mt-2">Peter Emmies,</span><br/>
                <span className="text-4xl">a Web Developer.</span>
              </p>
            </div>

            <button className="text-lg w-48 transition-shadow duration-500 ease-in-out h-14 hover:shadow-none shadow-[0.5rem_0.5rem_#ccc] hover:bg-[#ccc] bg-emerald-800 hover:text-emerald-800 text-white">
              <span>Contact me!</span>
            </button>
          </div>

          <div className="pt-14">
            <div className="w-[430px] h-[430px] relative">
              <div className="absolute top-0 left-0 w-96 h-96 z-10 border border-emerald-800 ">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="absolute w-96 h-96 bottom-0 right-0 border-4 border-emerald-800">
  
              </div>
            </div>
          </div>
        </div>
      )
}

export default Home