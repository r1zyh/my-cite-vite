import { ReviewListItem } from '../review-list-item';
import styles from './review-list.module.scss';
import reviews from '@/shared/data/mock-review.json';

export const ReviewList = (): JSX.Element => {
  return (
    <ul className={styles.review__list}>
      {reviews.map((review) => (
        <ReviewListItem review={review} />
      ))}
    </ul>
  );
};
