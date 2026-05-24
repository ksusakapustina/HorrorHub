# SDD: страница «Тру Крайм» для HorrorHub

## 1. Статус документа

Документ описывает реализацию отдельной страницы **«Тру Крайм»** в существующем SPA-приложении HorrorHub на **React + Vite**.

Спецификация адаптирована под текущую архитектуру репозитория:

* приложение использует **React Router**;
* страница «Тру Крайм» должна быть отдельным маршрутом: `/true_crime`;
* маршрут `/true_crime` уже описан в `src/App.jsx`;
* `Header` и `Footer` уже подключены глобально в `src/App.jsx`;
* проект использует `.jsx` и `.scss`, а не `.tsx` и CSS Modules;
* текущий `Header` содержит пункты: `ГЛАВНАЯ`, `МИФЫ`, `ТРУ КРАЙМ`, `КУПЛИНОВ`.

В этой SDD нельзя трактовать «Тру Крайм» как якорную секцию на главной странице. Это **отдельная route-page**.

---

## 2. Цель реализации

Нужно реализовать страницу `/true_crime`, соответствующую Figma-макету и общей стилистике HorrorHub.

Страница должна продолжать визуальный стиль уже реализованной главной страницы:

* чёрный фон;
* красный акцент;
* бело-серая типографика;
* тёмные карточки;
* затемнённые изображения;
* крупные заголовки с красным свечением;
* шрифт в стиле существующего проекта, визуально близкий к `Jura`;
* мрачная документально-хоррорная эстетика.

Страница должна быть статической. API-запросы не нужны.

---

## 3. Архитектурные требования проекта

### 3.1 Route

Страница должна быть доступна по маршруту:

```txt
/true_crime
```

Маршрут уже существует в `src/App.jsx`. Codex должен проверить фактическую реализацию маршрута и подключённого компонента.

Ожидаемая логика в `src/App.jsx`:

```jsx
<Header />

<Routes>
  <Route path="/" element={<MainPage />} />
  <Route path="/myths" element={<MythsPage />} />
  <Route path="/true_crime" element={<TrueCrimePage />} />
  <Route path="/kuplinov" element={<KuplinovPage />} />
</Routes>

<Footer />
```

Фактические имена компонентов могут отличаться. Нужно следовать текущему коду, а не этому примеру буквально.

### 3.2 Header и Footer

`Header` и `Footer` уже подключены глобально в `src/App.jsx`.

Поэтому внутри страницы `TrueCrimePage` нельзя добавлять:

```jsx
<Header />
<Footer />
```

Страница должна возвращать только собственный контент:

```jsx
<main className="true-crime-page">
  ...
</main>
```

Иначе получится дублирование шапки и подвала.

### 3.3 Навигация

Существующий Header должен содержать пункты:

```txt
ГЛАВНАЯ
МИФЫ
ТРУ КРАЙМ
КУПЛИНОВ
```

Пункт `ТРУ КРАЙМ` должен вести на:

```txt
/true_crime
```

Активный пункт `ТРУ КРАЙМ` должен подсвечиваться красным тем же способом, что и остальные активные пункты в текущем проекте.

Если в Header уже используется `NavLink` из `react-router-dom`, нужно использовать его active-state.

Если активное состояние реализовано вручную через `location.pathname`, нужно добавить проверку:

```jsx
location.pathname === "/true_crime"
```

---

## 4. Ожидаемая структура файлов

Так как проект использует `.jsx` и `.scss`, реализация должна придерживаться этой структуры.

Рекомендуемый вариант:

```txt
src/
  pages/
    TrueCrimePage/
      TrueCrimePage.jsx
      TrueCrimePage.scss
      trueCrime.data.js
      index.js
```

Если в проекте страницы уже лежат иначе, например:

```txt
src/pages/TrueCrime.jsx
src/pages/TrueCrime.scss
```

или:

```txt
src/pages/TrueCrime/
```

Codex должен использовать существующий стиль организации файлов.

Главное:

* не создавать `.tsx`;
* не создавать CSS Modules, если проект на обычном SCSS;
* не ломать существующую структуру;
* не переписывать `App.jsx` без необходимости;
* не дублировать глобальные `Header` и `Footer`.

---

## 5. Общая структура страницы

Страница `/true_crime` состоит из блоков:

