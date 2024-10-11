import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';
import { Rating } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Game = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="game__page">
          <h1 className="game__title">Dark Souls: REMASTERED</h1>
          <img
            className="game__image"
            width={800}
            height={500}
            src="/src/assets/ds1gameplay.jpg"
            alt="Dark Souls: REMASTERED screenshot"
          />
          <div className="rating__container">
            <Rating
              sx={{ fontSize: '40px' }}
              className="rating"
              name="simple-controlled"
              size="large"
              readOnly
              precision={0.1}
              value={4.7}
            />
            <span className="rating__numeric">{4.7}</span>
          </div>
          <Typography sx={{ width: '63%', lineHeight: '2', textAlign: 'justify' }}>
            {' '}
            Dark Souls Remastered is a highly acclaimed Action Role-Playing game from FromSoftware,
            Inc., part of the renowned Dark Soul Series. The game was released on May 24th, 2018,
            for the PlayStation 4, Xbox One, and PC, with a subsequent release on Nintendo Switch on
            October 19th, 2018. Dark Souls Remastered features enhanced graphics, improved
            performance, and quality-of-life updates compared to the original 2011 release. Dark
            Souls Remastered includes the main game plus the Artorias of the Abyss DLC.
          </Typography>
        </div>
        <div className="comment__section">
          <ul className="comment__list">
            <li className="comment__list--item" />
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};
