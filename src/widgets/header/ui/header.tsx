import { Link } from 'react-router-dom';
import { AppRoute } from '@/shared/const';
import styles from './header.module.scss';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Box } from '@mui/material';

type THeaderProps = {
  lightTheme: boolean;
  onToggleTheme: () => void;
};

export const Header = ({ lightTheme, onToggleTheme }: THeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <Box onClick={onToggleTheme}>{lightTheme ? <Brightness4 /> : <Brightness7 />}</Box>
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
};
