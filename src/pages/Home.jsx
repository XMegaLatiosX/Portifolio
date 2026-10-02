import { FaArrowDown, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import DefaultLayout from "../components/DefaultLayout"
import { GoMail } from "react-icons/go"
import { Link } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md"
import { useRef } from "react"

function Home() {
    const about_me_section = useRef(null)
    return (
        <DefaultLayout>
            <section className="min-h-screen flex items-center">
                <div className="flex flex-col md:flex-row px-4 gap-8 pt-16">
                    <h1 className="flex flex-col w-full text-center font-extrabold text-title text-6xl md:text-8xl">
                        
                        <span>YOUR</span>
                        <span className="text-background [-webkit-text-stroke-color:var(--color-primary)] [-webkit-text-stroke-width:3px]">DIGITAL</span>
                        <span>SPACE</span>
                    </h1>

                    <div className="flex flex-col font-semibold text-xl gap-2">
                        <p>Get clients and sell your products from anywhere in the world with your own website!</p>
                        <p>I develop the tools for you to publish, sell and manage your business online</p>
                        <div className="flex gap-8 mt-8 *:border-primary 
                         *:border-2 *:px-2 *:py-1 *:rounded-lg *:hover:scale-115 *:transition-all *:duration-250 *:flex *:items-center *:gap-1">
                            <Link className="bg-primary" type="button">Contact me <MdArrowOutward size={24}/></Link>
                            <Link type="button">See my projects</Link>
                        </div>
                    </div>

                </div>
            </section>



            <div className="relative md:-top-10 h-16 md:h-auto md:pr-8 flex bg-gray-200 md:bg-transparent justify-end items-center md:gap-8 w-fit self-end text-lg font-semibold
            *:flex *:items-center *:gap-2 *:hover:underline *:hover:scale-110 *:hover:cursor-pointer *:transition-all *:duration-150">
                <a><GoMail size={24}/><span>Email</span></a>
                <a><FaInstagram size={24}/><span>Instagram</span></a>
                <a><FaWhatsapp size={24}/><span>+55 (19) 97123-0319</span></a>
                <a><FaGithub size={24}/><span>GitHub</span></a>
            </div>



            <button type="button" onClick={() => {about_me_section.current.scrollIntoView({ behavior: 'smooth' })}} className={`fixed hidden lg:flex flex-col self-center justify-center items-center bottom-4 transition-all duration-500 ${window.scrollY > 50? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 cursor-pointer'}`}>
                <span>About me!</span>
                <FaArrowDown size={32}/>
            </button>



            <section ref={about_me_section} className="mt-100 bg-white">

            </section>
        </DefaultLayout>
    )
}

export default Home