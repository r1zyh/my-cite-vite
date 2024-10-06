import { AppRoute } from "@/shared/const";
import { Link } from "react-router-dom";

//заготовка для работы с данными сервера

export function GameListItem(): JSX.Element {
  return (
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
  );
}
