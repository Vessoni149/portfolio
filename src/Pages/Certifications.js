import Certificate from "../Components/Certificate";
import cert1 from '../assets/certificates/computacionBasica.jpg';
import cert2 from '../assets/certificates/preworkWindows.jpg';
import cert3 from '../assets/certificates/diploma-pensamiento-logico-1-algoritmosYDiagramasDeFlujo_page-0001.jpg';
import cert4 from '../assets/certificates/pensamientoLogicoEstructuras.jpg';
import cert5 from '../assets/certificates/pensamientoLogicoLenguajes.jpg';
import cert6 from '../assets/certificates/introWeb.jpg';
import cert7 from '../assets/certificates/programacionBasica.jpg';
import cert8 from '../assets/certificates/diploma-frameworks-javascript_page-0001.jpg';
import cert9 from '../assets/certificates/introReact.jpg';
import cert10 from '../assets/certificates/diploma-mobile-first_page-0001.jpg';
import cert11 from '../assets/certificates/git&github.jpg';
import cert12 from '../assets/certificates/diploma-solidity-celo.jpg';
import cert13 from '../assets/certificates/diploma-fundamentos-node.jpg';
import cert14 from '../assets/certificates/diploma-java-basico.jpg';
import cert15 from '../assets/certificates/diploma-java-oop.jpg';
import cert16 from '../assets/certificates/TodoCode_SpringBoot.jpg';
import cert17 from '../assets/certificates/microservicios.jpg';
import cert18 from '../assets/certificates/No-country.jpg';
import cert19 from '../assets/certificates/No-country2.jpg';

function Certifications(){

    const certificates = [
        { image: cert1, title: "Computación básica" },
        { image: cert2, title: "Configuración de entorno de desarrollo en Windows" },
        { image: cert3, title: "Algoritmos y diagrama de flujos" },
        { image: cert4, title: "Funciones y estructuras de control" },
        { image: cert5, title: "Lenguajes de programación" },
        { image: cert6, title: "Introducción a la web" },
        { image: cert7, title: "Programación básica" },
        { image: cert8, title: "Frameworks de JavaScript" },
        { image: cert9, title: "Introducción a React" },
        { image: cert10, title: "Diseño responsive - mobile first" },
        { image: cert11, title: "Git y Github" },
        { image: cert12, title: "Solidity con Celo" },
        { image: cert13, title: "Fundamentos de Node.js" },
        { image: cert14, title: "Introducción a Java SE" },
        { image: cert15, title: "Curso de Java SE Orientado a Objetos" },
        { image: cert16, title: "Curso de SpringBoot" },
        { image: cert17, title: "Microservicios con Spring Cloud"},
        { image: cert18, title: "No-Country work simulation (october)"},
        { image: cert19, title: "No-Country work simulation (november)"},
    ];

    return (
        <main className="container mx-auto max-width pt-10 mb-20">
            <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                Certificates
            </h1>
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {certificates.map((certificate, index) => (
                <Certificate 
                    key={index} 
                    image={certificate.image} 
                    title={certificate.title} 
                />
                ))}
            </div>
            </main>
        );
}

export default Certifications;