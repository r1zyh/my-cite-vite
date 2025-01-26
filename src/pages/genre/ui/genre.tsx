import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';

export const Genre = (): JSX.Element => {
  // стоит добавить about и пихнуть в него title и studio, а карточку с изображением игры сделать чуть пониже
  return (
    <>
      <Header />
      <main>
        <div className="genre__page">
          <div className="games__grid">
            <ul className="games__list">
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/cs2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/Deadlock.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/dota2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/ds1.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/cs2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/Deadlock.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/dota2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/ds1.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/cs2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/Deadlock.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/dota2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/ds1.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/cs2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/Deadlock.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/dota2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/ds1.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/cs2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/Deadlock.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/dota2.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
              <li className="games__list--item">
                <h3 className="title">Item 1</h3>
                <img className="game__image" src="/src/assets/ds1.png" alt="game__preview" />
                <p className="game__studio">Bandai Namco</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
