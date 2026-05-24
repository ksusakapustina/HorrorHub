import { useEffect } from "react";
import { Link } from "react-router-dom";
import mythsImg from "../../assets/images/myths.jpg";
import trueCrimeImg from "../../assets/images/truecrime.jpg";
import kuplinovImg from "../../assets/images/games.png";

import "./MainPage.scss";

const sections = [
    {
        to: "/myths",
        image: mythsImg,
        title: "Забытые легенды",
        alt: "Забытые легенды",
        description:
            "Погрузись в мир древних мифов и городских легенд, которые заставят тебя оглядываться по ночам. От историй призраков до жутких существ.",
    },
    {
        to: "/true_crime",
        image: trueCrimeImg,
        title: "Реальные дела",
        alt: "Реальные дела",
        description:
            "Документальные истории самых шокирующих преступлений в истории. Факты, которые страшнее любого вымысла. Улики, показания, развязки.",
    },
    {
        to: "/kuplinov",
        image: kuplinovImg,
        title: "Хоррор-игры",
        alt: "Хоррор-игры",
        description:
            "Обзоры и прохождения самых страшных игр от Дмитрия Куплинова. Лучшие летсплеи, пугающие моменты и незабываемые впечатления.",
    },
];

const MainPage = () => {
    useEffect(() => {
        window.dispatchEvent(new Event("horrorhub:dynamic-sections-ready"));
    }, []);

    return (
        <main>
            <div className="mainpage">
                <section
                    className="mainpage-intro"
                    data-dynamic-header-section="true"
                    data-title="ДОБРО ПОЖАЛОВАТЬ В БЕЗДНУ"
                    data-subtitle="Твой портал в мир ужасов"
                >
                    <p className="section-kicker horror-kicker">Подборка направлений</p>
                    <h1 className="horror-glow-title horror-section-title">Добро пожаловать в бездну</h1>
                </section>

                <section
                    className="mainpage-directions"
                    data-dynamic-header-section="true"
                    data-title="ПОДБОРКА НАПРАВЛЕНИЙ"
                    data-subtitle="Мифы, тру крайм и хоррор-игры в одном пространстве"
                >
                    <div className="main-discription">
                        <p className="horror-body-text horror-lead-text">
                            Хоррор-Хаб - это место, где собраны самые жуткие мифы, реальные
                            криминальные истории и обзоры хоррор-игр от легендарного
                            Куплинова.
                        </p>
                    </div>

                    <div className="info-cards">
                        {sections.map((section) => (
                            <Link to={section.to} className="info-card" key={section.to}>
                                <div className="image-card">
                                    <img src={section.image} alt={section.alt} />
                                </div>
                                <div className="info-card-copy">
                                    <h2 className="horror-panel-title horror-card-title">{section.title}</h2>
                                    <p className="horror-body-text">{section.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section
                    className="discription-section"
                    data-dynamic-header-section="true"
                    data-title="ПОЧЕМУ ХОРРОР?"
                >
                    <p className="section-kicker horror-kicker">Почему это работает</p>
                    <h2 className="horror-glow-title horror-section-title">Почему хоррор?</h2>

                    <div className="scary-quote">
                        <blockquote>
                            <p className="horror-body-text horror-quote-text">
                                «Страх – самое древнее и сильное из человеческих чувств,
                                а самый древний и самый сильный страх – страх неведомого.
                                Хоррор позволяет нам переживать его в безопасном пространстве,
                                заставляя чувствовать себя живыми как никогда прежде.»
                            </p>
                        </blockquote>
                    </div>

                    <div className="scary-discription">
                        <div className="info-block">
                            <h3 className="horror-panel-title">Зачем нам нужен страх?</h3>
                            <p className="horror-body-text">
                                Учёные доказали: контролируемый стресс от хоррора
                                снижает тревожность в реальной жизни. Адреналиновый всплеск
                                – это естественный антидепрессант. Когда мы смотрим хоррор
                                или играем в него, мозг тренирует реакцию на опасность,
                                не подвергаясь реальному риску.
                            </p>
                        </div>

                        <div className="info-block">
                            <h3 className="horror-panel-title">Хоррор в культуре</h3>
                            <p className="horror-body-text">
                                От «Франкенштейна» Мэри Шелли и Ктулху Говарда Лавкрафта
                                до современных инди-хорроров – жанр ужасов эволюционировал
                                вместе с обществом. Каждая эпоха рождала свои уникальные
                                страхи: от страха перед неизвестным до страха перед технологиями.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default MainPage;
