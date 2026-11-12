// Contact details used across the site. Edit here once and it updates everywhere.
export const CONTACT = {
    whatsappNumber: "5519971230319",
    phoneDisplay: "(19) 97123-0319",
    phoneDisplayIntl: "+55 (19) 97123-0319",
    instagram: "https://www.instagram.com/js.webdev/",
    github: "https://github.com/XMegaLatiosX?tab=repositories",
    email: "juio.alves.souza@gmail.com",
}

// WhatsApp link with a pre-written message in the visitor's language
export function whatsappLink(message) {
    return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}
