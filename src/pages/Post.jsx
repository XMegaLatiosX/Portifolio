import DefaultLayout from "../components/DefaultLayout"
import { useParams, Navigate, Link } from "react-router-dom"
import posts_data from "../assets/blog/posts.json"
import { FaArrowLeft } from "react-icons/fa"

function Post() {
    const { slug } = useParams()
    const post = posts_data.find(p => p.slug === slug)

    if (!post) return <Navigate to="/blog" replace />

    return (
        <DefaultLayout>
            <article className="pt-32 pb-16 flex flex-col items-center">
                <div className="w-full md:w-8/12 lg:w-6/12 px-4 md:px-0">
                    <Link to="/blog" className="flex items-center gap-2 text-primary hover:underline mb-8 font-bold">
                        <FaArrowLeft size={16} /> Back to blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-primary/10 text-nowrap text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>
                        <div className="flex items-center gap-4 text-text-muted">
                            <span className="font-semibold">{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                    </header>

                    <div
                        className="prose prose-invert max-w-none
                        text-text leading-relaxed space-y-6
                        [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-title [&>h1]:mt-12
                        [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-title [&>h2]:mt-8
                        [&>p]:text-lg [&>p]:opacity-90
                        [&>ul]:list-disc [&>ul]:pl-6
                        [&>li]:mb-2"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <footer className="mt-16 pt-8 border-t border-text-muted/20">
                        <div className="bg-primary/20 p-8 rounded-2xl lg:border border-primary flex flex-col items-center text-center gap-4">
                            <h3 className="text-2xl font-bold">Did you enjoy this article?</h3>
                            <p className="text-text-muted">Let's build your brand's digital space today.</p>
                            <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all">
                                Get in touch
                            </Link>
                        </div>
                    </footer>
                </div>
            </article>
        </DefaultLayout>
    )
}

export default Post