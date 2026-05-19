import {Link} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (      
        <header className="header">
            <a href="/" className="logo">
                <span className="red">X</span>
                <span className="white">X</span>
            </a>                
            <nav>
                <ul>
                    <li className="header_nav-link">
                        <Link
                            to="/main_page"
                            className="header_nav-link-item"
                        >
                            ГЛАВНАЯ
                        </Link>
                    </li>
                    <li className="header_nav-link">
                        <Link
                            to="/myths"
                            className="header_nav-link-item"
                        >
                            МИФЫ                           
                        </Link>
                    </li>
                    <li className="header_nav-link">
                        <Link
                            to="/true_crime"
                            className="header_nav-link-item">
                                ТРУ КРАЙМ
                        </Link>
                    </li>
                    <li className="header_nav-link">
                        <Link
                            to="/kuplinov"
                            className="header_nav-link-item">
                                КУПЛИНОВ
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
