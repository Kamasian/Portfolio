import { useState, useRef, useEffect } from "react"
import Image from "../Image/Image"
import testpelli from "/assets/img/testpelli.webp"
import Cursor from "../Cursor/Cursor"
import WindowWidthDetector from "../../components/WindowWidthDetector/WindowWidthDetector"

export default function Pellicule({ onIndexChange, projectList }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef(null)
    const itemCount = projectList.length

    useEffect(() => {
        const container = containerRef.current;
        const handleScroll = (e) => {
            const scrollAmount = e.deltaY;
            const newIndex = currentIndex + (scrollAmount > 0 ? 1 : -1)

            const newIndexWrapped = (newIndex + itemCount) % itemCount
            setCurrentIndex(newIndexWrapped)

            if (container) {
                e.preventDefault()
            }
        }
        container.addEventListener("wheel", handleScroll, { passive: false })
        return () => {
            container.removeEventListener("wheel", handleScroll);
        }
    }, [currentIndex, itemCount, onIndexChange])

    return (
        <WindowWidthDetector>
            {(windowWidth) => (
                <div className="pellicule" ref={containerRef}>
                    <div className="carousel-container">
                        {[...projectList, ...projectList, ...projectList].map((project, index) => (
                            <div
                                key={index}
                                className="projectItem"
                                onClick={() => onIndexChange(index % itemCount)}
                                style={{
                                    transform: `translate(-${currentIndex * (windowWidth < 768 ? 200 : 0)}%, -${currentIndex * (windowWidth < 768 ? 0 : 200)}%)`,
                                    transition: "transform 1.5s ease",
                                    }}>
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="projectImage" />
                                <Image
                                    src={testpelli}
                                    alt="pelli"
                                    className="testpelli" />
                            </div>
                        ))}
                    </div>
                <Cursor />
                </div>
            )}
        </WindowWidthDetector>
    )
}