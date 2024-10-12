import { Header } from '@/widgets/header/ui';
import { Rating } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Game = (): JSX.Element => {
  return (
    <div className="game__wrapper">
      <Header />
      <main>
        <div className="game__page">
          <div className="game__preview">
            <img
              className="game__image"
              width={800}
              height={500}
              src="/src/assets/ds1gameplay.jpg"
              alt="Dark Souls: REMASTERED screenshot"
            />
            <h1 className="game__title">Dark Souls: REMASTERED</h1>
            <div className="rating__container">
              <Rating
                className="rating__total"
                sx={{ fontSize: '40px' }}
                name="simple-readonly"
                size="large"
                readOnly
                precision={0.1}
                value={4.7}
              />
              <span className="rating__numeric">{4.7}</span>
            </div>
            <Typography sx={{ width: '63%', lineHeight: '2', textAlign: 'justify' }}>
              {' '}
              Dark Souls Remastered is a highly acclaimed Action Role-Playing game from
              FromSoftware, Inc., part of the renowned Dark Soul Series. The game was released on
              May 24th, 2018, for the PlayStation 4, Xbox One, and PC, with a subsequent release on
              Nintendo Switch on October 19th, 2018. Dark Souls Remastered features enhanced
              graphics, improved performance, and quality-of-life updates compared to the original
              2011 release. Dark Souls Remastered includes the main game plus the Artorias of the
              Abyss DLC.
            </Typography>
          </div>
          <div className="review__section">
            <ul className="review__list">
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
                    This is quite a good game, had a lot of fun playing both PVE and PVP content
                    with coop. This is quite a good game, had a lot of fun playing both PVE and PVP
                    content with coop. This is quite a good game, had a lot of fun playing both PVE
                    and PVP content with coop.
                  </Typography>
                </div>
              </li>
              <li className="review__list--item">
                <div className="review__user">
                  <img src="/src/assets/Avatar Max.jpg" alt="user avatar" className="review__avatar" />
                  <span className="reviews__user-name">Andrei Pahomov</span>
                </div>
                <div className="review__info">
                  <Rating
                    className="review__rating"
                    sx={{ fontSize: '30px' }}
                    name="simple-readonly"
                    size="large"
                    readOnly
                    precision={0.1}
                    value={4.7}
                  />
                  <Typography className="review__info--text">
                    This is quite a good game, had a lot of fun playing both PVE and PVP content
                    with coop. This is quite a good game, had a lot of fun playing both PVE and PVP
                    content with coop. This is quite a good game, had a lot of fun playing both PVE
                    and PVP content with coop.
                  </Typography>
                </div>
              </li>
              <li className="review__list--item">
                <div className="review__user">
                  <img src="/src/assets/Avatar Max.jpg" alt="user avatar" className="review__avatar" />
                  <span className="reviews__user-name">Kirill Ananyev</span>
                </div>
                <div className="review__info">
                  <Rating
                    className="review__rating"
                    sx={{ fontSize: '30px' }}
                    name="simple-readonly"
                    size="large"
                    readOnly
                    precision={0.1}
                    value={3.4}
                  />
                  <Typography className="review__info--text">
                    This is quite a good game, had a lot of fun playing both PVE and PVP content
                    with coop. This is quite a good game, had a lot of fun playing both PVE and PVP
                    content with coop. This is quite a good game, had a lot of fun playing both PVE
                    and PVP content with coop.
                  </Typography>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
