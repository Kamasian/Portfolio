import { useState, useEffect } from "react"

const CustomCursor = () => {
    const cursorSize = 30
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = (e) => {
        const windowWidth = window.innerWidth - cursorSize
        const windowHeight = window.innerHeight - cursorSize
        let newX = e.pageX
        let newY = e.pageY

        if (newX < cursorSize / 2) {
            newX = cursorSize / 2
        } else if (newX > windowWidth) {
            newX = windowWidth;
        }
        if (newY < cursorSize / 2) {
            newY = cursorSize / 2
        } else if (newY > windowHeight) {
            newY = windowHeight
        }
        setPosition({ x: newX, y: newY })
        }
        window.addEventListener("mousemove", onMouseMove)
        return () => {
            window.removeEventListener("mousemove", onMouseMove)
        }
    }, [])

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}>
        </div>
    )
}

export default CustomCursor