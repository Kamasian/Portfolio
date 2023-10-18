import Image from "../Image/Image"
import ticketUp from "/assets/img/icons/ticketUp.webp"
import ticketDown from "/assets/img/icons/ticketDown.webp"

export default function Carousel({ currentIndex, onIndexChange, projectList }) {

    const slideUp = () => {
        onIndexChange((currentIndex - 1 + projectList.length) % projectList.length)
    }

    const slideDown = () => {
        onIndexChange((currentIndex + 1) % projectList.length)
    }

    return (
        <div className="carousel-image">
            <Image
                className="carouselImageCurrent"
                src={projectList[currentIndex].imageUrl}
                alt={projectList[currentIndex].title} />
            <div className="overlay"></div>
            <div className="tickets">
                <Image
                    className="ticketUp"
                    src={ticketUp}
                    alt="Précédente"
                    onClick={slideUp} />
                <Image
                    className="ticketDown"
                    src={ticketDown}
                    alt="Suivante"
                    onClick={slideDown} />
            </div>
            <div className="containerLinkButton">
                {Object.entries(projectList[currentIndex].link).map(([key, linkInfo]) => (
                    <a
                        key={key}
                        className="linkButton"
                        href={linkInfo.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={linkInfo.image}
                            alt={linkInfo.alt} />
                    </a>
                ))}
            </div>
        </div>
    )
}