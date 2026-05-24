import './Footer.scss'

const Footer = () => {
   const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className='footer-info'>
                © {currentYear} Хоррор-Хаб – Все права защищены | Сделано с ❤️ для любителей ужасов
                <br />
                contact@horror-hub.ru | Telegram: @horror_hub_official | horror-hub.ru
            </p>
        </footer>
    );
}

export default Footer;
