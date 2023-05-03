import Bootstrap from '../assets/bootstrap.svg'
import CSS from '../assets/css.svg'
import Git from '../assets/git.svg'
import Github from '../assets/github.svg'
import HTML from '../assets/html.svg'
import JS from '../assets/js.svg'
import NextJS from '../assets/nextjs.svg'
import ReactIcon from '../assets/react.svg'
import Redux from '../assets/redux.svg'
import Sass from '../assets/sass.svg'
import Framer from '../assets/framermotion.webp'
import StyledComp from '../assets/styled-comp.png'
import Tailwind from '../assets/tailwind.png'
import Typescript from '../assets/typescript.svg'
import Firebase from '../assets/firebase.svg'
import Arrival from '../assets/projects/arrival.webp'
import HBO from '../assets/projects/hbomax.webp'
import DeLaCasa from '../assets/projects/delacasa.webp'
import Disney from '../assets/projects/disney.webp'
import Portfolio from '../assets/projects/portfolio.webp'
import Basement from '../assets/projects/basement.webp'
import Notter from '../assets/projects/notter.webp'
import Aerolab from '../assets/projects/aerolab.webp'
import Nacion from '../assets/projects/nacion.webp'
import Quizz from '../assets/projects/quizz.webp'
import ProductPage from '../assets/projects/productpage.webp'
import Mentor from '../assets/projects/mentor.webp'




export const projects = [
    {
        nombre: 'ARRIVAL ECOMMERCE',
        descripcion: 'Arrival es un ecommerce que realicé con el objetivo de poner\nen práctica mis conocimientos en React. También me pareció\ninteresante sumarle la complejidad de tener un diseño\nvistoso.\nPosee un carrito funcional, y filtros para los productos.\nUsé Firebase como base de datos, donde cargué muchos productos\ncon distinta información e imágenes para hacer el proyecto más\ndesafiante.',
        tecnologias:[
            {
                nombre: 'React',
                imagen: ReactIcon
            },
            {
                nombre: 'Redux',
                imagen: Redux
            },
            {
                nombre: 'Styled Components',
                imagen: StyledComp
            },
            {
                nombre: 'Firebase',
                imagen: Firebase
            },
        ],
        imagen: Arrival,
        website:'https://ecommerce-react-arrival.web.app/',
        code:'https://github.com/MartinMorici/ecommerce-react'
    },
    {
        nombre: 'DISNEY PLUS CLONE',
        descripcion: 'Realicé este clon de Disney+ con el fin de practicar en un proyecto real, presentándose como desafío no solo copiar los estilos tal cual se ven, si no también la funcionalidad. Por eso decidí incorporar autenticación con Firebase Auth, Firestore como base de datos y herramientas como Redux y Redux-persist para persistir el state. Un proyecto muy desafiante que disfruté mucho hacer y que terminó quedando muy bien. ',
        tecnologias:[
            {
                nombre: 'React',
                imagen: ReactIcon
            },
            {
                nombre: 'Redux',
                imagen: Redux
            },
            {
                nombre: 'Styled Components',
                imagen: StyledComp
            },
            {
                nombre: 'Firestore',
                imagen: Firebase
            },
            {
                nombre: 'Authentication',
                imagen: Firebase
            },
        ],
        imagen: Disney,
        website:'https://disney-clone-b8924.web.app/',
        code:'https://github.com/MartinMorici/disney-clone'
    },
    {
        nombre: 'HBO CLONE',
        descripcion: 'Al igual que en el Clon de Disney+ mi objetivo era practicar en aplicaciones actuales, pero esta vez agregando nuevas tecnologías aprendidas y retomando la ContextAPI de React. Fué mi primer proyecto incorporando NextJS y Tailwind, ambas herramientas me gustaron muchísimo. También fue un proyecto muy desafiante porque en lugar de utilizar Firebase como en anteriores proyectos, hice uso de la API TMDB (The Movie Database) a la cual realice muchísimos requests para obtener toda la información necesaria, valiendome de NextJS y sus ventajas para que la web sea más rápida y funcional.',
        tecnologias:[
            {
                nombre: 'React',
                imagen: ReactIcon
            },
            {
                nombre: 'NextJS',
                imagen: NextJS
            },
            {
                nombre: 'Tailwind',
                imagen: Tailwind
            },
            {
                nombre: 'Authentication',
                imagen: Firebase
            },
        ],
        imagen: HBO,
        website:'https://hbomax-clon-nextjs.vercel.app/',
        code:'https://github.com/MartinMorici/hbomax-clon-nextjs'
    },
    {
        nombre: 'PORTFOLIO',
        descripcion: 'Mi idea para este portfolio era realizar una web sencilla y prolija con la información adecuada pero que a la vez tenga algunos toques que lo vuelvan único, por eso incursioné un poco con Framer Motion y realicé todos estos efectos para el cursor que me gustaron muchísimo. También continue reforzando con Tailwind y utilicé un poco de ContextAPI para el estado del cursor.',
        tecnologias:[
            {
                nombre: 'React',
                imagen: ReactIcon
            },
            {
                nombre: 'Tailwind',
                imagen: Tailwind
            },
            {
                nombre: 'Framer Motion',
                imagen: Framer
            },
        ],
        imagen: Portfolio,
        website:'#',
        code:'https://github.com/MartinMorici/portfolio'
    },
    {
        nombre: 'DE LA CASA',
        descripcion: 'Uno de mis primeros grandes proyectos. Hecho con Javascript Vanilla, un poco de JQuery, SASS para los estilos y un poco de Bootstrap. Es un ecommerce que realicé para el emprendimiento de un amigo. Posee un carrito funcional.',
        tecnologias:[
            {
                nombre: 'JavaScript',
                imagen: JS
            },
            {
                nombre: 'Bootstrap',
                imagen: Bootstrap
            },
            {
                nombre: 'SASS',
                imagen: Sass
            },
        ],
        imagen: DeLaCasa,
        website:'https://martinmorici.github.io/DeLaCasa/',
        code:'https://github.com/MartinMorici/DeLaCasa'
    },
]

