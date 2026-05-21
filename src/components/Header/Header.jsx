import { Link } from "react-router-dom";
// import HeaderScroll from '../../assets/images/HeaderScroll.png'

import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header-fixed">
                <Link to="/" className="logo">
                    <span className="red">X</span>
                    <span className="white">X</span>
                </Link>
                <nav>
                    <ul>
                        <li className="header_nav-link">
                            <Link to="/main_page" className="header_nav-link-item">
                                ГЛАВНАЯ
                            </Link>
                        </li>
                        <li className="header_nav-link">
                            <Link to="/myths" className="header_nav-link-item">
                                МИФЫ
                            </Link>
                        </li>
                        <li className="header_nav-link">
                            <Link to="/true_crime" className="header_nav-link-item">
                                ТРУ КРАЙМ
                            </Link>
                        </li>
                        <li className="header_nav-link">
                            <Link to="/kuplinov" className="header_nav-link-item">
                                КУПЛИНОВ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                className="header-scrollable"
                // style={{backgroundImage: `url(${HeaderScroll})`}}
            >
                <h1>ХОРРОР-ХАБ</h1>
                <h3>Твой портал в мир ужасов</h3>
            </div>
        </header>
    );
};

export default Header;