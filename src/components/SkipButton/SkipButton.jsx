import React from "react"

export default function SkipButton({ onClick }) {
    return (
        <button
            className="skipButton"
            onClick={onClick}>
            Passer
        </button>
    )
}