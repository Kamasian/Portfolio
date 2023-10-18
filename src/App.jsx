import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WindowWidthDetector from "./components/WindowWidthDetector/WindowWidthDetector"
import NoiseCanvas from "./components/Loader/NoiseCanvas/NoiseCanvas"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Oeuvres from "./pages/Oeuvres/Oeuvres"
import Contact from "./pages/Contact/Contact"
import Loader from "./components/Loader/Loader"
import Loader2 from "./components/Loader2/Loader2"
import SkipButton from "./components/SkipButton/SkipButton"
import AudioPlayer from "./components/AudioPlayer/AudioPlayer"
import music from "./assets/song-1.mp3"

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [isLoading2, setIsLoading2] = useState(false)
    const [contentVisible, setContentVisible] = useState(false)
    const [skipLoading, setSkipLoading] = useState(false)

    useEffect(() => {
        if (skipLoading) {
            setIsLoading(null)
            setIsLoading2(null)
            setContentVisible(true)
        } else {
            setTimeout(() => {
                setIsLoading(null)
                setIsLoading2(true)
                setTimeout(() => {
                    setIsLoading2(null)
                    setContentVisible(true)
                }, 4000)
            }, 9600)
        }
    }, [skipLoading])

    const handleSkipLoading = () => {
        setSkipLoading(true)
    };

    return (
        <WindowWidthDetector>
            {(windowWidth) => (
                <BrowserRouter>
                    <NoiseCanvas
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                    {windowWidth < 768 ? (
                        <>
                            {isLoading && !skipLoading && <Loader />}
                            {!skipLoading && isLoading2 && <Loader2 />}
                            {contentVisible && (
                                <>
                                    <Header />
                                    <Home />
                                    <Oeuvres />
                                    <Contact />
                                    <Footer />
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {isLoading && !skipLoading && <Loader />}
                            {!skipLoading && isLoading2 && <Loader2 />}
                            {contentVisible && (
                                <>
                                    <Header />
                                    <Routes>
                                        <Route
                                            path="/"
                                            element={<Home />}
                                        />
                                        <Route
                                            path="/oeuvres"
                                            element={<Oeuvres />}
                                        />
                                        <Route
                                            path="/contact"
                                            element={<Contact />}
                                        />
                                    </Routes>
                                    <Footer />
                                </>
                            )}
                        </>
                    )}
                    {(isLoading || isLoading2) && !skipLoading ? (
                        <SkipButton onClick={handleSkipLoading} />
                    ) : null}
                    <AudioPlayer audioSource={music} />
                </BrowserRouter>
            )}
        </WindowWidthDetector>
    )
}