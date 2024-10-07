import { Footer } from "@/widgets/footer/ui";
import { Header } from "@/widgets/header/ui";

export function Game(): JSX.Element {

 // Возможно здесь стоит использовать компонент звездочек из MUI

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="game__page">
          <h1 className="game__title">Dark Souls: REMASTERED</h1>
          <img
            className="game__image"
            width={800}
            height={500}
            src="/src/assets/ds1gameplay.jpg"
            alt="Dark Souls: REMASTERED screenshot"
          />

          <div className="game__rating">
            <div className="game__rating--stars">  
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
