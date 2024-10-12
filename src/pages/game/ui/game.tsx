import { Header } from '@/widgets/header/ui';
import { ReviewSection } from '@/widgets/review-section';
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
            <Typography className="game__description">
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
          <ReviewSection />
        </div>
      </main>
    </div>
  );
};
