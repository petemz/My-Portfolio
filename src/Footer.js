import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className=" fixed  z-50 bg-[#eeeeee] w-full bottom-0 h-16 px-8 flex items-center justify-between">
            <div className=" text-sm font-medium ">
                <span>Peter Emmies @ </span>
                <span>{currentYear}</span>
            </div>

            <nav className="text-xl text-[#5f5f5f]">
                <ul className="flex">
                    <a href="mailto:peteremmies7@gmail.com" target="blank">
                        <li className="ml-4">
                            <FaEnvelope/>
                        </li>
                    </a>
                    <a href="https://github.com/petemz" target="blank">
                        <li className="ml-4">
                            <FaGithub />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/peter-emmies" target="blank">
                        <li className="ml-4">
                            <FaLinkedin />
                        </li>
                    </a>
                    <a href="https://twitter.com/petemz_" target="blank">
                        <li className="ml-4">
                            <FaTwitter />
                        </li>
                    </a>
                    <a href="https://www.instagram.com/petemz" target="blank">
                        <li className="ml-4">
                            <FaInstagram />
                        </li>
                    </a>
                </ul>
            </nav>
        </footer>
      )
}

export default Footer