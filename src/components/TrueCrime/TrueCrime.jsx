import { useEffect } from "react";

import "./TrueCrime.scss";
import { famousCases, russianCases, trueCrimeHero, trueCrimeIntro, trueCrimeQuote } from "./trueCrime.data";

const TrueCrime = () => {
    useEffect(() => {
        window.dispatchEvent(new Event("horrorhub:dynamic-sections-ready"));
    }, []);

    return (
        <main className="true-crime-page">
            <div className="true-crime-page__content">
                <section
                    className="true-crime-hero"
                    aria-labelledby="true-crime-title"
                    data-dynamic-header-section="true"
                    data-title={trueCrimeHero.title}
                    data-subtitle={trueCrimeHero.subtitle}
                >
                    <img
                        className="true-crime-hero__image"
                        src={trueCrimeHero.image}
                        alt=""
                        aria-hidden="true"
                    />
                    <div className="true-crime-hero__overlay" />
                    <div className="true-crime-hero__content">
                        <h1
                            id="true-crime-title"
                            className="horror-glow-title horror-section-title true-crime-hero__title"
                        >
                            {trueCrimeHero.title}
                        </h1>
                        <p className="horror-body-text true-crime-hero__subtitle">
                            {trueCrimeHero.subtitle}
                        </p>
                    </div>
                </section>

                <section
                    className="true-crime-intro"
                    aria-labelledby="true-crime-intro-title"
                    data-dynamic-header-section="true"
                    data-title={trueCrimeIntro.title.toUpperCase()}
                >
                    <div className="true-crime-intro__inner">
                        <img
                            className="true-crime-intro__image"
                            src={trueCrimeIntro.image}
                            alt={trueCrimeIntro.imageAlt}
                        />
                        <article className="true-crime-intro__card">
                            <p className="horror-kicker">{trueCrimeIntro.eyebrow}</p>
                            <h2
                                id="true-crime-intro-title"
                                className="horror-panel-title true-crime-intro__title"
                            >
                                {trueCrimeIntro.title}
                            </h2>
                            <p className="horror-body-text true-crime-intro__text">
                                {trueCrimeIntro.text}
                            </p>
                        </article>
                    </div>
                </section>

                <section
                    className="true-crime-famous"
                    aria-labelledby="true-crime-famous-title"
                    data-dynamic-header-section="true"
                    data-title="ИЗВЕСТНЫЕ ДЕЛА"
                >
                    <div className="true-crime-section-header">
                        <h2
                            id="true-crime-famous-title"
                            className="horror-glow-title horror-section-title"
                        >
                            ИЗВЕСТНЫЕ ДЕЛА
                        </h2>
                    </div>

                    <div className="true-crime-famous__grid">
                        {famousCases.map((item) => (
                            <article className="true-crime-case-card" key={item.title}>
                                <img
                                    className="true-crime-case-card__image"
                                    src={item.image}
                                    alt={item.imageAlt}
                                />
                                <div className="true-crime-case-card__content">
                                    <h3 className="horror-panel-title true-crime-case-card__title">
                                        {item.title}
                                    </h3>
                                    <p className="horror-body-text true-crime-case-card__text">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="true-crime-russian"
                    aria-labelledby="true-crime-russian-title"
                    data-dynamic-header-section="true"
                    data-title="РОССИЙСКИЕ ДЕЛА"
                    data-subtitle="Тёмные страницы отечественной криминальной истории"
                >
                    <div className="true-crime-section-header true-crime-section-header--stacked">
                        <h2
                            id="true-crime-russian-title"
                            className="horror-glow-title horror-section-title"
                        >
                            РОССИЙСКИЕ ДЕЛА
                        </h2>
                        <p className="horror-body-text true-crime-russian__subtitle">
                            Тёмные страницы отечественной криминальной истории
                        </p>
                    </div>

                    <div className="true-crime-timeline">
                        {russianCases.map((item) => (
                            <article className="true-crime-timeline__item" key={item.title}>
                                <p className="true-crime-timeline__period">{item.period}</p>
                                <h3 className="horror-panel-title true-crime-timeline__title">
                                    {item.title}
                                </h3>
                                <p className="horror-body-text true-crime-timeline__text">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <blockquote className="true-crime-quote">
                        <p className="horror-body-text horror-quote-text">{trueCrimeQuote}</p>
                    </blockquote>
                </section>
            </div>
        </main>
    );
};

export default TrueCrime;
