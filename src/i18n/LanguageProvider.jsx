import { useCallback, useEffect, useMemo, useState } from "react"
import { LanguageContext } from "./context"
import { SUPPORTED_LANGS, translations } from "./translations"

const STORAGE_KEY = "lang"

// English is the default. The choice is remembered in the visitor's browser when possible.
function getInitialLang() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (SUPPORTED_LANGS.includes(saved)) return saved
    } catch {
        // storage blocked: just use the default
    }
    return "en"
}

export default function LanguageProvider({ children }) {
    const [lang, set_lang] = useState(getInitialLang)

    const t = useCallback(
        (key) => translations[lang][key] ?? translations.en[key] ?? key,
        [lang]
    )

    const setLang = useCallback((next) => {
        if (!SUPPORTED_LANGS.includes(next)) return
        set_lang(next)
        try {
            localStorage.setItem(STORAGE_KEY, next)
        } catch {
            // storage blocked: the choice just won't be remembered
        }
    }, [])

    // keep <html lang>, the tab title and the meta description in sync with the language
    useEffect(() => {
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
        document.title = t("meta.title")
        document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"))
    }, [lang, t])

    const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
