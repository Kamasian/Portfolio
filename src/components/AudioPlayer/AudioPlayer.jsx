import React, { useState, useRef } from "react"
import play from "../../assets/img/icons/play.gif"
import pause from "../../assets/img/icons/pause.webp"

export default function AudioPlayer({ audioSource }) {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
        const audio = audioRef.current

        if (isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }

        setIsPlaying(!isPlaying)
    }

    return (
        <div className="testttt">
            <audio
                ref={audioRef}
                src={audioSource} />
            <button
                className="audioPlayer"
                onClick={togglePlay}>
                <img
                    src={isPlaying ? play : pause}
                    alt={isPlaying ? "Lecture" : "Pause"} />
            </button>
        </div>
    )
}