```txt
1. Hero section «ТРУ КРАЙМ»
2. Intro section «Правда страшнее мифов»
3. Section «ИЗВЕСТНЫЕ ДЕЛА»
4. Section «РОССИЙСКИЕ ДЕЛА»
5. Quote block
```

Footer не входит в эту страницу как компонент, потому что уже подключён глобально.

Ожидаемая JSX-структура:

```jsx
export function TrueCrimePage() {
  return (
    <main className="true-crime-page">
      <section className="true-crime-hero">...</section>
      <section className="true-crime-intro">...</section>
      <section className="true-crime-famous">...</section>
      <section className="true-crime-russian">...</section>
    </main>
  );
}
```

Если проект использует default export, следовать текущему стилю:

```jsx
export default TrueCrimePage;
```

---

## 6. Visual language

### 6.1 Цвета

Опираться на существующие переменные или SCSS-переменные проекта.

Если переменных нет, использовать следующие значения внутри `TrueCrimePage.scss`:

```scss
$true-crime-bg: #000000;
$true-crime-surface: #121212;
$true-crime-surface-soft: #181818;
$true-crime-text: #ffffff;
$true-crime-muted: #b7b7b7;
$true-crime-dim: #8d8d8d;
$true-crime-accent: #ff0000;
$true-crime-accent-dark: #9b0000;
```

### 6.2 Типографика

Использовать тот же шрифт, который уже подключён в проекте.

Если глобально уже подключён `Jura`, не подключать его повторно.

Типографика должна быть близка к макету:

* заголовки: uppercase, letter-spacing, glow;
* основной текст: серый, читаемый, без чрезмерного контраста;
* карточки: короткие заголовки белым, описания серым.

### 6.3 Общий контейнер

```scss
.true-crime-page {
  background: #000;
  color: #fff;
  min-height: 100vh;
}
```

Контентные блоки ограничивать по ширине:

```scss
.true-crime-container {
  max-width: 1120px;
  margin: 0 auto;
}
```

---

## 7. Hero section

### 7.1 Назначение

Hero-блок открывает страницу. На Figma-скриншоте это широкий баннер с затемнённым фоновым изображением в криминальной эстетике: crime scene tape, следственные материалы, тёмная фактура.

### 7.2 Контент

Заголовок:

```txt
ТРУ КРАЙМ
```

Подзаголовок:

```txt
Реальные истории, которые
страшнее любого вымысла
```

В JSX перенос можно сделать через `white-space: pre-line` или через `<br />`.

### 7.3 JSX

```jsx
<section className="true-crime-hero" aria-labelledby="true-crime-title">
  <img
    className="true-crime-hero__image"
    src={trueCrimeHero.image}
    alt=""
  />
  <div className="true-crime-hero__overlay" />
  <div className="true-crime-hero__content">
    <h1 id="true-crime-title" className="true-crime-hero__title">
      {trueCrimeHero.title}
    </h1>
    <p className="true-crime-hero__subtitle">
      {trueCrimeHero.subtitle}
    </p>
  </div>
</section>
```

### 7.4 SCSS

```scss
.true-crime-hero {
  position: relative;
  min-height: 512px;
  overflow: hidden;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75)),
      rgba(0, 0, 0, 0.35);
  }

  &__content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 0 24px;
  }

  &__title {
    margin: 0;
    color: #fff;
    font-size: 56px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 8px;
    text-transform: uppercase;
    text-shadow:
      0 0 8px rgba(255, 0, 0, 0.95),
      0 0 18px rgba(255, 0, 0, 0.45);
  }

  &__subtitle {
    margin: 20px 0 0;
    color: #b7b7b7;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 1.5px;
    white-space: pre-line;
  }
}
```

---

## 8. Intro section «Правда страшнее мифов»

### 8.1 Назначение

Под hero расположен двухколоночный блок.

Слева: изображение True Crime.

Справа: тёмная карточка с заголовком и описанием жанра.

### 8.2 Контент

Заголовок:

```txt
Правда страшнее мифов
```

Текст:

```txt
Тру Крайм (True Crime) — жанр, основанный на реальных криминальных событиях. В отличие от художественных страшилок, здесь каждая деталь — факт. Мы исследуем самые шокирующие дела, анализируем психологию преступников, ошибки следствия и невероятные повороты, которые не придумать даже в кошмарном сне.
```

### 8.3 JSX

