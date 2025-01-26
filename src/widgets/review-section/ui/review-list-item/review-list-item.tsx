import { Typography } from '@mui/material';
import styles from './review-list-item.module.scss';
import { CustomRating } from '@/shared/ui/rating/ui';
import { TReview } from './types';

type TReviewListItemProps = {
  review: TReview;
};

export const ReviewListItem = ({ review }: TReviewListItemProps): JSX.Element => {
  const { id, user, comment, rating } = review;
  return (
    <li className={styles['review__list--item']} id={id}>
      <div className={styles.user}>
        <img src={user.avatarUrl} alt={user.avatarUrl} className={styles.avatar} />
        <span className={styles.name}>{user.name}</span>
      </div>
      <div className={styles.info}>
        <CustomRating size="30px" precision={0.1} value={rating} readOnly />
        <Typography className={styles.text}>{comment}</Typography>
      </div>
    </li>
  );
};
