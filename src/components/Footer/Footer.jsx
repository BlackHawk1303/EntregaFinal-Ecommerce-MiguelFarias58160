import './Footer.module.css';
import { Icon } from '@iconify/react';
import hellfishImage from "./assets/hellfish.png";

const Footer = () => {

return (
    <footer className="main-content">
    <h3>Sígueme en mis redes sociales</h3>
    <div className="container-redes">
        <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon icon="mdi:instagram" style={{ fontSize: '34px' }} />
        </a>
        <a
        href="https://www.linkedin.com/in/miguel-%C3%A1ngel-farias-garcia-b050aa263/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Icon icon="mdi:linkedin" style={{ fontSize: '34px' }} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
        <Icon icon="ic:baseline-whatsapp" style={{ fontSize: '34px' }} />
        </a>
    </div> 

      {/* Scripts para Bootstrap e Iconify */}
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
    ></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.3/iconify-icon.min.js"></script>

    <img src={hellfishImage} alt="Hellfish" className="class-icono-footer" />
    Sitio/Portafolio &copy; Creado por MiguelFarias.
    <img src={hellfishImage} alt="Hellfish" className="class-icono-footer" />
    </footer>
);
};

export default Footer;