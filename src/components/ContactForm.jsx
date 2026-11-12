import { useRef, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { useLanguage } from '../i18n/useLanguage'
import { CONTACT, whatsappLink } from '../data/contact'

export default function ContactForm() {
    const { t } = useLanguage()
    const [message_sent, set_message_sent] = useState(false)
    const [is_submitting, set_is_submitting] = useState(false)
    const [error_message, set_error_message] = useState("")

    const [nameInput, set_nameInput] = useState("")
    const [contactInput, set_contactInput] = useState("")
    const [messageInput, set_messageInput] = useState("")

    const nameInputRef = useRef(null)
    const contactInputRef = useRef(null)
    const messageInputRef = useRef(null)
    const sendMessageButton = useRef(null)


    async function submitMessage(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append("access_key", "4958e23e-424d-4fe6-994b-d063b4523709")

        if (message_sent || is_submitting) return

        if (!nameInput || !contactInput || !messageInput) return

        set_is_submitting(true)
        set_error_message("")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (data.success) {
                set_message_sent(true)
                setTimeout(() => {
                    set_message_sent(false)
                }, 3000)
            } else {
                set_error_message(data.message || t("form.errFail"))
            }
        } catch {
            set_error_message(t("form.errConn"))
        } finally {
            set_is_submitting(false)
        }
    }

    return (
        <section className="flex flex-col justify-center w-full py-16 lg:px-24 gap-8 lg:gap-16 *:text-center">
            <div className="flex flex-col justify-center gap-8">
                <h1 className="text-5xl font-bold">{t("form.title")}</h1>
                <p>{t("form.intro")}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:*:max-w-lg justify-between">
                <div className="flex flex-col max-w-full lg:w-lg items-center gap-8 *:items-center font-semibold">
                    <h3 className="font-semibold">{t("form.social")}</h3>
                    <div className="flex flex-col *:w-full *:flex *:gap-4 *:items-center *:hover:scale-110 *:transition-all *:duration-300 gap-4">
                        <a draggable="false" className="underline" href={CONTACT.instagram}>
                        <FaInstagram size={32}/>instagram</a>
                        <a draggable="false" className="underline" href={whatsappLink(t("contact.whatsappMessage"))}>
                        <FaWhatsapp size={32}/>{CONTACT.phoneDisplay}</a>
                        <a draggable="false" className="underline" href={`mailto:${CONTACT.email}`}>
                        <GoMail size={32}/>{t("form.email")}</a>
                    </div>
                </div>


                <form onSubmit={submitMessage} className="flex flex-col gap-4 items-center px-2 max-w-full lg:w-lg *:rounded-sm">
                    <h3 className="font-semibold">{t("form.leave")}</h3>
                    <input    ref={nameInputRef} onChange={(e) => set_nameInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full"  type="text" placeholder={t("form.name")} name="name" required/>
                    <input    ref={contactInputRef} onChange={(e) => set_contactInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full"  type="text" placeholder={t("form.contact")} name="email" required/>
                    <textarea ref={messageInputRef} onChange={(e) => set_messageInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full min-h-32"  placeholder={t("form.message")} name="message" required></textarea>
                    <button   ref={sendMessageButton} className={`${message_sent ? 'bg-green-500 text-green-200' : 'bg-primary'} text-[#f1f1ff] font-semibold h-12 w-48 cursor-pointer transition-all duration-300 disabled:opacity-70`} disabled={message_sent || is_submitting} type="submit">
                        {is_submitting ? t("form.sending") : message_sent ? t("form.sent") : t("form.submit")}
                    </button>
                    <p className="text-text-muted text-xs font-normal">{t("form.privacy")}</p>
                    {error_message && <span className="text-red-500 text-sm">{error_message}</span>}
                </form>

            </div>
        </section>
    )
}
