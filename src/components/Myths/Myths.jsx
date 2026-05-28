import { useEffect } from "react";
import { mythsHead, Ctulhu, litfilms, worldmyths } from "./Myths.data";

import "./Myths.scss";

const Myths = () => {
    useEffect(() => { window.dispatchEvent(new Event("horrorhub:dynamic-sections-ready")); }, []);

    return (
        <main className="myths-page">
            <div className="myths-page-content">
                <section 
                    className="myths-head"
                    aria-labelledby="myths-title"
                    data-dynamic-header-section="true"
                    data-title={mythsHead.title}
                    data-subtitle={mythsHead.subtitle}
                >
                    <img
                        className="myths-head-image"
                        src={mythsHead.image}
                        alt=""
                        aria-hidden="true"
                    />
                    <div className="myths-head-overlay" />
                    <div className="myths-head-content">
                        <h1
                            id="myths-head-title"
                            className="horror-glow-title horror-section-title myths-head-title"
                        >
                        {mythsHead.title}
                        </h1>
                        <p className="horror-body-text myths-head-subtitle">
                            {mythsHead.subtitle}
                        </p>
                    </div>               
                </section>

                <section
                    className="ctulhu"
                    aria-labelledby="ctulhu-title"
                    data-dynamic-header-section="true"
                    data-title={Ctulhu.title.toUpperCase()}
                >
                    <div className="ctulhu-inner">
                        <img
                            className="ctulhu-image"
                            src={Ctulhu.image}
                            alt={Ctulhu.imageAlt}
                        />
                        <article className="ctulhu-card">
                            <p className="horror-kicker">{Ctulhu.eyebrow}</p>
                            <h2
                                id="ctulhu-title"
                                className="horror-panel-title ctulhu_title"
                            >
                                {Ctulhu.title}
                            </h2>
                            <p className="horror-body-text ctulhu-text">
                                {Ctulhu.text}
                            </p>
                        </article>
                    </div>
                </section>

                <section
                    className="litfilms"
                    aria-labelledby="litfilms-title"
                    data-dynamic-header-section="true"
                    data-title="МИФЫ РАЗНЫХ КУЛЬТУР"                  
                >
                    <div className="litfilms-section-header">
                        <h2
                            id="litfilms-title"
                            className="horror-glow-title horror-section-title"
                        >
                            МИФЫ РАЗНЫХ КУЛЬТУР
                        </h2>
                    </div>
                    <div className="litfilms-grid">
                        {litfilms.map((item) => (
                            <article className="litfilms-card" key={item.title}>
                                <img
                                    className="litfilms-card-image"
                                    src={item.image}
                                    alt={item.imageAlt}
                                />
                                <div className="litfilms-card-content">
                                    <h3 className="horror-panel-title litfilms-card-title">
                                        {item.title}
                                    </h3>
                                    <p className="horror-body-text litfilms-card-text">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="worldmyths"
                    aria-labelledby="worldmyths-title"
                    data-dynamic-header-section="true"
                    data-title="ГОРОДСКИЕ ЛЕГЕНДЫ"
                    data-subtitle="Современные мифы, рождённые в эпоху Интернета"
                >
                    <div className="worldmyths-section-header">
                        <h2
                            id="worldmyths-title"
                            className="horror-glow-title horror-section-title"
                        >
                            ГОРОДСКИЕ ЛЕГЕНДЫ
                        </h2>
                        <p className="horror-body-text worldmyths-subtitle">
                            Современные мифы, рождённые в эпоху Интернета
                        </p>
                    </div>
                    <div className="worldmyths-subgenres">
                        {worldmyths.map((item) => (
                            <article className="worldmyths-subgenres-item" key={item.title}>
                                <div className="worldmyths-subgenres-line"></div>
                                <div className="worldmyths-subgenres-content"></div>
                                <p className="worldmyths-subgenres-subgenre">
                                    {item.subgenre}
                                </p>
                                <h3 className="horror-panel-title worldmyths-subgenres-title">
                                    {item.title}
                                </h3>
                                <p className="horror-body-text worldmyths-subgenres-text">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Myths;
