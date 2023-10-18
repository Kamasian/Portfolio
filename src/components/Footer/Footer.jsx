import Image from "../Image/Image"
import linkedin from "/assets/img/icons/linkedin.webp"
import github from "/assets/img/icons/github.webp"
import discord from "/assets/img/icons/discord.webp"

export default function Footer() {
    return (
        <footer>
            <p>© JokerDev 2023</p>
            <p>Tous droits réservés.</p>
            <div>
                <a
                    href="https://www.linkedin.com/in/jokerdev/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src={linkedin}
                        alt="linkedin" />
                </a>
                <a
                    href="https://github.com/Kamasian"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src={github}
                        alt="github" />
                </a>
                <a
                    href="https://discordapp.com/users/907679089740115989"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src={discord}
                        alt="discord" />
                </a>
            </div>
        </footer>
    )
}