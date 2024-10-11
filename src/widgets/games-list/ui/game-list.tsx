import { AppRoute } from '@/shared/const';
import { Link } from 'react-router-dom';
import { GameListWrapper } from './game-list-wrapper';
import { TGame } from './types';

type TGameListProps = {
  games?: TGame[];
};

export const GameList = ({ games }: TGameListProps): JSX.Element => {
  console.log('Game List if statement');
  if (!games) {
    return <></>; // переделать
  }
  return (
    <GameListWrapper>
      {games.map((game) => (
        <li className="game__list--item" key={game.title}>
          <Link to={AppRoute.Game}>
            <h3>{game.title}</h3>
            <img src={game.image} alt={game.title} width={166} height={66} />
          </Link>
        </li>
      ))}
    </GameListWrapper>
  );
};