```jsx
<section className="true-crime-intro" aria-labelledby="true-crime-intro-title">
  <div className="true-crime-intro__inner">
    <img
      className="true-crime-intro__image"
      src={trueCrimeIntro.image}
      alt="Материалы расследования в жанре true crime"
    />
    <article className="true-crime-intro__card">
      <h2 id="true-crime-intro-title">{trueCrimeIntro.title}</h2>
      <p>{trueCrimeIntro.text}</p>
    </article>
  </div>
</section>
```

### 8.4 SCSS

```scss
.true-crime-intro {
  padding: 80px 32px 64px;
  background: #000;

  &__inner {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #121212;
  }

  &__image {
    width: 100%;
    height: 360px;
    object-fit: cover;
    filter: brightness(0.85) contrast(1.05);
  }

  &__card {
    padding: 48px 42px;
    background: #121212;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      margin: 0 0 28px;
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 1.5px;
    }

    p {
      margin: 0;
      color: #b7b7b7;
      font-size: 18px;
      line-height: 1.45;
      letter-spacing: 0.8px;
    }
  }
}
```

---

## 9. Section «ИЗВЕСТНЫЕ ДЕЛА»

### 9.1 Назначение

Секция показывает три карточки известных true crime дел.

Заголовок по центру:

```txt
ИЗВЕСТНЫЕ ДЕЛА
```

Карточки:

```txt
1. Убийца Зодиак
2. Ангел смерти
3. Перевал Дятлова
```

### 9.2 Контент карточек

#### Убийца Зодиак

```txt
Серийный убийца, терроризировавший Калифорнию в конце 1960-х. Отправлял зашифрованные письма в газеты, хвастался количеством жертв и до сих пор не раскрыт. Шифры Зодиака разгаданы лишь частично, а его личность остаётся одной из величайших загадок криминалистики.
```

#### Ангел смерти

```txt
Истории медиков-убийц, которые использовали своё положение для совершения преступлений. Гарольд Шипман в Великобритании стал одним из самых известных примеров таких дел. Эти истории показывают, что монстры иногда носят белые халаты.
```

#### Перевал Дятлова

```txt
Девять опытных туристов погибли при обстоятельствах, которые до сих пор не имеют однозначного объяснения. Разорванная палатка, следы босых ног на снегу, странные радиационные следы — каждая деталь порождает новые теории.
```

### 9.3 JSX

```jsx
<section className="true-crime-famous" aria-labelledby="true-crime-famous-title">
  <h2 id="true-crime-famous-title" className="true-crime-section-title">
    ИЗВЕСТНЫЕ ДЕЛА
  </h2>

  <div className="true-crime-famous__grid">
    {famousCases.map((item) => (
      <article className="true-crime-case-card" key={item.title}>
        <img
          className="true-crime-case-card__image"
          src={item.image}
          alt={item.title}
        />
        <div className="true-crime-case-card__content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </article>
    ))}
  </div>
</section>
```

### 9.4 SCSS

```scss
.true-crime-famous {
  padding: 56px 32px 72px;
  background: #000;

  &__grid {
    max-width: 1120px;
    margin: 48px auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
}

.true-crime-section-title {
  margin: 0;
  text-align: center;
  color: #fff;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-shadow:
    0 0 6px rgba(255, 0, 0, 0.9),
    0 0 16px rgba(255, 0, 0, 0.45);
}

.true-crime-case-card {
  background: #121212;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 170px;
    object-fit: cover;
    filter: grayscale(0.25) brightness(0.8);
  }

  &__content {
    padding: 24px 22px 30px;

    h3 {
      margin: 0 0 18px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 1px;
    }

    p {
      margin: 0;
      color: #b7b7b7;
      font-size: 16px;
      line-height: 1.45;
    }
  }
}
```

---

## 10. Section «РОССИЙСКИЕ ДЕЛА»

### 10.1 Назначение

Секция показывает вертикальный timeline российских криминальных дел.

Заголовок:

```txt
РОССИЙСКИЕ ДЕЛА
```

Подзаголовок:

```txt
Тёмные страницы отечественной криминальной истории
```

Timeline-карточки:

```txt
1978–1990 — Андрей Чикатило
1992–2010 — Битцевский маньяк
2020-е — Новые расследования
```

### 10.2 JSX

