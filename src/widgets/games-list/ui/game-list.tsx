import { AppRoute } from "@/shared/const";
import { Link } from "react-router-dom";
import { GameListWrapper } from "./game-list-wrapper";

type TGameListProps = {
  index?: number;
};

export function GameList({ index }: TGameListProps): JSX.Element {
  return index === 1 ? (
    <GameListWrapper>
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
    </GameListWrapper>
  ) : (
    <GameListWrapper>
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
    </GameListWrapper>
  );
}
