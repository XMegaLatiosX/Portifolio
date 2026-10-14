function AnimatedCounter({ target, duration = 1500, suffix = "" }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true
                const steps = 60
                const increment = target / steps
                let current = 0
                const timer = setInterval(() => {
                    current += increment
                    if (current >= target) {
                        setCount(target)
                        clearInterval(timer)
                    } else {
                        setCount(Math.floor(current))
                    }
                }, duration / steps)
            }
        }, { threshold: 0.5 })

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, duration])

    return <span ref={ref}>{count}{suffix}</span>
}

// use:
// <AnimatedCounter target={3} suffix=" projects" />
// <AnimatedCounter target={5} suffix=" days avg" />