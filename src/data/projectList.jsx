// Modele à suivre
//
//  {
//      "id": "",
//      "title": "",
//      "imageUrl": "",
//      "description": [
//          "",
//          "",
//          "",
//          ""
//      ],
//      "technologies": [
//          images importées plus haut
//      ],
//      "link": {
//          "voir le code": {
//              alt: "",
//              image: images importées plus haut,
//              url: ""
//          },
//          "voir le site": {
//              alt: "",
//              image: images importées plus haut,
//              url: ""
//          }
//      }
// }

import api from "/assets/img/technos/api.webp"
import css from "/assets/img/technos/css-3.webp"
import debug from "/assets/img/technos/debug.webp"
import devtools from "/assets/img/technos/devtools.webp"
import figma from "/assets/img/technos/figma.webp"
import github from "/assets/img/technos/github.webp"
import greenIt from "/assets/img/technos/green-it.webp"
import html from "/assets/img/technos/html-5.webp"
import jest from "/assets/img/technos/jest.webp"
import js from "/assets/img/technos/js.webp"
import lighthouse from "/assets/img/technos/lighthouse.webp"
import mongodb from "/assets/img/technos/mongodb.webp"
import react from "/assets/img/technos/react.webp"
import redux from "/assets/img/technos/redux.webp"
import sass from "/assets/img/technos/sass.webp"
import seo from "/assets/img/technos/seo.webp"
import swagger from "/assets/img/technos/swagger.webp"
import voirLeCode from "/assets/img/icons/voirLeCode.webp"
import voirLeSite from "/assets/img/icons/voirLeSite.webp"

