import { Link } from "react-router-dom"
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

function DefaultLayout({ children }) {
    const [nav_bar_open, set_nav_bar_open] = useState(false)
    return (
        <div className="no-scrollbar w-screen h-screen flex flex-col overflow-x-hidden select-none text-text">

            <header className="fixed flex top-4 w-full justify-center h-16 pl-2">
                <div className="bg-background border-2 border-primary rounded-4xl w-fit flex items-center justify-between md:gap-48 sm:px-4 lg:px-4 z-50">
                    <Link to={'/'} className="flex h-full items-center gap-4 shrink-0">
                        <img src="/icon.png" alt="Julio Souza icon image" className="max-h-11/12 h-11/12"/>
                        <h3 className="text-3xl font-bold hidden sm:block">Júlio Souza</h3>    
                    </Link>

                    <div className="font-bold h-full *:flex *:items-center *:gap-1 *:px-4 *:hover:underline decoration-2 *:transition-all *:duration-300 *:hover:bg-[#205f8a8a] text-nowrap *:hover:*:scale-105 **:transition-all *:h-full hidden sm:flex">
                        <Link to={'/'}><span>HOME</span></Link>
                        <Link to={'/about'}><span>ABOUT</span></Link>
                        <Link to={'/projects'}><span>PROJECTS</span></Link>
                        <Link to={'/contact'}><span>CONTACT ME</span></Link>
                    </div>
                    
                    <button className="h-full aspect-square flex justify-end items-center sm:hidden" onClick={() => set_nav_bar_open(!nav_bar_open)}>
                        <IoMenu size={56}/>
                    </button>

                </div>

                <div className={`absolute flex w-full max-w-full flex-col *:min-h-12 text-xl font-bold *:bg-gray-50 *:hover:bg-gray-300 top-14 *:active:bg-gray-400 *:active:duration-150 *:transition-all *:duration-300 *:items-center *:justify-center *:flex *:border-b-2 *:border-black sm:min-h-0 sm:max-h-0 ${nav_bar_open? 'min-h-48 max-h-48' : 'min-h-0 max-h-0'} transition-all duration-500 overflow-hidden z-40`}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/projects'}>Projects</Link>
                    <Link to={'/contact'}>Contact me</Link>
                </div>
            </header>
            {children}





            {/* <footer className="relative py-24 min-h-96 px-16 w-full bg-[#010a48]">
                <nav className="flex flex-row justify-around">

                    <div className="flex flex-col gap-4 h-8 bg-[#010a48] *:flex *:gap-1 *:items-center *:text-text-muted">
                        <span className="text-lg font-bold text-text-muted">CONTATO:</span>
                        <a target="_blank" rel="noopener noreferrer" className="font-semibold">
                            Creci:
                            <span className=" select-all">138646-F</span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/maps/search/Rua%20J%C3%BAlio%20P%C3%ADres%20Barbosa%2C%20%2005%20Pq%20Planalto-%20SP%2C%2013460-000%2C%20Brasil/@-22.7152,-47.3691,17z?hl=pt-BR">
                            <FaMapLocation></FaMapLocation>
                            Plantão local
                        </a>
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
                            <span className="text-lg font-bold text-text-muted">LINKS:</span>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/Sobre'}>Sobre nós</Link></li>
                            <li><Link to={'/Anunciar'}>Anunciar</Link></li>
                            <li><Link to={'/Contato'}>Contato</Link></li>
                        </ul>
                    </div>

                </nav>
                <div>
                    <span className="absolute right-8 bottom-8 mr-4 small-text">@ 2025 Developed by Júlio Alves de Souza.</span>
                    
                </div>
            </footer> */}
        </div>
    )
}

export default DefaultLayout