export const otherProjects= [
    {
        nombre: 'BASEMENT',
        descripcion: 'Ecommerce pequeño donde se pueden agregar y quitar productos al carrito. La estetica de esta web es muy buena, pasa a mirarla!',
        tecnologias:[
            {
                nombre: 'NextJS',
                imagen: NextJS
            },
            {
                nombre:'Typescript',
                imagen: Typescript
            },
            {
                nombre: 'Tailwind',
                imagen: Tailwind
            }
        ],
        imagen: Basement,
        website:'https://basement-rho.vercel.app/',
        code:'https://github.com/MartinMorici/basement'
    },
    {
        nombre: 'AEROLAB',
        descripcion: 'Una aplicación ecommerce que hace uso de una API para traer productos y comprarlos. Se pueden agregar monedas al usuario para comprar más productos.',
        tecnologias:[
            {
                nombre: 'NextJS',
                imagen: NextJS
            },
            {
                nombre:'Typescript',
                imagen: Typescript
            },
            {
                nombre: 'ContextAPI',
                imagen: ReactIcon
            },
            {
                nombre: 'Tailwind',
                imagen: Tailwind
            }
        ],
        imagen: Aerolab,
        website:'https://aerolab-challenge-blush-nine.vercel.app/',
        code:'https://github.com/MartinMorici/aerolab-challenge'
    },
    {
        nombre: 'NOTTER',
        descripcion: 'Una aplicación de notas donde puedes agregar, quitar y archivar notas. Tambien pueden editarse e incluso cambiarles el color =)',
        tecnologias:[
            {
                nombre:'Typescript',
                imagen: Typescript
            },
            {
                nombre: 'ContextAPI',
                imagen: ReactIcon
            },
            {
                nombre: 'Tailwind',
                imagen: Tailwind
            }
        ],
        imagen: Notter,
        website:'https://ensolvers-challenge.vercel.app/',
        code:'https://github.com/MartinMorici/ensolvers-challenge'
    },
    {
        nombre: 'BLACKBOX QUIZZ',
        descripcion: 'Un juego de preguntas que utiliza una API. Indica cual es la correcta cuando te equivocas y al final te da el puntaje obtenido. ',
        tecnologias:[
            {
                nombre:'Typescript',
                imagen: Typescript
            },
            {
                nombre: 'SASS',
                imagen: Sass
            }
        ],
        imagen: Quizz,
        website:'https://blackbox-vision-challenge-orcin.vercel.app/',
        code:'https://github.com/MartinMorici/blackbox-vision-challenge'
    },
    {
        nombre: 'LA NACIÓN CHALLENGE',
        descripcion: 'Challenge de React realizado para La Nación. Replicando layout escritorio y mobile. Productos traidos de un JSON, junto con sus categorías',
        tecnologias:[
            {
                nombre: 'NextJS',
                imagen: NextJS
            },
            {
                nombre:'Typescript',
                imagen: Typescript
            },
            {
                nombre: 'Tailwind',
                imagen: Tailwind
            }
        ],
        imagen: Nacion,
        website:'https://lanacion-challenge.vercel.app/',
        code:'https://github.com/MartinMorici/lanacion-challenge'
    },

]