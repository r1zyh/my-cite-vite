import { AppRoute } from '@/shared/const';
import { Link } from 'react-router-dom';
import styles from './game-list-item.module.scss';
import { TGame } from '../types';
//заготовка для работы с данными сервера

type TGameListItemProps = {
  game: TGame;
};

export const GameListItem = ({ game }: TGameListItemProps): JSX.Element => {

  const {title, image} = game;

  return (
    <li className={styles['game__list--item']}>
      <Link to={AppRoute.Game}>
        <h3 className={styles.game__title}>{title}</h3>
        <img
          className={styles.game__image}
          src={image}
          alt={`${title} image`}
          width={166}
          height={66}
        />
      </Link>
    </li>
  );
};
