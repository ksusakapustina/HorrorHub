import { useEffect } from "react";

import "./Kuplinov.scss";
import {
    funnyMoments,
    kuplinovHero,
    kuplinovProfile,
    legendSection,
    walkthroughs,
} from "./kuplinov.data";

const Kuplinov = () => {
    useEffect(() => {
        window.dispatchEvent(new Event("horrorhub:kuplinov-sections-ready"));
    }, []);

    return (
        <main className="kuplinov-page">
            <div className="kuplinov-page__content">
                <section
                    className="kuplinov-hero"
                    aria-labelledby="kuplinov-hero-title"
                    data-dynamic-header-section="true"
                    data-title={kuplinovHero.title}
                    data-subtitle={kuplinovHero.subtitle}
                >
                    <img
                        className="kuplinov-hero__media"
                        src={kuplinovHero.image}
                        alt=""
                        aria-hidden="true"
                    />
                    <div className="kuplinov-hero__overlay" />
                    <div className="kuplinov-hero__content">
                        <p className="horror-kicker">{kuplinovHero.eyebrow}</p>
                        <h1
                            id="kuplinov-hero-title"
                            className="horror-glow-title horror-section-title kuplinov-hero__title"
                        >
                            {kuplinovHero.title}
                        </h1>
                        <p className="horror-body-text kuplinov-hero__subtitle">
                            {kuplinovHero.subtitle}
                        </p>
                    </div>
                </section>

                <section
                    className="kuplinov-profile"
                    aria-labelledby="kuplinov-profile-title"
                    data-dynamic-header-section="true"
                    data-title={kuplinovProfile.name.toUpperCase()}
                >
                    <div className="kuplinov-profile__card">
                        <img
                            className="kuplinov-profile__avatar"
                            src={kuplinovProfile.avatar}
                            alt={kuplinovProfile.name}
                        />

                        <div className="kuplinov-profile__body">
                            <p className="horror-kicker kuplinov-profile__eyebrow">
                                {kuplinovProfile.eyebrow}
                            </p>
                            <h2
                                id="kuplinov-profile-title"
                                className="horror-panel-title kuplinov-profile__name"
                            >
                                {kuplinovProfile.name}
                            </h2>
                            <p className="horror-body-text kuplinov-profile__description">
                                {kuplinovProfile.description}
                            </p>

                            <div className="kuplinov-stats" aria-label="Статистика канала">
                                {kuplinovProfile.stats.map((stat) => (
                                    <div className="kuplinov-stat" key={stat.label}>
                                        <div className="kuplinov-stat__value">{stat.value}</div>
                                        <div className="horror-body-text kuplinov-stat__label">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="kuplinov-walkthroughs"
                    aria-labelledby="kuplinov-walkthroughs-title"
                    data-dynamic-header-section="true"
                    data-title={walkthroughs.title.toUpperCase()}
                    data-subtitle={walkthroughs.subtitle}
                >
                    <header className="kuplinov-section-header">
                        <h2
                            id="kuplinov-walkthroughs-title"
                            className="horror-glow-title horror-section-title"
                        >
                            {walkthroughs.title}
                        </h2>
                        <p className="horror-body-text kuplinov-section-subtitle">
                            {walkthroughs.subtitle}
                        </p>
                    </header>

                    <div className="kuplinov-walkthroughs__grid">
                        {walkthroughs.items.map((item) => (
                            <a
                                className="kuplinov-game-card"
                                key={item.title}
                                href={item.playlistUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Открыть плейлист ${item.title}`}
                            >
                                <img
                                    className="kuplinov-game-card__media"
                                    src={item.image}
                                    alt=""
                                    aria-hidden="true"
                                />
                                <div className="kuplinov-game-card__overlay" />
                                <h3 className="kuplinov-game-card__title">{item.title}</h3>
                            </a>
                        ))}
                    </div>
                </section>

                <section
                    className="kuplinov-moments"
                    aria-labelledby="kuplinov-moments-title"
                    data-dynamic-header-section="true"
                    data-title={funnyMoments.title.toUpperCase()}
                    data-subtitle="Специальные подборки лучших и самых смешных моментов из прохождений хоррор-игр"
                >
                    <header className="kuplinov-section-header">
                        <h2
                            id="kuplinov-moments-title"
                            className="horror-glow-title horror-section-title"
                        >
                            {funnyMoments.title}
                        </h2>
                        <p className="horror-body-text kuplinov-section-subtitle kuplinov-section-subtitle--wide">
                            {funnyMoments.subtitle}
                        </p>
                    </header>

                    <div className="kuplinov-moments__grid">
                        {funnyMoments.items.map((item) => (
                            <a
                                key={item.title}
                                className="kuplinov-moment-card"
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="kuplinov-moment-card__media"
                                    src={item.image}
                                    alt=""
                                    aria-hidden="true"
                                />
                                <h3 className="kuplinov-moment-card__title">{item.title}</h3>
                            </a>
                        ))}
                    </div>
                </section>

                <section
                    className="kuplinov-legend"
                    aria-labelledby="kuplinov-legend-title"
                    data-dynamic-header-section="true"
                    data-title={legendSection.title.toUpperCase()}
                >
                    <header className="kuplinov-section-header">
                        <h2
                            id="kuplinov-legend-title"
                            className="horror-glow-title horror-section-title"
                        >
                            {legendSection.title}
                        </h2>
                    </header>

                    <div className="kuplinov-legend__grid">
                        {legendSection.reasons.map((reason) => (
                            <article className="kuplinov-legend-card" key={reason.title}>
                                <h3 className="horror-panel-title">{reason.title}</h3>
                                <p className="horror-body-text">{reason.description}</p>
                            </article>
                        ))}
                    </div>

                    <blockquote className="kuplinov-quote">
                        <p className="horror-body-text horror-quote-text">{legendSection.quote}</p>
                    </blockquote>
                </section>
            </div>
        </main>
    );
};

export default Kuplinov;
