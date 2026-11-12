import { useLanguage } from "../i18n/useLanguage"

const OPTIONS = [
    { code: "en", label: "EN" },
    { code: "pt", label: "PT" },
]

function LanguageToggle() {
    const { lang, setLang, t } = useLanguage()

    return (
        <div role="group" aria-label={t("lang.label")} className="flex items-center rounded-full border border-primary overflow-hidden text-sm font-bold select-none">
            {OPTIONS.map(({ code, label }) => (
                <button
                    key={code}
                    type="button"
                    aria-pressed={lang === code}
                    onClick={() => setLang(code)}
                    className={`px-2.5 py-1 cursor-pointer transition-colors ${lang === code ? "bg-primary text-white" : "hover:bg-primary/20"}`}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}

export default LanguageToggle
