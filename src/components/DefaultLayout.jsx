import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function DefaultLayout({ children }) {
    const [nav_bar_open, set_nav_bar_open] = useState(false)
    const [is_dark, set_is_dark] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved) return saved === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        if (is_dark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [is_dark])

    return (
        <div className="no-scrollbar w-screen h-screen flex flex-col overflow-x-hidden select-none text-text bg-background transition-colors duration-300">

            <header className="fixed flex top-4 w-full justify-center h-12 lg:h-14 px-2 z-50">
                <div className="bg-background/85 backdrop-blur-sm border-2 border-primary rounded-4xl w-full lg:w-fit flex items-center justify-between lg:gap-12 px-4 lg:px-4 z-50">
                    <Link to={'/#start'} className="flex h-full items-center gap-4 shrink-0">
                        <img src="/icon.png" alt="Julio Souza icon image" className="max-h-11/12 h-11/12 rounded-full"/>
                        <h3 className="text-xl text-primary font-bold hidden lg:block">Júlio Souza</h3>
                    </Link>

                    <div className="font-bold h-full *:flex *:items-center *:gap-1 *:px-4 *:hover:underline decoration-2 *:transition-all *:duration-300 *:hover:bg-primary/20 text-nowrap *:hover:*:scale-105 **:transition-all *:h-full hidden lg:flex items-center">
                        <Link to={'/#start'}><span>HOME</span></Link>
                        <Link to={'/#about_me_section'}><span>ABOUT ME</span></Link>
                        <Link to={'/projects'}><span>PROJECTS</span></Link>
                        <Link to={'/blog'}><span>BLOG</span></Link>
                        <Link to={'/contact'}><span>CONTACT ME</span></Link>

                        <button onClick={() => set_is_dark(!is_dark)} className="p-2 ml-2 hover:bg-primary/20 rounded-full transition-all cursor-pointer">
                            {is_dark ? <IoSunny size={20} /> : <IoMoon size={20} />}
                        </button>
                    </div>

                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={() => set_is_dark(!is_dark)} className="p-2 hover:bg-primary/20 rounded-full transition-all cursor-pointer">
                            {is_dark ? <IoSunny size={24} /> : <IoMoon size={24} />}
                        </button>
                        <button className="h-full aspect-square flex justify-end items-center" onClick={() => set_nav_bar_open(!nav_bar_open)}>
                            <IoMenu size={40}/>
                        </button>
                    </div>

                </div>

                <div className={`absolute flex w-full max-w-full flex-col *:min-h-12 text-xl font-bold bg-background/95 backdrop-blur-md top-14 *:active:duration-150 *:transition-all *:duration-300 *:items-center *:justify-center *:flex *:border-b-2 *:border-text-muted lg:min-h-0 lg:max-h-0 ${nav_bar_open? 'min-h-60 max-h-60' : 'min-h-0 max-h-0'} transition-all duration-500 overflow-hidden z-40`}>
                        <Link to={'/#start'}><span>HOME</span></Link>
                        <Link to={'/#about_me_section'}><span>ABOUT ME</span></Link>
                        <Link to={'/projects'}><span>PROJECTS</span></Link>
                        <Link to={'/blog'}><span>BLOG</span></Link>
                        <Link to={'/contact'}><span>CONTACT ME</span></Link>
                </div>
            </header>
            {children}





            <hr className="text-text-muted opacity-30" />
            <footer className="flex flex-col relative py-8 min-h-96 lg:px-16 w-full font-semibold gap-8 text-text-muted bg-background">
                <div className="flex flex-col md:w-fit md:pl-4 gap-2 items-center">
                    <div className="flex items-center gap-4">
                        <img className="aspect-square h-16 rounded-full" src="/icon.png" alt="Julio Souza icon image"/>
                        <h3 className="text-3xl text-primary font-bold hidden lg:block">Júlio Souza</h3>
                    </div>
                    <span className="text-text">The dev your brand deserve.</span>
                </div>

                <nav className="flex flex-row justify-around">
                    <div className="flex flex-col gap-4 h-8 *:flex *:gap-1 *:items-center">
                        <span className="text-lg font-bold text-text">CONTACT:</span>
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5519971230319?text=Hello,%20I'm%20interested%20in%20a%20website!">
                            <FaWhatsapp></FaWhatsapp>
                            (19) 97123-0319
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/js.webdev/">
                            <FaInstagram ></FaInstagram >
                            instagram
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-4">
                            <span className="text-lg font-bold text-text">LINKS:</span>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/#about_me_section'}>About me</Link></li>
                            <li><Link to={'/projects'}>Projects</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </nav>

                <div className="w-full flex items-center justify-center pt-8 pb-4">
                    <span className="font-normal">© 2026 Júlio Souza | All rights reserved.</span>
                </div>
            </footer>
        </div>
    )
}

export default DefaultLayout