import DefaultLayout from "../components/DefaultLayout"
import projects_data from "../assets/projects/project_data.json"
import { useParams } from "react-router-dom"
import { HiOutlineExternalLink } from "react-icons/hi"
import { TbProgressCheck } from "react-icons/tb"
import { IoMdTime } from "react-icons/io"
import { FaCalendarCheck } from "react-icons/fa"
function Project() {
    const { project_name } = useParams()
    const project = projects_data.filter(item => item.name === project_name)[0]
    
    return (
        <DefaultLayout>
            <section className="pt-24 flex flex-col items-center">
                <div className="w-full md:w-10/12 py-12 px-2 md:px-0 flex flex-col gap-4">

                    <h1 className="font-bold text-5xl">{project.name}</h1>
                    <h2 className="font-semibold text-2xl">{project.title}</h2>
                    <h2 className="font-semibold text-text-muted">{project.summary}</h2>

                    <hr className="text-text-muted"/>

                    <a className=" border border-primary text-lg w-32 p-1 px-2 rounded-full flex justify-around items-center font-semibold hover:scale-105 transition-all duration-150 underline" href={project.link}><span>see live</span> <HiOutlineExternalLink size={28} /></a>

                    <img className="rounded-md" src={project.thumbnail} alt={'project ' + project.title + 'thumbnail'} />

                    <p dangerouslySetInnerHTML={{__html: project.description}}></p>

                    <div className="flex flex-col gap-8 py-16">
                        <h4 className="text-3xl font-bold text-primary">Features</h4>
                        <div className="flex flex-col gap-2 text-xl font-semibold mb-8">
                            {project.features.map(feature => (<span>– {feature}</span>))}
                        </div>
                        <h4 className="text-3xl font-bold text-primary">Solutions</h4>
                        <p className="font-semibold text-lg">{project.solution}</p>
                    </div>
                    
                    <div className="flex flex-col py-4 gap-4 *:flex *:gap-4 *:items-center font-semibold">
                        <div><TbProgressCheck className="text-primary" size={28}  /> {project.status}</div>
                        <div><IoMdTime        className="text-primary" size={28}  /> {project.duration}</div>
                        <div><FaCalendarCheck className="text-primary" size={28}  /> {project.date}</div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}

export default Project