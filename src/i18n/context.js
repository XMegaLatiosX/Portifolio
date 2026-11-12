import { createContext } from "react"

// Default value only used if a component is rendered outside <LanguageProvider>.
export const LanguageContext = createContext({
    lang: "en",
    setLang: () => {},
    t: (key) => key,
})
