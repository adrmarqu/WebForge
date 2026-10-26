import './Footer.scss';

const Footer = () =>
{
    const year = new Date().getFullYear();

    return (
    <footer>
        <p>Diseñado y desarrollado por <strong>Adrià Márquez</strong></p>
        <p>&copy; {year} - Todos los derechos reservados.</p>
    </footer>
    );
};

export default Footer;