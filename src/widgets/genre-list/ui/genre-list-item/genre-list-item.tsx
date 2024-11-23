import { Button } from '@/shared/ui/button/ui';
import { GameList } from '@/widgets/games-list/ui';
import { GenreDescription } from '../genre-description';
import { useState } from 'react';
import { TGame } from '@/widgets/games-list/ui/types';
import styles from './genre-list-item.module.scss';
import data from '@/assets/data/games.json';

const gameListLength = 4;

type TGenres = {
  title: string;
  description: string;
  games: TGame[];
};

const genres = data as TGenres[];

export const GenreListItem = (): JSX.Element => {
  const [descriptionToggle, setDescriptionToggle] = useState(Array(genres.length).fill(false));

  const toggleDescription = (index: number) => {
    setDescriptionToggle((prevToggles) =>
      prevToggles.map((toggle, i) => (i === index ? !toggle : toggle)),
    );
  };

  return (
    <>
      {genres.map((genre, index) => (
        <li key={index} className={styles['genre__list--item']}>
          <div
            className={`${styles['genre__list--inner']} ${descriptionToggle[index] ? styles.flipped : ''}`}
          >
            <div className={styles['genre__item-front']}>
              <h2 className={styles.genre__title} onClick={() => toggleDescription(index)}>
                {genre.title}
              </h2>
              <GameList games={genres[index].games} />
              <Button text={gameListLength > 3 ? 'Show More' : 'Genre Page'} />
            </div>
            <GenreDescription
              title={genre.title}
              click={() => toggleDescription(index)}
              description={genre.description}
            />
          </div>
        </li>
      ))}
    </>
  );
};
