import { ReviewListItem } from '../review-list-item';
import styles from './review-list.module.scss';

export const ReviewList = (): JSX.Element => {
  return (
    <ul className={styles.review__list}>
      <ReviewListItem />
      <ReviewListItem />
      <ReviewListItem />
    </ul>
  );
};
