import { useRef, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { Link } from 'react-router-dom'

export default function ContactForm() {
    const [message_sent, set_message_sent] = useState(false)
    
    const [nameInput, set_nameInput] = useState("")
    const [contactInput, set_contactInput] = useState("")
    const [messageInput, set_messageInput] = useState("")
    
    const nameInputRef = useRef(null)    
    const contactInputRef = useRef(null)
    const messageInputRef = useRef(null)
    const sendMessageButton = useRef(null)


    async function submitMessage(e) {
        


        
    }
    
    async function submitMessage(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append("access_key", "4958e23e-424d-4fe6-994b-d063b4523709")

        if (message_sent) return

        if (!nameInput) shakeInput(nameInputRef)
        if (!contactInput) shakeInput(contactInputRef)
        if (!messageInput) shakeInput(messageInputRef)

        if (!nameInput || !contactInput || !messageInput) {
            shakeInput(sendMessageButton)
            return
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        const data = await response.json()

        set_message_sent(data.success)

        setTimeout(() => {
            set_message_sent(false)
        }, 1000)
    }

    return (
        <section className="flex flex-col justify-center w-full py-16 md:px-24 gap-16 *:text-center">
            <div className="flex flex-col justify-center gap-8">
                <h1 className="text-5xl font-bold">Contact</h1>
                <p>Interested? Leave me a message, you can also see my social media</p>
            </div>

            <div className="flex flex-col md:flex-row md:*:max-w-lg justify-between">
                <div className="flex flex-col w-11/12 max-w-full lg:w-lg items-center gap-8 *:items-center font-semibold">
                    <h3 className="font-semibold">contact my social media</h3>
                    <div className="flex flex-col *:w-full *:flex *:gap-4 *:items-center *:hover:scale-110 *:transition-all *:duration-300 gap-4">
                        <Link draggable="false" className="underline" to={"https://www.instagram.com//"}><FaInstagram size={32}/>???</Link>
                        <Link draggable="false" className="underline" to={"https://wa.me/5519981273464?text=Olá,%20vim%20pelo%20site%20HLS%20Imóveis!"}><FaWhatsapp size={32}/>(19) 97123-0319</Link>
                        <Link draggable="false" className="underline" to={"mailto:juio.alves.souza@gmail.com://dominio.com"}><GoMail size={32}/>Email</Link>
                    </div>
                </div>
                
                
                <form onSubmit={submitMessage} className="flex flex-col gap-4 items-center w-11/12 max-w-full lg:w-lg *:rounded-sm">
                    <h3 className="font-semibold">leave your message</h3>
                    <input    ref={nameInputRef} onChange={(e) => set_nameInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full"  type="text" placeholder="Name" name="name" required/>
                    <input    ref={contactInputRef} onChange={(e) => set_contactInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full"  type="text" placeholder="Email or phone number" name="email" required/>
                    <textarea ref={messageInputRef} onChange={(e) => set_messageInput(e.target.value)} className="border border-primary pl-2 font-semibold py-1 w-full min-h-32"  placeholder="Your message" name="message" required></textarea>
                    <button   ref={sendMessageButton} className={`${message_sent ? 'bg-green-500 text-green-200' : 'bg-primary'} h-12 w-48 cursor-pointer transition-all duration-300`} disabled={message_sent} type="submit">{message_sent ? "Message sent!" : "Submit"}</button>
                </form>

            </div>
        </section>
    )
}