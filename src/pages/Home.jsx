import { FaArrowDown, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import DefaultLayout from "../components/DefaultLayout"
import { GoMail } from "react-icons/go"
import { Link } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md"
import { useEffect, useRef, useState } from "react"

function Home() {
    const about_me_section = useRef(null)
    const projects_section = useRef(null)

    const [is_on_top, set_is_on_top] = useState(true);

    useEffect(() => {
        const checkScroll = () => {
            set_is_on_top(window.scrollY < 20);
        };

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <DefaultLayout>
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
            </section>



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
            <section className="flex flex-col justify-center w-full pt-16" ref={projects_section}>
                <h1 className="text-5xl font-bold text-center">Projects</h1>
                <p>here is some of my projects used in real life scenarios by me or my clients</p>
            </section>
        </DefaultLayout>
    )
}

export default Home