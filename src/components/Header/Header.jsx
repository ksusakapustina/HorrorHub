import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Header.scss";

const navItems = [
    { to: "/main_page", label: "ГЛАВНАЯ" },
    { to: "/myths", label: "МИФЫ" },
    { to: "/true_crime", label: "ТРУ КРАЙМ" },
    { to: "/kuplinov", label: "КУПЛИНОВ" },
];

const dynamicHeaderByRoute = {
    "/": {
        title: "ДОБРО ПОЖАЛОВАТЬ В БЕЗДНУ",
        subtitle: "Твой портал в мир ужасов",
    },
    "/main_page": {
        title: "ДОБРО ПОЖАЛОВАТЬ В БЕЗДНУ",
        subtitle: "Твой портал в мир ужасов",
    },
    "/kuplinov": {
        title: "КУПЛИНОВ",
        subtitle: "Легенда русскоязычного хоррор-летсплея",
    },
    "/true_crime": {
        title: "ТРУ КРАЙМ",
        subtitle: "Реальные истории, которые\nстрашнее любого вымысла",
    },
};

const Header = () => {
    const location = useLocation();
    const defaultDynamicHeading = dynamicHeaderByRoute[location.pathname] ?? dynamicHeaderByRoute["/kuplinov"];
    const isDynamicHeaderRoute = Boolean(dynamicHeaderByRoute[location.pathname]);
    const [dynamicHeading, setDynamicHeading] = useState({
        routePath: location.pathname,
        ...defaultDynamicHeading,
    });

    useEffect(() => {
        if (!isDynamicHeaderRoute) {
            return undefined;
        }

        let observer;
        let frameId = 0;
        let cleanupResizeListener = () => {};

        const sectionsSelector = "[data-dynamic-header-section='true']";

        const initObserver = () => {
            const sectionNodes = Array.from(document.querySelectorAll(sectionsSelector));

            if (sectionNodes.length === 0) {
                return false;
            }

            const updateFromSection = (section) => {
                const { title, subtitle = "" } = section.dataset;
                setDynamicHeading((current) =>
                    current.routePath === location.pathname &&
                    current.title === title &&
                    current.subtitle === subtitle
                        ? current
                        : { routePath: location.pathname, title, subtitle }
                );
            };

            const pickActiveSection = () => {
                const viewportAnchor = window.innerHeight * 0.34;
                const candidates = sectionNodes.filter((section) => {
                    const rect = section.getBoundingClientRect();
                    return rect.bottom > 0 && rect.top < window.innerHeight;
                });

                if (candidates.length === 0) {
                    return;
                }

                let closestSection = candidates[0];
                let closestScore = Number.POSITIVE_INFINITY;

                candidates.forEach((section) => {
                    const rect = section.getBoundingClientRect();
                    const anchorInsideSection =
                        rect.top <= viewportAnchor && rect.bottom >= viewportAnchor;
                    const score = anchorInsideSection
                        ? 0
                        : Math.abs(rect.top - viewportAnchor);

                    if (score < closestScore) {
                        closestScore = score;
                        closestSection = section;
                    }
                });

                updateFromSection(closestSection);
            };

            observer = new IntersectionObserver(pickActiveSection, {
                root: null,
                rootMargin: "-35% 0px -50% 0px",
                threshold: [0, 0.15, 0.35, 0.55, 1],
            });

            sectionNodes.forEach((section) => observer.observe(section));
            pickActiveSection();
            window.addEventListener("resize", pickActiveSection);
            cleanupResizeListener = () => window.removeEventListener("resize", pickActiveSection);
            return true;
        };

        const tryInit = () => {
            if (!initObserver()) {
                frameId = window.requestAnimationFrame(tryInit);
            }
        };

        const handleSectionsReady = () => {
            if (observer) {
                observer.disconnect();
                cleanupResizeListener();
            }
            initObserver();
        };

        tryInit();
        window.addEventListener("horrorhub:dynamic-sections-ready", handleSectionsReady);

        return () => {
            window.removeEventListener("horrorhub:dynamic-sections-ready", handleSectionsReady);
            window.cancelAnimationFrame(frameId);
            if (observer) {
                observer.disconnect();
            }
            cleanupResizeListener();
        };
    }, [isDynamicHeaderRoute, location.pathname]);

    const resolvedHeading =
        dynamicHeading.routePath === location.pathname ? dynamicHeading : { routePath: location.pathname, ...defaultDynamicHeading };

    return (
        <header className={`header${isDynamicHeaderRoute ? " header--compact" : ""}`}>
            <div className={`header-fixed${isDynamicHeaderRoute ? " header-fixed--dynamic" : ""}`}>
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

                {isDynamicHeaderRoute ? (
                    <div className="header-route-title" aria-live="polite" key={resolvedHeading.title}>
                        <p className="header-route-title__title">{resolvedHeading.title}</p>
                        {resolvedHeading.subtitle ? (
                            <p className="header-route-title__subtitle">{resolvedHeading.subtitle}</p>
                        ) : null}
                    </div>
                ) : null}
            </div>

            {!isDynamicHeaderRoute ? (
                <div className="header-scrollable">
                    <div className="header-copy">
                        <div className="horror-glow-title horror-logo-title">ХОРРОР-ХАБ</div>
                        <h3 className="horror-body-text header-subtitle">Твой портал в мир ужасов</h3>
                    </div>
                </div>
            ) : null}
        </header>
    );
};

export default Header;
