import DefaultLayout from "../components/DefaultLayout"
import ProjectCard from "../components/ProjectCard"
import project_data from "../assets/projects/project_data.json"

function Projects() {
    return (
        <DefaultLayout>
            
            <section className="flex flex-col justify-center items-center w-full md:p-16 mt-24 gap-12">
                <h1 className="text-5xl font-bold text-center">Projects</h1>
                <p>A showcase of projects I have built</p>

                <div className="gap-12 gap-y-4 md:gap-y-8 p-2 md:px-8 pb-16 self-center justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {project_data.map((project, i) => (
                        <ProjectCard key={i} name={project.name} title={project.title} thumbnail={project.thumbnail} description={project.description} type={project.type} duration={project.duration} date={project.date}/>
                    ))}
                </div>
            </section>
        </DefaultLayout>
    )
}

export default Projects