export const projectList = [
        {
        "id": "7",
        "title": "Argent Bank",
        "imageUrl": "/assets/img/projects/Argent-Bank.webp",
        "description": [
            "Ce projet consistait à travailler en tant que développeur front-end chez Argent Bank pour mettre en place le tableau de bord des utilisateurs d'une nouvelle banque en ligne.",
            "J'ai respecté les bonnes pratiques du Green Code pour optimiser images et code, assurant une expérience utilisateur optimale.",
            "J'ai également contribué à la conception des routes API pour les transactions selon Swagger, participant ainsi à la réalisation complète du projet."
        ],
        "technologies": [
            html, sass, react, redux, greenIt, api, swagger, github, mongodb
        ],
        "link": {
            "voir le code": {
                alt: "Voir le code",
                image: voirLeCode,
                url: "https://github.com/Kamasian/ArgentBank-website"
            }
        }
    },
    {
        "id": "6",
        "title": "724 Events",
        "imageUrl": "/assets/img/projects/724-Events.webp",
        "description": [
            "Ce projet impliquait la finalisation et le débogage du site vitrine d'une agence événementielle, 724events.",
            "Le site, une page unique, avait été partiellement intégré par un développeur freelance précédent, mais des problèmes et des bugs subsistaient.",
            "La mission consistait à résoudre ces problèmes, à compléter le cahier de recette, et à vérifier que le site fonctionnait correctement conformément aux exigences de l'agence."
        ],
        "technologies": [
            html, css, react, jest, debug, github
        ],
        "link": {
            "voir le code": {
                alt: "Voir le code",
                image: voirLeCode,
                url: "https://github.com/Kamasian/724events"
            }
        }
    },
    {
        "id": "5",
        "title": "Nina Carducci",
        "imageUrl": "/assets/img/projects/Nina-Carducci.webp",
        "description": [
            "Ce projet consistait à proposer des services d'optimisation SEO à Nina Carducci, une photographe.",
            "L'objectif était d'optimiser son site web pour améliorer le référencement et la performance.",
            "Les services proposés comprenaient l'optimisation des images, la modification du code, la mise en place du référencement local et l'ajout de métas pour les réseaux sociaux.",
            "Un rapport d'optimisation a été fourni pour documenter les améliorations apportées."
        ],
        "technologies": [
            html, css, seo, lighthouse, devtools, github
        ],
        "link": {
            "voir le code": {
                alt: "Voir le code",
                image: voirLeCode,
                url: "https://github.com/Kamasian/Nina-Carducci"
            },
            "voir le site": {
                alt: "Voir le site",
                image: voirLeSite,
                url: "https://kamasian.github.io/Nina-Carducci/"
            }
        }
    },
    {
        "id": "4",
        "title": "Kasa",
        "imageUrl": "/assets/img/projects/Kasa.webp",
        "description": [
            "Ce projet visait à moderniser le site web de Kasa, une entreprise de location d'appartements en France, en utilisant React pour développer des composants conformes aux maquettes Figma.",
            "Il a également inclus la mise en place de routes avec React Router, l'utilisation de Sass pour la stylisation, y compris des animations CSS, pour améliorer l'expérience utilisateur.",
            "En fin de compte, le projet a renforcé la position de Kasa dans la location immobilière grâce à une interface web modernisée."
        ],
        "technologies": [
            html, sass, react, figma, github
        ],
        "link": {
            "voir le code": {
                alt: "Voir le code",
                image: voirLeCode,
                url: "https://github.com/Kamasian/Kasa"
            }
        }
    },
    {
        "id": "3",
        "title": "Sophie Bluel",
        "imageUrl": "/assets/img/projects/Sophie-Bluel.webp",
        "description": [
            "Ce projet a été une étape clé de ma carrière de développeur front-end chez ArchiWebos.",
            "J'ai contribué au site portfolio d'une architecte d'intérieur en développant la page de présentation de ses travaux, en créant une page de connexion pour l'administrateur et en concevant une modale d'upload de médias.",
            "J'ai créé des pages web interactives avec JavaScript, mettant en avant les réalisations de l'architecte avec sécurité et facilité d'upload."
        ],
        "technologies": [
            html, css, js, api, swagger, figma, github
        ],
        "link": {
            "voir le code": {
                alt: "Voir le code",
                image: voirLeCode,
                url: "https://github.com/Kamasian/Portfolio-Architecte-Sophie-Bluel"
            }
        }
    },
    {
        "id": "2",
        "title": "Print-It",
        "imageUrl": "/assets/img/projects/Print-It.webp",
        "description": [
            "Ce projet avait pour but d'initier les apprenants au JavaScript en les guidant dans la création d'un carrousel interactif pour un site web.",
            "L'approche a commencé par l'ajout de flèches de navigation avec des Event Listeners.",
            "Ensuite, des bullet points ont été intégrés pour indiquer la diapositive actuelle, permettant la modification du slide au clic sur les boutons de navigation, tout en garantissant un défilement infini.",
            "Le projet met en valeur ma compétence à créer un carrousel JavaScript fonctionnel pour améliorer l'expérience utilisateur."
        ],
        "technologies": [
            html, css, js, github
        ],
        "link": {
            "voir le code": {
                alt: "Voir le code",
                image: voirLeCode,
                url: "https://github.com/Kamasian/Print-it-"
            },
            "voir le site": {
                alt: "Voir le site",
                image: voirLeSite,
                url: "https://kamasian.github.io/Print-it-/"
            }
        }
    },
    {
        "id": "1",
        "title": "Ohmyfood",
        "imageUrl": "/assets/img/projects/Ohmyfood.webp",
        "description": [
            "Ce projet consistait à créer l'interface d'un site mobile avec des animations CSS pour Ohmyfood.",
            `En adoptant une approche "mobile first", j'ai permis aux clients de créer leurs menus de restaurant.`,
            `Ce projet illustre ma capacité à concevoir des sites "mobile first" tout en intégrant des animations CSS, tout en respectant les exigences du client.`,
            "Le résultat final était un site réactif agrémenté d'animations CSS élégantes."
        ],
        "technologies": [
            html, sass, figma, github
        ],
        "link": {
            "voir le code": {
                alt: "Voir le code",
                image: voirLeCode,
                url: "https://github.com/Kamasian/Ohmyfood"
            },
            "voir le site": {
                alt: "Voir le site",
                image: voirLeSite,
                url: "https://kamasian.github.io/Ohmyfood/"
            }
        }
    },
    {
        "id": "0",
        "title": "Booki",
        "imageUrl": "/assets/img/projects/Booki.webp",
        "description": [
            "Ce projet consistait à créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS.",
            "Il a été réalisé en collaboration avec l'équipe de Booki et a été mis à jour pour simplifier le processus de développement.",
            "Mon rôle était d'intégrer l'interface du site en respectant les spécifications fournies par l'équipe.",
            "Le résultat est une page d'accueil attrayante permettant aux utilisateurs de trouver des hébergements et des activités."
        ],
        "technologies": [
            html, css, figma, github
        ],
        "link": {
            "voir le code": {
                alt: "Voir le code",
                image: voirLeCode,
                url: "https://github.com/Kamasian/Booki"
            },
            "voir le site": {
                alt: "Voir le site",
                image: voirLeSite,
                url: "https://kamasian.github.io/Booki/"
            }
        }
    }
]