```jsx
<section className="true-crime-russian" aria-labelledby="true-crime-russian-title">
  <div className="true-crime-russian__header">
    <h2 id="true-crime-russian-title" className="true-crime-section-title">
      РОССИЙСКИЕ ДЕЛА
    </h2>
    <p className="true-crime-russian__subtitle">
      Тёмные страницы отечественной криминальной истории
    </p>
  </div>

  <div className="true-crime-timeline">
    {russianCases.map((item) => (
      <article className="true-crime-timeline__item" key={item.title}>
        <p className="true-crime-timeline__period">{item.period}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </article>
    ))}
  </div>

  <blockquote className="true-crime-quote">
    {trueCrimeQuote}
  </blockquote>
</section>
```

### 10.3 SCSS

```scss
.true-crime-russian {
  padding: 64px 32px 80px;
  background: #000;

  &__header {
    text-align: center;
  }

  &__subtitle {
    margin: 18px 0 0;
    color: #8f8f8f;
    font-size: 17px;
    line-height: 1.4;
    letter-spacing: 0.8px;
  }
}

.true-crime-timeline {
  max-width: 1040px;
  margin: 48px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__item {
    padding: 28px 36px 30px 42px;
    background: #121212;
    border-left: 8px solid #9b0000;

    h3 {
      margin: 0 0 16px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 1px;
    }

    p:last-child {
      margin: 0;
      color: #b7b7b7;
      font-size: 17px;
      line-height: 1.45;
      letter-spacing: 0.6px;
    }
  }

  &__period {
    margin: 0 0 8px;
    color: #ff0000;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
  }
}

.true-crime-quote {
  max-width: 1040px;
  margin: 36px auto 0;
  padding: 0 0 0 32px;
  border-left: 8px solid #9b0000;
  color: #b7b7b7;
  font-size: 21px;
  line-height: 1.45;
  letter-spacing: 1px;
}
```

---

## 11. Data-файл

Создать файл рядом со страницей:

```txt
src/pages/TrueCrimePage/trueCrime.data.js
```

Если фактическое расположение страницы другое, положить data-файл рядом с ней.

Пример:

```js
import heroImage from "../../assets/true-crime/hero.jpg";
import introImage from "../../assets/true-crime/intro.jpg";
import zodiacImage from "../../assets/true-crime/zodiac.jpg";
import angelOfDeathImage from "../../assets/true-crime/angel-of-death.jpg";
import dyatlovPassImage from "../../assets/true-crime/dyatlov-pass.jpg";

export const trueCrimeHero = {
  title: "ТРУ КРАЙМ",
  subtitle: "Реальные истории, которые\nстрашнее любого вымысла",
  image: heroImage,
};

export const trueCrimeIntro = {
  title: "Правда страшнее мифов",
  image: introImage,
  text:
    "Тру Крайм (True Crime) — жанр, основанный на реальных криминальных событиях. В отличие от художественных страшилок, здесь каждая деталь — факт. Мы исследуем самые шокирующие дела, анализируем психологию преступников, ошибки следствия и невероятные повороты, которые не придумать даже в кошмарном сне.",
};

export const famousCases = [
  {
    title: "Убийца Зодиак",
    image: zodiacImage,
    description:
      "Серийный убийца, терроризировавший Калифорнию в конце 1960-х. Отправлял зашифрованные письма в газеты, хвастался количеством жертв и до сих пор не раскрыт. Шифры Зодиака разгаданы лишь частично, а его личность остаётся одной из величайших загадок криминалистики.",
  },
  {
    title: "Ангел смерти",
    image: angelOfDeathImage,
    description:
      "Истории медиков-убийц, которые использовали своё положение для совершения преступлений. Гарольд Шипман в Великобритании стал одним из самых известных примеров таких дел. Эти истории показывают, что монстры иногда носят белые халаты.",
  },
  {
    title: "Перевал Дятлова",
    image: dyatlovPassImage,
    description:
      "Девять опытных туристов погибли при обстоятельствах, которые до сих пор не имеют однозначного объяснения. Разорванная палатка, следы босых ног на снегу, странные радиационные следы — каждая деталь порождает новые теории.",
  },
];

export const russianCases = [
  {
    period: "1978–1990",
    title: "Андрей Чикатило",
    description:
      "«Ростовский потрошитель» — один из самых известных серийных убийц в мировой истории. Более 50 подтверждённых жертв за 12 лет. Его задержание стало одной из самых масштабных операций советской милиции. Дело Чикатило породило десятки книг, фильмов и документальных расследований.",
  },
  {
    period: "1992–2010",
    title: "Битцевский маньяк",
    description:
      "Александр Пичушкин убил 48 человек и пытался убить ещё 12, стремясь побить «рекорд» Чикатило. Его метод — заманивание жертв в лес под предлогом совместной игры в шахматы или распития алкоголя. Приговорён к пожизненному заключению.",
  },
  {
    period: "2020-е",
    title: "Новые расследования",
    description:
      "Благодаря развитию ДНК-анализа и цифровых технологий, многие «висяки» прошлых десятилетий начали раскрываться. Генетическая генеалогия позволяет находить преступников через дальних родственников.",
  },
];

export const trueCrimeQuote =
  "«В каждом обществе есть люди, чья тёмная сторона превращает их в монстров. Тру Крайм — это не романтизация насилия, а попытка понять природу зла и предотвратить новые преступления.»";
```

