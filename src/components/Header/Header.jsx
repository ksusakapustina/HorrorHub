import { NavLink } from "react-router-dom";

import "./Header.scss";

const navItems = [
    { to: "/main_page", label: "ГЛАВНАЯ" },
    { to: "/myths", label: "МИФЫ" },
    { to: "/true_crime", label: "ТРУ КРАЙМ" },
    { to: "/kuplinov", label: "КУПЛИНОВ" },
];

const Header = () => {
    return (
        <header className="header">
            <div className="header-fixed">
                <NavLink to="/" className="logo" aria-label="Хоррор-Хаб">
                    <span className="red">X</span>
                    <span className="white">X</span>
                </NavLink>
                <nav className="header-nav" aria-label="Основная навигация">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.to} className="header_nav-link">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `header_nav-link-item${isActive ? " is-active" : ""}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="header-scrollable">
                <div className="header-copy">
                    <h1 className="horror-glow-title horror-logo-title">ХОРРОР-ХАБ</h1>
                    <h3 className="horror-body-text header-subtitle">Твой портал в мир ужасов</h3>
                </div>
            </div>
        </header>
    );
};

export default Header;
