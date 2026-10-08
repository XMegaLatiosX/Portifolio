import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const { hash } = useLocation()
    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));

                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });

            }, 100);
        }
    }, [hash])
    return null
}
export default ScrollToHash