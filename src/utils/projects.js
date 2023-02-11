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
import StyledComp from '../assets/styled-comp.png'
import Tailwind from '../assets/tailwind.png'
import Firebase from '../assets/firebase.svg'
import Arrival from '../assets/arrival.png'



export const projects = [
    {
        nombre: 'ARRIVAL ECOMMERCE',
        descripcion: 'Arrival es un ecommerce que realicé con el objetivo de poner\nen práctica mis conocimientos en React. También me pareció\ninteresante sumarle la complejidad de tener un diseño\nvistoso y elegante por eso decidí imitar un diseño creado\npor Nizar Ali.\nPosee un carrito funcional, y filtros para los productos.\nUsé Firebase como base de datos, donde cargué muchos productos\ncon distinta información e imágenes para hacer el proyecto más\ndesafiante',
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
]