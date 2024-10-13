import { GameRating } from './game-rating';
import { GameDescription } from './game-description';
import styles from './game-preview.module.scss';

export const GamePreview = (): JSX.Element => {
  return (
    <div className={styles.game__preview}>
      <img
        className="game__image"
        width={800}
        height={500}
        src="/src/assets/ds1gameplay.jpg"
        alt="Dark Souls: REMASTERED screenshot"
      />
      <h1 className={styles.game__title}>Dark Souls: REMASTERED</h1>
      <GameRating />
      <GameDescription />
    </div>
  );
};
