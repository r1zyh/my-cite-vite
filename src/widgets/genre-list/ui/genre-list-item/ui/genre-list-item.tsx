import { AppRoute } from "@/shared/const";
import { Button } from "@/shared/ui/button/ui";
import { Link } from "react-router-dom";

export function GenreListItem(): JSX.Element {
  const soulsListLength = 4;
  const mobaListLength = 4;
  return (
    <>
      <li className="genre__list--item">
        <h2>SoulsLike</h2>
        <ul className="game__list">
          <li className="game__list--item">
            <Link to={AppRoute.Game}>
              <h3>Dark Souls 1</h3>
              <img
                src="/src/assets/ds1.png"
                alt="game image"
                width={166}
                height={66}
              />
            </Link>
          </li>
          <li className="game__list--item">
            <Link to={AppRoute.Game}>
              <h3>Dark Souls 3 </h3>
              <img
                src="/src/assets/ds3resizedV2.jpg"
                alt="game image"
                width={166}
                height={66}
              />
            </Link>
          </li>
          <li className="game__list--item">
            <Link to={AppRoute.Game}>
              <h3>Elden Ring</h3>
              <img
                src="/src/assets/eldenring.png"
                alt="game image"
                width={166}
                height={66}
              />
            </Link>
          </li>
          <li className="game__list--item" style={{ display: "none" }}>
            <Link to={AppRoute.Game}>
              <h3>Bloodborne</h3>
              <img
                src="/src/assets/ds3resizedV2.jpg"
                alt="game image"
                width={166}
                height={66}
              />
            </Link>
          </li>
        </ul>
        {soulsListLength > 3 ? (
          <Button text="Show More" />
        ) : (
          <Button text="Genre Page" />
        )}
      </li>
      <li className="genre__list--item">
        <h2>MOBA</h2>
        <ul className="game__list">
          <li className="game__list--item">
            <Link to={AppRoute.Game}>
              <h3>Dota 2</h3>
              <img
                src="/src/assets/dota2.png"
                alt="game image"
                width={166}
                height={66}
              />
            </Link>
          </li>
          <li className="game__list--item">
            <Link to={AppRoute.Game}>
              <h3>League of Legends</h3>
              <img
                src="/src/assets/LoL.png"
                alt="game image"
                width={166}
                height={66}
              />
            </Link>
          </li>
          <li className="game__list--item">
            <Link to={AppRoute.Game}>
              <h3>Deadlock</h3>
              <img
                src="/src/assets/Deadlock.png"
                alt="game image"
                width={166}
                height={66}
              />
            </Link>
          </li>
        </ul>
        {mobaListLength > 3 ? (
          <Button text="Show More" />
        ) : (
          <Button text="Genre Page" />
        )}
      </li>
    </>
  );
}
