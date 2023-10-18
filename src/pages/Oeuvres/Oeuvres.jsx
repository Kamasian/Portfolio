import { useState } from "react"
import Pellicule from "../../components/Pellicule/Pellicule"
import Carousel from "../../components/Carousel/Carousel"
import ProjectDescription from "../../components/ProjectDescription/ProjectDescription"
import { projectList } from "../../data/projectList"
import openDescription from "/assets/img/icons/voirDescription.webp"
import closeDescription from "/assets/img/icons/fermerDescription.webp"

export default function Oeuvres() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showDescription, setShowDescription] = useState(false)
    const [isDescriptionFixed, setIsDescriptionFixed] = useState(false)

    const handleIndexChange = (newIndex) => {
        setCurrentIndex(newIndex)
    }

    const toggleDescription = () => {
        setShowDescription(!showDescription)
        setIsDescriptionFixed(!isDescriptionFixed)

        const closeDescriptionButton = document.querySelector(".showCloseDescription")
        if (isDescriptionFixed) {
            closeDescriptionButton.classList.remove("sticky")
        } else {
            closeDescriptionButton.classList.add("sticky")
        }
    }

    return (
        <main
            className="mainOeuvres"
            id="mainOeuvres">
            <Pellicule
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
                projectList={projectList} />
            <Carousel
                currentIndex={currentIndex}
                onIndexChange={handleIndexChange}
                projectList={projectList} />
            <div className={isDescriptionFixed ? "projectDescriptionFixed" : "projectDescription"}>
                {showDescription && (
                    <ProjectDescription
                        currentIndex={currentIndex}
                        projectList={projectList}
                        onClose={toggleDescription} />
                )}
            </div>
            {showDescription ? (
                <img
                    src={closeDescription}
                    alt="Fermer la description"
                    className={`showCloseDescription ${isDescriptionFixed ? "sticky" : ""}`}
                    onClick={toggleDescription}
                />
            ) : (
                <img
                    src={openDescription}
                    alt="Voir la description"
                    className={`showCloseDescription ${isDescriptionFixed ? "sticky" : ""}`}
                    onClick={toggleDescription}
                />
            )}
        </main>
    )
}