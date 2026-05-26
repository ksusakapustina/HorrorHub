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
                <div className="header-fixed__bar">
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
            </div>
        </header>
    );
};

export default Header;
