import {Link} from "react-router-dom";
import mythsImg from '../../assets/images/myths.jpg'
import trueCrimeImg from '../../assets/images/truecrime.jpg'
import kuolinovImg from '../../assets/images/games.png'

import './MainPage.scss'

const MainPage = () => {
    return (
        <main>
            
            <div className="mainpage">
                <h1>ДОБРО ПОЖАЛОВАТЬ В БЕЗДНУ</h1>
                <div className="main-discription">
                    <p>Хоррор-Хаб - это место, где собраны самые жуткие мифы, реаальные
                        <br />криминальные истории и обзоры хоррор-игр от легендарного
                        <br />Куплинова.</p>
                </div>
                
                <div className="info-cards">
                    <Link
                        to="/Myths"
                        className="info-card"
                    >
                        <div className="image-card">
                           <img src={mythsImg} alt="Забытые легенды" /> 
                        </div>
                        <h2>Забытые легенды</h2>
                        <p>Погрузись в мир древних мифов и городских легенд,
                            которые заставят тебя оглядываться по ночам.
                            От историй призраков до жутких существ.</p>
                    </Link>
                    
                    <Link
                        to="/TrueCrime"
                        className="info-card"
                    >
                        <div className="image-card">
                            <img src={trueCrimeImg} alt="Реальные дела" />
                        </div>
                        <h2>Реальные дела</h2>
                        <p>Документальные истории самых шокирующих преступлений в истории.
                           Факты, которые страшнее любого вымысла.
                           Улики, показания, развязки.</p>
                    </Link>
                    
                    <Link
                        to="/Kuplinov"
                        className="info-card"
                    >
                        <div className="image-card">
                            <img src={kuolinovImg} alt="Хоррор-игры" />
                        </div>
                        <h2>Хоррор-игры</h2>
                        <p>Обзоры и прохождения самых страшных игр от Дмитрия Куплинова.
                           Лучшие летсплеи, пугающие моменты и незабываемые впечатления.</p>
                    </Link>
                </div>

                <div className="discription-section">
                    <h1>ПОЧЕМУ ХОРРОР?</h1>
                    <div className="scary-quote">                        
                        <blockquote>
                            <p>«Страх – самое древнее и сильное из человеческих чувств,
                            а самый древний и самый сильный страх – страх неведомого.
                            Хоррор позволяет нам переживать его в безопасном пространстве,
                            заставляя чувствовать себя живыми как никогда прежде.»</p>
                        </blockquote>
                    </div>

                    <div className="scary-discription">
                        <div className="info-block">
                            <h2>Зачем нам нужен страх?</h2>
                            <p>Учёные доказали: контролируемый стресс от хоррора
                               снижает тревожность в реальной жизни.
                               Адреналиновый всплеск – это естественный антидепрессант.
                               Когда мы смотрим хоррор или играем в него,
                               мозг тренирует реакцию на опасность, не подвергаясь реальному риску.</p>
                        </div>

                        <div className="info-block">
                            <h2>Хоррор в культуре</h2>
                            <p>От «Франкенштейна» Мэри Шелли и Ктулху Говарда Лавкрафта
                               до современных инди-хорроров – жанр ужасов эволюционировал вместе с обществом.
                               Каждая эпоха рождала свои уникальные страхи:
                               от страха перед неизвестным до страха перед технологиями.</p>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    )
}

export default MainPage;