Важно: пути импортов должны соответствовать реальной структуре проекта. Codex должен не копировать пример слепо, а проверить расположение `assets`.

---

## 12. Assets

Рекомендуемая структура:

```txt
src/assets/true-crime/
  hero.jpg
  intro.jpg
  zodiac.jpg
  angel-of-death.jpg
  dyatlov-pass.jpg
```

Если таких изображений нет:

* использовать существующие локальные изображения проекта как placeholders;
* оставить `TODO` в data-файле;
* не использовать внешние URL;
* не делать импорты файлов, которых физически нет.

Пример:

```js
// TODO: заменить placeholder на реальное изображение hero для True Crime.
import heroImage from "../../assets/placeholder.jpg";
```

---

## 13. Адаптивность

### 13.1 Desktop

Целевые размеры:

* hero: высота около `512px`;
* основные контейнеры: `1120px`;
* timeline: `1040px`;
* сетка «Известные дела»: 3 колонки.

### 13.2 Tablet до 1024px

```scss
@media (max-width: 1024px) {
  .true-crime-hero {
    min-height: 420px;

    &__title {
      font-size: 46px;
      letter-spacing: 6px;
    }
  }

  .true-crime-intro__inner {
    grid-template-columns: 1fr;
  }

  .true-crime-intro__image {
    height: 320px;
  }

  .true-crime-famous__grid {
    grid-template-columns: 1fr;
    max-width: 680px;
  }

  .true-crime-case-card__image {
    height: 240px;
  }

  .true-crime-timeline,
  .true-crime-quote {
    max-width: 760px;
  }
}
```

### 13.3 Mobile до 768px

```scss
@media (max-width: 768px) {
  .true-crime-hero {
    min-height: 360px;

    &__title {
      font-size: 36px;
      letter-spacing: 4px;
    }

    &__subtitle {
      font-size: 17px;
    }
  }

  .true-crime-intro,
  .true-crime-famous,
  .true-crime-russian {
    padding-left: 20px;
    padding-right: 20px;
  }

  .true-crime-intro__card {
    padding: 32px 24px;

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }

  .true-crime-section-title {
    font-size: 30px;
    letter-spacing: 3px;
  }

  .true-crime-timeline__item {
    padding: 24px 22px 26px 26px;
  }

  .true-crime-quote {
    font-size: 18px;
  }
}
```

Обязательные проверки:

* нет горизонтального скролла;
* текст не вылезает из карточек;
* изображения не растягиваются неестественно;
* Header не ломается;
* Footer отображается один раз.

---

## 14. Семантика и доступность

Требования:

* на странице должен быть один `h1`: `ТРУ КРАЙМ`;
* заголовки секций должны быть `h2`;
* карточки должны быть `article`;
* декоративное hero-изображение может иметь `alt=""`;
* карточные изображения должны иметь осмысленный `alt`;
* не использовать `a href="#"`, если карточка никуда не ведёт;
* не использовать кнопки без действия;
* не заменять всю структуру на набор `div`, потому что браузер и так многое терпит, но не надо проверять пределы.

---

## 15. Технические ограничения

Codex не должен:

