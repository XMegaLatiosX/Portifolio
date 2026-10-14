import { useRef, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

export default function ContactForm() {
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
                set_error_message(data.message || "Failed to send message. Please try again.")
            }
        } catch (error) {
            set_error_message("An error occurred while sending the message. Please check your connection.")
        } finally {
            set_is_submitting(false)
        }
    }

    return (
        <section className="flex flex-col justify-center w-full py-16 lg:px-24 gap-8 lg:gap-16 *:text-center">
            <div className="flex flex-col justify-center gap-8">
                <h1 className="text-5xl font-bold">Contact</h1>
                <p>Interested? Leave me a message, you can also see my social media</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:*:max-w-lg justify-between">
                <div className="flex flex-col max-w-full lg:w-lg items-center gap-8 *:items-center font-semibold">
                    <h3 className="font-semibold">get in touch with my social media</h3>
                    <div className="flex flex-col *:w-full *:flex *:gap-4 *:items-center *:hover:scale-110 *:transition-all *:duration-300 gap-4">
                        <a draggable="false" className="underline" href={"https://www.instagram.com/js.webdev/"}>
                        <FaInstagram size={32}/>instagram</a>
                        <a draggable="false" className="underline" href={"https://wa.me/5519971230319?text=Hello,%20I'm%20interested%20in%20a%20website!"}>
                        <FaWhatsapp size={32}/>(19) 97123-0319</a>
                        <a draggable="false" className="underline" href={"mailto:juio.alves.souza@gmail.com"}>
                        <GoMail size={32}/>Email</a>
                    </div>
                </div>


                <form onSubmit={submitMessage} className="flex flex-col gap-4 items-center px-2 max-w-full lg:w-lg *:rounded-sm">
                    <h3 className="font-semibold">leave your message</h3>
                    <input    ref={nameInputRef} onChange={(e) => set_nameInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full"  type="text" placeholder="Name" name="name" required/>
                    <input    ref={contactInputRef} onChange={(e) => set_contactInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full"  type="text" placeholder="Email or phone number" name="email" required/>
                    <textarea ref={messageInputRef} onChange={(e) => set_messageInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full min-h-32"  placeholder="Your message" name="message" required></textarea>
                    <button   ref={sendMessageButton} className={`${message_sent ? 'bg-green-500 text-green-200' : 'bg-primary'} h-12 w-48 cursor-pointer transition-all duration-300 disabled:opacity-70`} disabled={message_sent || is_submitting} type="submit">
                        {is_submitting ? "Sending..." : message_sent ? "Message sent!" : "Submit"}
                    </button>
                    {error_message && <span className="text-red-500 text-sm">{error_message}</span>}
                </form>

            </div>
        </section>
    )
}