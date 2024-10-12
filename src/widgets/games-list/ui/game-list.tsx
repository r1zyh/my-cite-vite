import { GameListItem } from './game-list-item';
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
        <GameListItem game={game} key={game.title} />
      ))}
    </GameListWrapper>
  );
};
