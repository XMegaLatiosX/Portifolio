import DefaultLayout from "../components/DefaultLayout"
import Thumbnail from "../components/Thumbnail"
import projects_data from "../assets/projects/project_data.json"
import { Navigate, useParams } from "react-router-dom"
import { HiOutlineExternalLink } from "react-icons/hi"
import { TbProgressCheck } from "react-icons/tb"
import { IoMdTime } from "react-icons/io"
import { FaCalendarCheck } from "react-icons/fa"
import { useLanguage } from "../i18n/useLanguage"
import { localizeProject } from "../utils/localizeProject"

function Project() {
    const { lang, t } = useLanguage()
    const { project_name } = useParams()

    const raw_project = projects_data.find(item => item.name === project_name)

    if (!raw_project) return <Navigate to="/projects" replace />

    const project = localizeProject(raw_project, lang)

    // duration "-" = still in progress; empty duration/status/date/link are simply not shown
    const duration_text = project.duration === "-" ? t("card.inProgress") : project.duration ? `${t("card.madeIn")} ${project.duration}` : ""
    const status_text = project.status ? t(`status.${project.status}`) : ""

    return (
        <DefaultLayout>
            <section className="pt-24 flex flex-col items-center">
                <div className="w-full md:w-10/12 py-12 px-2 md:px-0 flex flex-col gap-4">

                    <h1 className="font-bold text-5xl">{project.name}</h1>
                    <h2 className="font-semibold text-2xl">{project.title}</h2>
                    <h2 className="font-semibold text-text-muted">{project.summary}</h2>

                    <hr className="text-text-muted"/>

                    {project.link && (
                        <a className=" border border-primary bg-primary/45 text-lg w-fit p-1 px-4 gap-2 rounded-full flex justify-around items-center font-semibold hover:scale-105 transition-all duration-150 underline" href={project.link} target="_blank" rel="noopener noreferrer"><span>{t("project.seeLive")}</span> <HiOutlineExternalLink size={28} /></a>
                    )}

                    <Thumbnail key={project.thumbnail} className="rounded-md w-full aspect-video object-cover" src={project.thumbnail} alt={`${project.name} — ${t("project.thumbAlt")}`} label={project.name} />

                    <p dangerouslySetInnerHTML={{__html: project.description}}></p>

                    <div className="flex flex-col gap-8 py-16">
                        <h4 className="text-3xl font-bold text-primary">{t("project.features")}</h4>
                        <div className="flex flex-col gap-2 text-xl font-semibold mb-8">
                            {project.features.map((feature, i) => (<span key={i}>– {feature}</span>))}
                        </div>
                        <h4 className="text-3xl font-bold text-primary">{t("project.solution")}</h4>
                        <p className="font-semibold text-lg">{project.solution}</p>
                    </div>

                    <div className="flex flex-col py-4 gap-4 *:flex *:gap-4 *:items-center font-semibold">
                        {status_text && <div><TbProgressCheck className="text-primary" size={28}  /> {status_text}</div>}
                        {duration_text && <div><IoMdTime        className="text-primary" size={28}  /> {duration_text}</div>}
                        {project.date && <div><FaCalendarCheck className="text-primary" size={28}  /> {project.date}</div>}
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}

export default Project
