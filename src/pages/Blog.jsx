import DefaultLayout from "../components/DefaultLayout"
import { Link } from "react-router-dom"
import posts_data from "../assets/blog/posts.json"

function Blog() {
    return (
        <DefaultLayout>
            <section className="pt-32 pb-16 flex flex-col items-center min-h-screen">
                <div className="w-full md:w-10/12 px-4 md:px-0">
                    <h1 className="text-5xl font-bold mb-4">Blog</h1>
                    <p className="text-text-muted mb-12">Insights about technology, design, and digital presence.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts_data.map((post) => (
                            <Link to={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-secundary/20 border border-primary/20 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300">
                                <div className="p-6 flex flex-col gap-4">
                                    <span className="text-primary text-sm font-bold uppercase tracking-wider">{post.tags[0]}</span>
                                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{post.title}</h2>
                                    <p className="text-text-muted line-clamp-3">{post.summary}</p>
                                    <div className="mt-4 flex items-center justify-between text-sm">
                                        <span>{post.date}</span>
                                        <span className="font-bold underline group-hover:no-underline">Read more</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </DefaultLayout>
    )
}

export default Blog