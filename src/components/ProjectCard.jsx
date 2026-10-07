import { Link } from "react-router-dom";

function ProjectCard({name, title, thumbnail, type, duration, date}) {
    return (
        <Link to={`/projects/${name}`} className="group relative flex flex-col gap-4 *:gap-3 pb-4 md:pb-0 md:flex-row md:w-96  hover:scale-107 border border-primary overflow-hidden rounded-2xl transition-all duration-300">
            <img className="md:absolute z-10 md:aspect-square aspect-video object-cover h-full w-full group-hover:scale-115 transition-all duration-250" src={thumbnail} alt={'project ' + title + 'thumbnail'} />

            <span className="absolute top-1 md:top-auto md:bottom-1 left-2 font-semibold bg-background w-fit p-0.5 px-2 rounded-full border border-primary z-20">{type}</span>

            <div className="relative flex flex-col w-full h-full bg-linear-to-r from-transparent via-black/55 to-black md:pl-32 px-2 md:py-2 md:px-4 z-20">
                <h3 className="text-lg font-extrabold flex md:items-center md:h-10 md:pt-2">{name}</h3>
                <p className="font-semibold md:h-24 line-clamp-6">{title}</p>
                <hr className="text-text-muted" />
                <div className="relative flex justify-around ">
                    <span className="text-text-muted">{date}</span>
                    <span className="text-text-muted">{duration == "-"? `in progress` : `made in ${duration}`}</span>
                </div>
            </div>

        </Link>
    )
}
export default ProjectCard