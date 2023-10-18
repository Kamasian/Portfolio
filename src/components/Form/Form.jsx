import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

export const Form = () => {
    const form = useRef();
    const [isAnimating, setIsAnimating] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setIsAnimating(true)

        emailjs.sendForm('service_jwfin6b', 'template_h2q8t2x', form.current, 'gakAFlqNv_rU9_vuG')
        .then((result) => {
            console.log(result.text)
            setIsSubmitted(true)
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <form
            className="formContact"
            ref={form}
            onSubmit={sendEmail}>
            <label htmlFor="nom">Nom :</label>
            <input
                type="text"
                id="nom"
                name="nom"
                placeholder="Votre nom"
                autoComplete="name" />

            <label htmlFor="email">Email :</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse email"
                autoComplete="email" />

            <label htmlFor="message">Message :</label>
            <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                autoComplete="message"></textarea>

            <button
                type="submit"
                className={isAnimating ? 'animate-button' : ''}
            >
                {isSubmitted ? "Envoyé" : "Envoyer"}
            </button>
        </form>
    )
}

export default Form