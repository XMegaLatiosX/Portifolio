import { useEffect, useState } from "react"

function CyclingText({words}) {
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setIndex(prev => (prev + 1) % words.length)
                setVisible(true)
            }, 400) // tempo do fade out
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <span className={`text-primary font-bold transition-opacity duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            {words[index]}
        </span>
    )
}
export default CyclingText