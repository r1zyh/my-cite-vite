import styles from './game-rating.module.scss';
import { CustomRating } from '@/shared/ui/rating/ui';

export const GameRating = (): JSX.Element => {
  return (
    <div className={styles.rating__container}>
      <CustomRating size="40px" precision={0.1} value={4.7} />
      <span className={styles.rating__numeric}>{4.7}</span>
    </div>
  );
};
