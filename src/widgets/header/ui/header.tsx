import { Link } from "react-router-dom";
import { AppRoute } from "@/shared/const";
import styles from './header.module.scss';

export function Header(): JSX.Element {

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link to={AppRoute.Main}>
          <svg
            className={styles.header__svg}
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="64" height="64" fill="#FAA860" />
            <text
              className={styles.header__text}
              x="50%"
              y="75%"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              КА
            </text>
          </svg>
        </Link>
      </div>
    </header>
  );
}
