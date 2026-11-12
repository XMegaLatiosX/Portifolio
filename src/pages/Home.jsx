import { FaArrowRight, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { MdAdminPanelSettings, MdMailOutline, MdOutlinePersonOutline, MdPhotoLibrary, MdSearch, MdStorefront } from "react-icons/md"
import { Link } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md"
import { useRef } from "react"
import DefaultLayout from "../components/DefaultLayout"
import ContactForm from "../components/ContactForm"
import ProjectCard from "../components/ProjectCard"
import { useLanguage } from "../i18n/useLanguage"
import { CONTACT, whatsappLink } from "../data/contact"
import { localizeProject } from "../utils/localizeProject"

import project_data from "../assets/projects/project_data.json"

import mobile_hls_imoveis_screenshot from "../assets/images/screenshots/mobile-hls-imoveis.png"
import mobile_angrybreads_screenshot from "../assets/images/screenshots/mobile-angrybreads.png"
import mobile_xmegalatiosx_screenshot from "../assets/images/screenshots/mobile-xmegalatiosx.png"
import desktop_hls_imoveis_screenshot from "../assets/images/screenshots/desktop-hls-imoveis.png"
import desktop_angrybreads_screenshot from "../assets/images/screenshots/desktop-angrybreads.png"
import desktop_xmegalatiosx_screenshot from "../assets/images/screenshots/desktop-xmegalatiosx.png"
import { useReveal } from "../utils/useReveal"
import CyclingText from "../utils/CyclingText"

// How many projects the home page shows (all of them are on /projects)
const HOME_PROJECTS = 3

// Icons for the "What I build" cards, in the same order as the "build.items" texts
const BUILD_ICONS = [MdAdminPanelSettings, MdStorefront, MdSearch, MdPhotoLibrary, MdMailOutline, MdOutlinePersonOutline]

function Home() {
    const { lang, t } = useLanguage()
    const projects_section = useRef(null)
    const reveal1 = useReveal()
    const reveal2 = useReveal()
    const reveal3 = useReveal()
    const reveal4 = useReveal()
    const reveal5 = useReveal()

    const whatsapp_url = whatsappLink(t("contact.whatsappMessage"))

    return (
        <DefaultLayout>
            <div id="start" className="relative w-full min-h-screen flex lg:items-center justify-center mt-24 lg:my-0 px-6 lg:px-16 lg:overflow-hidden">

                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center z-10">

                    <div className="flex flex-col justify-center text-center lg:text-left">

                        <h1 className="flex flex-col w-full font-extrabold text-title text-5xl lg:text-6xl gap-2">

                            <span>{t("hero.l1")}</span>
                            <span className="text-primary lg:text-transparent [-webkit-text-stroke-color:var(--color-primary)] [-webkit-text-stroke-width:2px]">{t("hero.l2")}</span>
                            <span>{t("hero.l3")}</span>
                        </h1>

                    </div>

                    <div className="relative w-full scale-75 lg:scale-100 lg:h-2/3 flex items-center justify-center perspective-distant -top-12 lg:top-auto -z-10 opacity-75 lg:opacity-100">

                        <div className="absolute rotate-y-25 lg:-translate-x-8 bg-primary border-4 border-primary aspect-video h-55 lg:h-[125%] rounded-xl shadow-2xl transition-transform duration-500 hover:rotate-y-6">
                            <div className="w-full h-full bg-neutral-900 rounded-lg flex flex-row flex-nowrap overflow-hidden">
                                <img src={desktop_angrybreads_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" alt="Angry Breads website on desktop" />
                                <img src={desktop_xmegalatiosx_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" alt="XMegaLatiosX website on desktop" />
                                <img src={desktop_hls_imoveis_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" alt="HLS Imóveis website on desktop" />
                                <img src={desktop_angrybreads_screenshot} className="w-full min-w-full h-full object-cover shrink-0 animate-scroll-h" alt="" aria-hidden="true" />
                            </div>
                        </div>

                        <div className="absolute -rotate-y-25 translate-x-16 translate-y-16 bg-primary border-4 border-primary aspect-9/17 h-70 lg:h-85 rounded-2xl shadow-2xl z-20 transition-transform duration-500 hover:-rotate-y-6">
                            <div className="w-full h-full bg-neutral-900 rounded-xl flex flex-col flex-nowrap overflow-hidden">
                                <img src={mobile_xmegalatiosx_screenshot} className="w-full h-full min-h-full object-cover shrink-0 animate-scroll-v " alt="XMegaLatiosX website on mobile" />
                                <img src={mobile_hls_imoveis_screenshot} className="w-full h-full min-h-full object-cover shrink-0 animate-scroll-v  " alt="HLS Imóveis website on mobile" />
                                <img src={mobile_angrybreads_screenshot} className="w-full h-full min-h-full object-cover shrink-0 animate-scroll-v  " alt="Angry Breads website on mobile" />
                                <img src={mobile_xmegalatiosx_screenshot} className="w-full h-full min-h-full object-cover shrink-0 animate-scroll-v " alt="" aria-hidden="true" />
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col-reverse gap-4 lg:flex-col justify-center space-y-6 text-left lg:pl-4">
                        <p className="text-text font-semibold text-lg leading-relaxed max-w-sm">
                        {t("hero.p1")}
                        </p>

                        <p className="text-text-muted font-semibold text-base mb-0 leading-relaxed max-w-sm">
                        {t("hero.p2pre")} <CyclingText words={t("hero.words")} /> {t("hero.p2post")}
                        </p>

                        {/* Botões */}
                        <div className="flex flex-wrap lg:justify-start justify-center gap-2 pt-2 *:px-4 *:py-2 *:lg:px-6 *:lg:py-3 *:rounded-md font-medium">
                            <Link to="/contact" className="bg-primary flex items-center gap-1 lg:gap-2 text-white">
                                {t("hero.cta1")} <MdArrowOutward size={24}/>
                            </Link>
                            <Link to="/projects" className="border border-primary hover:bg-primary transition-colors text-center">
                                {t("hero.cta2")}
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Brilhos de fundo */}
                <div className="absolute top-12 left-1/4 w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
                <div className="absolute bottom-12 right-1/4 w-150 h-150 bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

            </div>




            <div className="relative lg:-top-10 lg:h-auto lg:pr-8 flex flex-col lg:flex-row lg:bg-transparent justify-end items-center lg:gap-8 w-full lg:w-fit gap-4 py-4 lg:py-0 self-end text-lg font-semibold z-10
            *:flex *:items-center *:gap-2 *:hover:underline *:hover:scale-110 *:hover:cursor-pointer *:transition-all *:duration-150">
                <a href={whatsapp_url}><FaWhatsapp size={24}/><span>{CONTACT.phoneDisplayIntl}</span></a>
                <a href={CONTACT.instagram}><FaInstagram size={24}/><span>Instagram</span></a>
                <a href={CONTACT.github}><FaGithub size={24}/><span>GitHub</span></a>
                <a href={`mailto:${CONTACT.email}`}><GoMail size={24}/><span>{t("form.email")}</span></a>
            </div>




            <section id="about_me_section" className="flex flex-col px-4 lg:px-24 py-32 gap-16 lg:gap-40
            *:lg:w-7/12 font-semibold *:flex *:flex-col *:gap-3 lg:*:gap-6">
                <div ref={reveal1} className="opacity-0 translate-y-8 transition-all duration-700">
                    <h1 className="font-bold text-title text-3xl">{t("about.title")}</h1>
                    <p>{t("about.p")}</p>
                </div>

                <div ref={reveal2} className="opacity-0 translate-y-8 transition-all duration-700 self-end">
                    <h1 className="font-bold text-title text-3xl">{t("why.title")}</h1>

                    <span>{t("why.intro")}</span>

                    <ul className="flex flex-col gap-6 list-none pl-0">
                        {t("why.items").map((item) => (
                            <li key={item.t}>
                                <strong className="block font-bold">{item.t}</strong>
                                <span>{item.d}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div ref={reveal3} className="opacity-0 translate-y-8 transition-all duration-700">
                    <h1 className="font-bold text-title text-3xl">{t("offer.title")}</h1>
                    <p>{t("offer.p")}</p>
                    <br className="lg:hidden"/>
                    <span><span className="italic font-normal">{t("offer.dont")} <br className="lg:hidden"/></span> {t("offer.take")}
                    <button onClick={() => {projects_section.current?.scrollIntoView({ behavior: 'smooth' })}}
                    className="cursor-pointer hover:scale-110 transition-all duration-100 text-2xl font-bold text-primary-hover underline pl-1">{t("offer.projects")}</button></span>

                </div>

                <div ref={reveal4} className="opacity-0 translate-y-8 transition-all duration-700 self-end">
                    <h1 className="font-bold text-title text-3xl">{t("process.title")}</h1>

                    <ol className="flex flex-col gap-6 list-none pl-0">
                        {t("process.steps").map((step, i) => (
                            <li key={step.t} className="flex gap-4 items-start">
                                <span className="shrink-0 flex items-center justify-center size-9 rounded-full bg-primary text-white font-bold">{i + 1}</span>
                                <div>
                                    <strong className="block font-bold">{step.t}</strong>
                                    <span>{step.d}</span>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <p className="text-text-muted">{t("process.note")}</p>
                </div>
            </section>

            <hr className="w-10/12 self-center text-text-muted"/>

            <section className="flex flex-col justify-center items-center w-full lg:p-16 gap-12 px-2" ref={projects_section}>
                <h1 className="text-5xl font-bold text-center">{t("projects.title")}</h1>
                <p>{t("projects.subHome")}</p>

                <div className="gap-12 gap-y-4 lg:gap-y-8 py-2 lg:px-8 pb-16 self-center justify-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {project_data.slice(0, HOME_PROJECTS).map((raw_project) => {
                        const project = localizeProject(raw_project, lang)
                        return <ProjectCard key={project.name} name={project.name} title={project.title} thumbnail={project.thumbnail} type={project.type} duration={project.duration} date={project.date}/>
                    })}
                </div>
                <div className="w-full flex underline  text-primary justify-end items-end">
                    <Link to={"/projects"} className="flex transition-all duration-150 items-center gap-2 hover:scale-105">{t("projects.more")} <FaArrowRight size={14}/></Link>
                </div>
            </section>




            <section className="flex flex-col justify-center items-center w-full py-16 gap-8 px-4">
                <h1 className="text-5xl font-bold text-center">{t("build.title")}</h1>
                <p className="px-2 text-center">{t("build.sub")}</p>

                <div ref={reveal5} className="opacity-0 translate-y-8 transition-all duration-700 w-full lg:w-10/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {t("build.items").map((item, i) => {
                        const Icon = BUILD_ICONS[i]
                        return (
                            <div key={item.t} className="flex flex-col gap-3 p-6 rounded-2xl border border-primary shadow-[0_0_5px_rgb(0,0,0,0.12)] shadow-primary">
                                <span className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary"><Icon size={28} /></span>
                                <h3 className="text-xl font-bold">{item.t}</h3>
                                <p className="text-text-muted font-semibold">{item.d}</p>
                            </div>
                        )
                    })}
                </div>

                <p className="text-text-muted text-sm font-semibold text-center">{t("build.stack")}</p>
            </section>


            <hr className="w-10/12 self-center text-text-muted"/>

            <ContactForm/>

        </DefaultLayout>
    )
}

export default Home
