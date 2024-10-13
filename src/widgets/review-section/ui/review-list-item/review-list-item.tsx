import { Typography } from '@mui/material';
import styles from './review-list-item.module.scss';
import { CustomRating } from '@/shared/ui/rating/ui';

export const ReviewListItem = (): JSX.Element => {
  return (
    <li className={styles['review__list--item']}>
      <div className="user">
        <img src="/src/assets/Avatar Angelina.jpg" alt="user avatar" className={styles.avatar} />
        <span className={styles.name}>Mariya Filatova</span>
      </div>
      <div className="info">
        <CustomRating size="30px" precision={0.1} value={5} />
        <Typography className={styles.text}>
          This is quite a good game, had a lot of fun playing both PVE and PVP content with coop.
          This is quite a good game, had a lot of fun playing both PVE and PVP content with coop.
          This is quite a good game, had a lot of fun playing both PVE and PVP content with coop.
        </Typography>
      </div>
    </li>
  );
};
