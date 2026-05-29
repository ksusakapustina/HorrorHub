import "./AllMyths.scss";

const AllMyths = () => {
    return (
        <main className="content-page myths-page">
            <section className="content-page__inner">
                <p className="content-page__kicker horror-kicker">Раздел в разработке</p>
                <h1 className="content-page__title horror-glow-title">МИФЫ МИРА</h1>
                <p className="content-page__text horror-body-text">
                    Здесь будет отдельная подборка страшных мифов разных народов.
                    <br />Пока страница нужна как адаптивный каркас
                    раздела и точка навигации внутри SPA.
                </p>
            </section>
        </main>
    );
};

export default AllMyths;
