import { useState } from "react"

// Project image. If the file doesn't exist yet (or fails to load), a colored placeholder
// with the project's first letter is shown, so the page never has a broken image icon.
function Thumbnail({ src, alt, label, className = "" }) {
    const [failed, set_failed] = useState(false)

    if (!src || failed) {
        return (
            <div role="img" aria-label={alt} className={`${className} flex items-center justify-center bg-linear-to-br from-primary via-secundary to-black text-white/80 font-extrabold text-6xl uppercase`}>
                {(label || alt || "?").trim().charAt(0)}
            </div>
        )
    }

    return <img className={className} src={src} alt={alt} onError={() => set_failed(true)} />
}

export default Thumbnail