* создавать якорную секцию вместо route-page;
* создавать route `/true-crime`, если в проекте используется `/true_crime`;
* дублировать `Header` и `Footer` внутри `TrueCrimePage`;
* переводить файлы на TypeScript;
* создавать `.tsx`;
* создавать CSS Modules, если проект использует `.scss`;
* подключать новые UI-библиотеки;
* подключать Tailwind, если его нет;
* использовать внешние изображения;
* добавлять API-запросы;
* менять unrelated-файлы;
* переписывать глобальную архитектуру;
* ломать существующие страницы `Главная`, `Мифы`, `Куплинов`.

Codex может:

* создать или обновить `TrueCrimePage.jsx`;
* создать или обновить `TrueCrimePage.scss`;
* создать `trueCrime.data.js`;
* добавить локальные assets;
* поправить Header только в части навигационного пункта `/true_crime`, если это действительно нужно;
* поправить `App.jsx` только если route `/true_crime` подключён неправильно или указывает не на тот компонент.

---

## 16. Этапы реализации для Codex CLI

### Этап 1. Аудит текущей архитектуры

Промпт:

```txt
Проанализируй текущий React + Vite проект HorrorHub. Подтверди, что используется React Router, что маршрут /true_crime уже описан в src/App.jsx, а Header и Footer подключены глобально в App.jsx. Найди фактические файлы страницы True Crime, Header, Footer, assets и SCSS. Ничего не изменяй. В ответе перечисли, какие файлы нужно создать или изменить.
```

Acceptance criteria:

* подтверждён route `/true_crime`;
* подтверждено, что `Header` и `Footer` глобальные;
* найдена структура `.jsx + .scss`;
* не внесены изменения в файлы.

### Этап 2. Подготовка страницы

Промпт:

```txt
Создай или обнови страницу TrueCrimePage для маршрута /true_crime. Страница не должна содержать Header и Footer, потому что они уже подключены глобально в App.jsx. Добавь базовую структуру main.true-crime-page с секциями hero, intro, famous cases, russian cases и quote. Используй .jsx и .scss в стиле текущего проекта.
```

Acceptance criteria:

* страница `/true_crime` открывается;
* внутри страницы нет `<Header />` и `<Footer />`;
* есть `main.true-crime-page`;
* приложение запускается без ошибок.

### Этап 3. Проверка навигации Header

Промпт:

```txt
Проверь существующий Header. Он должен содержать пункты ГЛАВНАЯ, МИФЫ, ТРУ КРАЙМ, КУПЛИНОВ. Пункт ТРУ КРАЙМ должен вести на /true_crime и подсвечиваться красным на этом маршруте. Не переписывай Header полностью, измени только необходимое.
```

Acceptance criteria:

* в Header есть `ГЛАВНАЯ`;
* в Header есть `ТРУ КРАЙМ`;
* `ТРУ КРАЙМ` ведёт на `/true_crime`;
* активный пункт подсвечивается красным;
* остальные пункты не сломаны.

### Этап 4. Data-файл

Промпт:

```txt
Создай trueCrime.data.js рядом со страницей TrueCrimePage. Вынеси туда hero, intro, famousCases, russianCases и trueCrimeQuote. Используй локальные assets. Если нужных изображений нет, используй существующие локальные placeholders и оставь TODO. Не используй внешние URL.
```

Acceptance criteria:

* данные вынесены из JSX;
* нет импортов несуществующих файлов;
* нет внешних URL;
* JSX читабелен.

### Этап 5. Hero

Промпт:

```txt
Реализуй hero-блок страницы /true_crime по Figma: высота около 512px, затемнённое фоновое изображение, h1 ТРУ КРАЙМ по центру, подзаголовок Реальные истории, которые страшнее любого вымысла, белый текст с красным свечением у заголовка. Стили писать в SCSS страницы.
```

Acceptance criteria:

* hero визуально близок к Figma;
* h1 один на странице;
* фон затемнён;
* текст читаемый;
* mobile не ломается.

### Этап 6. Intro

Промпт:

```txt
Реализуй intro-блок Правда страшнее мифов: двухколоночный layout, слева изображение, справа тёмная карточка с заголовком и описанием жанра True Crime. На tablet/mobile блок становится одноколоночным.
```

Acceptance criteria:

* desktop: 2 колонки;
* mobile: 1 колонка;
* изображение слева, текст справа;
* карточка на фоне #121212 или существующем surface-цвете проекта.

### Этап 7. Известные дела

Промпт:

