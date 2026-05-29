import "./LitFilms.scss";

const LitFilms = () => {
    return (
        <main className="content-page myths-page">
            <section className="content-page__inner">
                <p className="content-page__kicker horror-kicker">Раздел в разработке</p>
                <h1 className="content-page__title horror-glow-title">ФИЛЬМЫ И ЛИТЕРАТУРА</h1>
                <p className="content-page__text horror-body-text">
                    Здесь будет отдельная подборка культовых и не только книг,
                    фильмов и анимаций в жанре хоррор.
                    <br />Пока страница нужна как адаптивный каркас
                    раздела и точка навигации внутри SPA.
                </p>
            </section>
        </main>
    );
};

export default LitFilms;
