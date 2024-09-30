function Main() {
  const soulsListLength = 4;

  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo">
          <img src="" alt="my hopefully future self made logo" />
        </div>
      </header>

      <main>
        <div className="games__container">
          <h1 lang="ru">Выбери игру на оценку!</h1>
          <ul className="genre__list">
            <li className="genre__list--item">
              <h2>SoulsLike</h2>
              <ul className="game__list">
                <li className="game__list--item">
                  <h3>Dark Souls 1</h3>
                </li>
                <li className="game__list--item">
                  <h3>Dark Souls 3 </h3>
                </li>
                <li className="game__list--item">
                  <h3>Elden Ring</h3>
                </li>
                <li className="game__list--item" style={{ display: "none" }}>
                  <h3>Bloodborne</h3>
                </li>
              </ul>
              {soulsListLength > 3 ? <a className="show__more" href="#">Show More</a> : ""}
            </li>
            <li className="genre__list--item">
              <h2>MOBA</h2>
              <ul className="game__list">
                <li className="game__list--item">
                  <h3>Dota 2</h3>
                </li>
                <li className="game__list--item">
                  <h3>League of Legends</h3>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__contacts">
            <ul className="contacts__list">
              <li className="contacts__list--item">
                <img src="" alt="social image template" />
              </li>
              <li className="contacts__list--item">
                <img src="" alt="social image template" />
              </li>
              <li className="contacts__list--item">
                <img src="" alt="social image template" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
