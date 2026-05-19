import './Footer.css'

const Footer = () => {
    currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className='footer-info'>
                Ⓒ {currentYear} Хоррор-Хаб - Все права защищены | Сделано с ❤️ для любителей ужасов
            </p>
            // МБ, ДОБАВИТЬ КОНТАКТНУЮ ИНФОРМАЦИЮ
        </footer>
    );
}

export default Footer;