```txt
Реализуй секцию ИЗВЕСТНЫЕ ДЕЛА: центрированный h2 с красным свечением и сетка из трёх article-карточек. Карточки: Убийца Зодиак, Ангел смерти, Перевал Дятлова. Каждая карточка содержит изображение, h3 и описание из data-файла.
```

Acceptance criteria:

* desktop: 3 карточки в ряд;
* tablet/mobile: 1 колонка;
* изображения одинаковой высоты;
* карточки тёмные;
* текст читаемый.

### Этап 8. Российские дела и quote

Промпт:

```txt
Реализуй секцию РОССИЙСКИЕ ДЕЛА с подзаголовком Тёмные страницы отечественной криминальной истории. Ниже добавь вертикальный timeline из карточек: Андрей Чикатило, Битцевский маньяк, Новые расследования. У каждой карточки красная вертикальная линия слева, период красным, h3 и описание. Под timeline добавь quote block из trueCrimeQuote с красной линией слева.
```

Acceptance criteria:

* timeline идёт вертикально;
* у карточек есть красная линия слева;
* период выделен красным;
* quote расположен под timeline;
* footer не дублируется.

### Этап 9. Финальная проверка

Промпт:

```txt
Проверь /true_crime на desktop, tablet и mobile. Исправь горизонтальный скролл, переполнение текста, неправильные отступы, проблемы с изображениями и конфликты глобальных стилей. Запусти npm run build. Не меняй unrelated-файлы.
```

Acceptance criteria:

* `/true_crime` открывается;
* Header отображается один раз;
* Footer отображается один раз;
* активный пункт `ТРУ КРАЙМ` работает;
* нет горизонтального скролла;
* `npm run build` проходит успешно;
* остальные страницы не сломаны.

---

## 17. Финальный отчёт Codex

После выполнения Codex должен вывести:

```txt
1. Какие файлы были созданы.
2. Какие файлы были изменены.
3. Подтверждение, что страница реализована именно на route /true_crime.
4. Подтверждение, что Header и Footer не дублируются внутри страницы.
5. Как работает активный пункт ТРУ КРАЙМ в Header.
6. Какие assets используются.
7. Есть ли TODO по изображениям.
8. Результат npm run build.
9. Были ли изменены unrelated-файлы.
```

---

## 18. Master-prompt для Codex CLI

```txt
Нужно реализовать страницу «ТРУ КРАЙМ» в существующем React + Vite SPA HorrorHub.

Важно: проект уже использует React Router. Страница должна быть отдельной route-page по адресу /true_crime. Не делать якорную секцию на главной странице. Не создавать route /true-crime, потому что в проекте используется /true_crime.

Текущая архитектура:
- route /true_crime уже описан в src/App.jsx;
- Header и Footer подключены глобально в src/App.jsx;
- внутри TrueCrimePage нельзя добавлять Header и Footer;
- проект использует .jsx и .scss;
- Header содержит пункты ГЛАВНАЯ, МИФЫ, ТРУ КРАЙМ, КУПЛИНОВ.

Сначала проведи аудит проекта и ничего не меняй. Затем реализуй страницу /true_crime в существующей структуре проекта.

Макет:
1. Hero: высота около 512px, затемнённое изображение, h1 «ТРУ КРАЙМ», subtitle «Реальные истории, которые страшнее любого вымысла».
2. Intro: «Правда страшнее мифов», двухколоночный блок, слева изображение, справа тёмная карточка с описанием жанра.
3. «ИЗВЕСТНЫЕ ДЕЛА»: три карточки — Убийца Зодиак, Ангел смерти, Перевал Дятлова.
4. «РОССИЙСКИЕ ДЕЛА»: timeline-карточки — Андрей Чикатило, Битцевский маньяк, Новые расследования.
5. Quote block под timeline.
6. Footer не добавлять в страницу, он уже глобальный.

Технические требования:
- использовать .jsx и .scss;
- по возможности вынести контент в trueCrime.data.js;
- использовать локальные assets;
- внешние URL не использовать;
- новые UI-библиотеки не подключать;
- Header/Footer не переписывать;
- unrelated-файлы не менять;
- обеспечить адаптивность без горизонтального скролла;
- проверить npm run build.

Финально выведи созданные и изменённые файлы, подтверждение route /true_crime, отсутствие дублирования Header/Footer, состояние assets/TODO и результат npm run build.
```
