import { useState, useEffect } from "react"
import Paragraph from "../../components/Paragraph/Paragraph"
import Image from "../../components/Image/Image"
import imagesHome from "../../data/imagesHome"

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesHome.length)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <main
            className="mainHome"
            id="mainHome">
            
            <div className="presentationText">
                <h2>JokerDev, Développeur Front-End</h2>
                <Paragraph
                    text="Passionné par de nombreux domaines depuis toujours," />
                <Paragraph
                    text="l'informatique prend une place prépondérante dans ma vie." />
                <Paragraph
                    text="Je me dirige donc vers le développement informatique, car cela correspond à mes ambitions." />
                <Paragraph
                // text="Faire des animations, obtenir un résultat concret rapidement, c'est extrêmement satisfaisant !" />
                    text="En formation chez OpenClassRooms pendant 9 mois, ce sera une première étape." />
                <Paragraph
                    text="Après le HTML, le CSS, JavaScript et React, j'ai hâte d'approfondir mes connaissances et d'en découvrir encore plus." />
                <Paragraph
                    text="Pour le reste, je vous invite à me contacter, je ne mords pas (ne vous fiez pas à ce que vous pouvez voir à droite ^^)." />
            </div>
            <div className="presentationImg">
                {imagesHome.map((image, index) => (
                    <Image
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className={index === currentIndex ? 'imageActive' : ''}
                    />
                ))}
            </div>
        </main>
    )
}