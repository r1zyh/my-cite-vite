import { Rating, Typography } from '@mui/material';

export const ReviewListItem = (): JSX.Element => {
  return (
    <li className="review__list--item">
      <div className="review__user">
        <img src="/src/assets/Avatar Angelina.jpg" alt="user avatar" className="review__avatar" />
        <span className="reviews__user--name">Mariya Filatova</span>
      </div>
      <div className="review__info">
        <Rating
          className="review__rating"
          sx={{ fontSize: '30px' }}
          name="simple-readonly"
          size="large"
          readOnly
          precision={0.1}
          value={5}
        />
        <Typography className="review__info--text">
          This is quite a good game, had a lot of fun playing both PVE and PVP content with coop.
          This is quite a good game, had a lot of fun playing both PVE and PVP content with coop.
          This is quite a good game, had a lot of fun playing both PVE and PVP content with coop.
        </Typography>
      </div>
    </li>
  );
};
