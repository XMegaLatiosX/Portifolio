import { FaArrowDown, FaArrowRight, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import DefaultLayout from "../components/DefaultLayout"
import { GoMail } from "react-icons/go"
import { Link } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md"
import { useEffect, useRef, useState } from "react"
import ContactForm from "../components/ContactForm"

import project_data from "../assets/projects/project_data.json"

import css_icon from "../assets/tools icons/css3.png"
import html_icon from "../assets/tools icons/html5.png"
import react_icon from "../assets/tools icons/react.png"
import tailwind_icon from "../assets/tools icons/tailwind.png"
import cloudflare_icon from "../assets/tools icons/cloudflare.png"
import github_icon from "../assets/tools icons/github.png"
import git_icon from "../assets/tools icons/git.png"
import supabase_icon from "../assets/tools icons/supabase.png"
import ProjectCard from "../components/ProjectCard"

import mobile_hls_imoveis_screenshot from "../assets/images/screenshots/mobile-hls-imoveis.png"
import mobile_angrybreads_screenshot from "../assets/images/screenshots/mobile-angrybreads.png"
import mobile_xmegalatiosx_screenshot from "../assets/images/screenshots/mobile-xmegalatiosx.png"
import desktop_hls_imoveis_screenshot from "../assets/images/screenshots/desktop-hls-imoveis.png"
import desktop_angrybreads_screenshot from "../assets/images/screenshots/desktop-angrybreads.png"
import desktop_xmegalatiosx_screenshot from "../assets/images/screenshots/desktop-xmegalatiosx.png"

function SkillDisplay({name, icon}) {
    return (
        <div className="flex gap-3 p-1 px-3 rounded-4xl h-12 min-w-48 border-primary border  text-lg justify-center items-center font-semibold shadow-[0_0_5px_rgb(0,0,0,0.12)] shadow-primary">
            <img className="h-5/6" src={icon} alt={name + ' logo'} />
            <span>{name}</span>
        </div>
    )
}

function Home() {
    const about_me_section = useRef(null)
    const projects_section = useRef(null)
    
    // const [is_on_top, set_is_on_top] = useState(true);


    useEffect(() => {
        const checkScroll = () => {
            set_is_on_top(window.scrollY < 20);
        };

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <DefaultLayout>
            <div className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-16 overflow-hidden">
            
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center z-10">
                
                <div className="flex flex-col justify-center text-left">
                    
                    <h1 className="flex flex-col w-full font-extrabold text-title text-5xl md:text-6xl gap-2">
                        
                        <span>YOUR</span>
                        <span className="text-transparent [-webkit-text-stroke-color:var(--color-primary)] [-webkit-text-stroke-width:2px]">DIGITAL</span>
                        <span>SPACE</span>
                    </h1>
                    
                </div>

                <div className="relative w-full h-100 flex items-center justify-center perspective-distant">
                
                <div className="absolute rotate-y-12 -translate-x-12 bg-primary border-4 border-primary aspect-video h-55 md:h-65 rounded-xl shadow-2xl transition-transform duration-500 hover:rotate-y-6">
                    <div className="w-full h-full bg-neutral-900 rounded-lg flex flex-row flex-nowrap overflow-hidden">
                    <img src={desktop_angrybreads_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" alt="Laptop 1" />
                    <img src={desktop_xmegalatiosx_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" alt="Laptop 2" />
                    <img src={desktop_hls_imoveis_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" alt="Laptop 3" />
                    <img src={desktop_angrybreads_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" alt="Laptop 1 Loop" />
                    </div>
                </div>

                <div className="absolute -rotate-y-12 translate-x-16 translate-y-8 bg-primary border-4 border-primary aspect-9/17 h-70 md:h-85 rounded-2xl shadow-2xl z-20 transition-transform duration-500 hover:-rotate-y-6">
                    <div className="w-full h-full bg-neutral-900 rounded-xl flex flex-col flex-nowrap overflow-hidden">
                    <img src={mobile_xmegalatiosx_screenshot} className="w-full h-full min-h-full object-cover shrink-0 animate-scroll-v " alt="Mobile 1" />
                    <img src={mobile_hls_imoveis_screenshot} className="w-full h-full min-h-full object-cover shrink-0 animate-scroll-v  " alt="Mobile 2" />
                    <img src={mobile_angrybreads_screenshot} className="w-full h-full min-h-full object-cover shrink-0 animate-scroll-v  " alt="Mobile 3" />
                    <img src={mobile_xmegalatiosx_screenshot} className="w-full h-full min-h-full object-cover shrink-0 animate-scroll-v " alt="Mobile 1 Loop" />
                    </div>
                </div>

                </div>

                <div className="flex flex-col justify-center space-y-6 text-left lg:pl-4">
                <p className="text-text font-semibold text-lg leading-relaxed max-w-sm">
                    Get clients and sell your products from anywhere in the world with your own website!
                </p>
                <p className="text-text-muted font-semibold text-base leading-relaxed max-w-sm">
                    I develop the tools for you to publish, sell and manage your business online.
                </p>
                
                {/* Botões */}
                <div className="flex flex-wrap gap-4 pt-2">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all">
                    Contact me <MdArrowOutward size={24}/>
                    </button>
                    <button className="border border-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary hover:bg-opacity-10 transition-all">
                    See my projects
                    </button>
                </div>
                </div>

            </div>

      {/* ELEMENTOS DECORATIVOS / OUTROS DESENHOS */}
      {/* Se você quiser colocar formas abstratas ou círculos de luz (blur) ao fundo, coloque-os aqui com -z-10 */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
    </div>

            {/* <div className="absolute w-full min-w-full h-screen min-h-screen flex -z-10">
                <div className="relative w-full h-full perspective-[1000px] *:opacity-55">
                    
                    <div className="rotate-y-25 absolute flex items-center justify-center bg-primary border-primary aspect-9/17 h-2/4 self-center translate-x-[50vw] translate-y-[45vh] rounded-2xl">
                        <div className="w-11/12 bg-black h-11/12 rounded-lg flex flex-col flex-nowrap overflow-hidden *:w-full *:min-h-full *:shrink-0 *:object-cover *:animate-scroll-v">
                            <img className="animate-scroll-v" src={mobile_xmegalatiosx_screenshot} />
                            <img className="animate-scroll-v" src={mobile_hls_imoveis_screenshot} />
                            <img className="animate-scroll-v" src={mobile_angrybreads_screenshot} />
                            <img className="animate-scroll-v" src={mobile_xmegalatiosx_screenshot} />
                        </div>
                    </div>

                    <div className="-rotate-y-45 -rotate-x-10 absolute flex items-center justify-center bg-primary border-primary aspect-video h-2/4 self-center translate-x-[15vw] translate-y-[45vh] rounded-xl">
                        <div className="w-11/12 bg-black h-11/12 rounded-md flex flex-row flex-nowrap overflow-hidden">
                            <img src={desktop_angrybreads_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h"  />
                            <img src={desktop_xmegalatiosx_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" />
                            <img src={desktop_hls_imoveis_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h"  />
                            <img src={desktop_angrybreads_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h"  />
                        </div>
                    </div>

                </div>
            </div>
            
            <section className="min-h-screen flex items-center">
                <div className="flex flex-col md:flex-row px-4 gap-8 pt-16">
                    <h1 className="flex flex-col w-full text-center font-extrabold text-title text-6xl md:text-8xl">
                        
                        <span>YOUR</span>
                        <span className="text-transparent [-webkit-text-stroke-color:var(--color-primary)] [-webkit-text-stroke-width:3px]">DIGITAL</span>
                        <span>SPACE</span>
                    </h1>

                    <div className="flex flex-col font-semibold text-xl gap-2">
                        <p>Get clients and sell your products from anywhere in the world with your own website!</p>
                        <p>I develop the tools for you to publish, sell and manage your business online</p>
                        <div className="flex gap-8 mt-8 *:border-primary 
                         *:border-2 *:px-2 *:py-1 *:rounded-lg *:hover:scale-115 *:transition-all *:duration-250 *:flex *:items-center *:gap-1">
                            <Link to={'/contact'} className="bg-primary">Contact me <MdArrowOutward size={24}/></Link>
                            <Link to={'/projects'}>See my projects</Link>
                        </div>
                    </div>

                </div>
            </section> */}



            <div className="relative md:-top-10 h-16 md:h-auto md:pr-8 flex bg-gray-200 md:bg-transparent justify-end items-center md:gap-8 w-fit self-end text-lg font-semibold
            *:flex *:items-center *:gap-2 *:hover:underline *:hover:scale-110 *:hover:cursor-pointer *:transition-all *:duration-150">
                <a><GoMail size={24}/><span>Email</span></a>
                <a><FaInstagram size={24}/><span>Instagram</span></a>
                <a><FaWhatsapp size={24}/><span>+55 (19) 97123-0319</span></a>
                <a><FaGithub size={24}/><span>GitHub</span></a>
            </div>



            {/* <button type="button" onClick={() => {about_me_section.current?.scrollIntoView({ behavior: 'smooth' })}} 
            className={`hover:*:scale-105 fixed hidden md:flex flex-col self-center justify-center items-center bottom-2 gap-2 transition-all duration-500 ${is_on_top? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100 cursor-pointer pointer-events-auto'}`}>
                <span className="text-text-muted">About me!</span>
                <FaArrowDown className="rounded-full bg-primary p-1" size={32}/>
            </button> */}



            <section ref={about_me_section} className="flex flex-col md:px-16 lg:px-24 py-32 gap-16 md:gap-32 lg:gap-40
            *:w-7/12 font-semibold *:flex *:flex-col *:gap-3 lg:*:gap-6">
                <div>
                    <h1 className="font-bold text-title text-3xl">About Me</h1>
                    <p>As a full-stack Web Developer, designer and artist myself, I can see how powerful a well made dedicated website can be for a business, giving you the space to connect you with your audience and display your work with the impact it deserve!</p>
                </div>

                <div className="self-end">
                    <h1 className="font-bold text-title text-3xl">Why should I get my website?</h1>

                    <span>with your own website you get...</span>

                    <ul className="flex flex-col gap-6 list-none pl-0">
                        <li>
                            <strong className="block font-bold">Visibility 🌐</strong>
                            <span>Interested clients can find your art or products naturally through Google searches.</span>
                        </li>
                        <li>
                            <strong className="block font-bold">Authority 💎</strong>
                            <span>Having your own domain instantly builds trust, credibility, and respect.</span>
                        </li>
                        <li>
                            <strong className="block font-bold">Control 🎨</strong>
                            <span>Complete freedom over how your brand looks, feels, and functions. You can showcase your work in interactive ways that Instagram would never allow.</span>
                        </li>
                        <li>
                            <strong className="block font-bold">Custom Tools & Data 📈</strong>
                            <span>Automate your workflow and management with custom tools, also being able to gather real data into who actually is your audience.</span>
                        </li>
                        <li>
                            <strong className="block font-bold">Independence & Safety 🛡️</strong>
                            <span>You're no longer at the mercy of third-party algorithms or sudden changes that can choke off your reach and sales overnight.</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h1 className="font-bold text-title text-3xl">What do you have to offer?</h1>
                    <p>I guarantee you a good quality end result for a cheap reasonable price! I can and I will give you the digital space your brand need with the impact and emotion you desire,
                        with good effort on every little detail without generic templates nor sluggish generative AI, making sure you can connect with people and convert your work into sales!
                    </p>
                    <span><span className="italic font-normal">Dont believe me yet? </span>  Take a look at my 
                    <button onClick={() => {projects_section.current?.scrollIntoView({ behavior: 'smooth' })}} 
                    className="cursor-pointer hover:scale-110 transition-all duration-100 text-2xl font-bold text-primary-hover underline pl-1">projects!</button></span>

                </div>
            </section>

            <hr className="w-10/12 self-center text-text-muted"/>

            <section className="flex flex-col justify-center items-center w-full md:p-16 gap-12" ref={projects_section}>
                <h1 className="text-5xl font-bold text-center">Projects</h1>
                <p>A showcase of some of the projects I have built</p>

                <div className="gap-12 gap-y-4 md:gap-y-8 p-2 md:px-8 pb-16 self-center justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {project_data.map((project, i) => (
                        <ProjectCard key={i} name={project.name} title={project.title} thumbnail={project.thumbnail} type={project.type} duration={project.duration} date={project.date}/>
                    ))}
                </div>
                <div className="w-full flex underline  text-primary justify-end items-end">
                    <Link to={"/projects"} className="flex tansition-all duration-150 items-center gap-2 hover:scale-105">more projects <FaArrowRight size={14}/></Link>
                </div>
            </section>




            <section className="flex flex-col justify-center items-center w-full py-16 gap-8">
                <h1 className="text-5xl font-bold text-center">Skills</h1>
                <p>Here are the main tools and technologies I use in my workflow</p>
                <div className="overflow-hidden w-full">
                    <div className="flex animate-loop-scroll gap-8">
                        <div className="flex gap-8 shrink-0">
                            <SkillDisplay name={"CSS3"} icon={css_icon}/>  <SkillDisplay name={"HTML5"} icon={html_icon}/> 
                            <SkillDisplay name={"ReactJS"} icon={react_icon}/>  <SkillDisplay name={"tailwindCSS"} icon={tailwind_icon}/>  <SkillDisplay name={"CloudFlare"} icon={cloudflare_icon}/>
                            <SkillDisplay name={"GitHub"} icon={github_icon}/>  <SkillDisplay name={"Git"} icon={git_icon}/>  <SkillDisplay name={"Supabase"} icon={supabase_icon}/>
                            
                        </div>
                        <div className="flex gap-8 shrink-0" aria-hidden="true">
                            <SkillDisplay name={"CSS3"} icon={css_icon}/>  <SkillDisplay name={"HTML5"} icon={html_icon}/> 
                            <SkillDisplay name={"ReactJS"} icon={react_icon}/>  <SkillDisplay name={"tailwindCSS"} icon={tailwind_icon}/>  <SkillDisplay name={"CloudFlare"} icon={cloudflare_icon}/>
                            <SkillDisplay name={"GitHub"} icon={github_icon}/>  <SkillDisplay name={"Git"} icon={git_icon}/>  <SkillDisplay name={"Supabase"} icon={supabase_icon}/>
                        </div>
                    </div>
                </div>
            </section>
            

            <hr className="w-10/12 self-center text-text-muted"/>

            <ContactForm/>

        </DefaultLayout>
    )
}

export default Home