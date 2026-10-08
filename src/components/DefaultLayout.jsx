import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function DefaultLayout({ children }) {
    const [nav_bar_open, set_nav_bar_open] = useState(false)

    return (
        <div className="no-scrollbar w-screen h-screen flex flex-col overflow-x-hidden select-none text-text">

            <header className="fixed flex top-4 w-full justify-center h-12 md:h-14 px-2 z-50">
                <div className="bg-background/85 border-2 border-primary rounded-4xl w-full md:w-fit flex items-center justify-between md:gap-48 px-4 lg:px-4 z-50">
                    <Link to={'/#start'} className="flex h-full items-center gap-4 shrink-0">
                        <img src="/icon.png" alt="Julio Souza icon image" className="max-h-11/12 h-11/12"/>
                        <h3 className="text-3xl text-primary font-bold hidden sm:block">Júlio Souza</h3>    
                    </Link>

                    <div className="font-bold h-full *:flex *:items-center *:gap-1 *:px-4 *:hover:underline decoration-2 *:transition-all *:duration-300 *:hover:bg-[#205f8a8a] text-nowrap *:hover:*:scale-105 **:transition-all *:h-full hidden sm:flex">
                        <Link to={'/#start'}><span>HOME</span></Link>
                        <Link to={'/#about_me_section'}><span>ABOUT ME</span></Link>
                        <Link to={'/projects'}><span>PROJECTS</span></Link>
                        <Link to={'/contact'}><span>CONTACT ME</span></Link>
                    </div>
                    
                    <button className="h-full aspect-square flex justify-end items-center sm:hidden" onClick={() => set_nav_bar_open(!nav_bar_open)}>
                        <IoMenu size={56}/>
                    </button>

                </div>

                <div className={`absolute flex w-full max-w-full flex-col *:min-h-12 text-xl font-bold *:bg-black *:hover:bg-background top-14 *:active:duration-150 *:transition-all *:duration-300 *:items-center *:justify-center *:flex *:border-b-2 *:border-text-muted sm:min-h-0 sm:max-h-0 ${nav_bar_open? 'min-h-48 max-h-48' : 'min-h-0 max-h-0'} transition-all duration-500 overflow-hidden z-40`}>
                        <Link to={'/#start'}><span>HOME</span></Link>
                        <Link to={'/#about_me_section'}><span>ABOUT ME</span></Link>
                        <Link to={'/projects'}><span>PROJECTS</span></Link>
                        <Link to={'/contact'}><span>CONTACT ME</span></Link>
                </div>
            </header>
            {children}





            <hr className="text-text-muted" />
            <footer className="flex flex-col relative py-8 min-h-96 md:px-16 w-full font-semibold gap-8 text-text-muted">
                <div className="flex flex-col w-fit gap-2 items-center">
                    <div className="flex items-center gap-4">
                        <img className="aspect-square h-16 rounded-full" src="/icon.png" alt="Julio Souza icon image"/>
                        <h3 className="text-3xl text-primary font-bold hidden sm:block">Júlio Souza</h3>    
                    </div>
                    <span className="text-text">The dev your brand deserve.</span>
                </div>

                <nav className="flex flex-row justify-around">
                    <div className="flex flex-col gap-4 h-8 *:flex *:gap-1 *:items-center">
                        <span className="text-lg font-bold text-text">CONTATO:</span>
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5519981273464?text=Olá,%20vim%20pelo%20site%20HLS%20Imóveis!">
                            <FaWhatsapp></FaWhatsapp>
                            (19) 97123-0319
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/???/">
                            <FaInstagram ></FaInstagram >
                            ???
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-4">
                            <span className="text-lg font-bold text-text">LINKS:</span>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/Sobre'}>Sobre nós</Link></li>
                            <li><Link to={'/Anunciar'}>Anunciar</Link></li>
                            <li><Link to={'/Contato'}>Contato</Link></li>
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