import { useEffect } from "react";
import { mythsHead, Ctulhu} from "./Myths.data";

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
            </div>

        </main>
    );
};

export default Myths;
