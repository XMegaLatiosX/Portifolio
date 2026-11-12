import { useContext } from "react"
import { LanguageContext } from "./context"

// const { lang, setLang, t } = useLanguage()
export function useLanguage() {
    return useContext(LanguageContext)
}
