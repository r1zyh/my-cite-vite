import { GamePreview } from '@/widgets/game-preview/ui';
import { Header } from '@/widgets/header/ui';
import { ReviewSection } from '@/widgets/review-section';
import styles from './game.module.scss';

export const Game = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.game__page}>
          <GamePreview />
          <ReviewSection />
        </div>
      </main>
    </>
  );
};
