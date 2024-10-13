import { Typography } from '@mui/material';
import styles from './game-description.module.scss';

export const GameDescription = (): JSX.Element => {
  return (
    <Typography className={styles.game__description}>
      {' '}
      Dark Souls Remastered is a highly acclaimed Action Role-Playing game from FromSoftware, Inc.,
      part of the renowned Dark Soul Series. The game was released on May 24th, 2018, for the
      PlayStation 4, Xbox One, and PC, with a subsequent release on Nintendo Switch on October 19th,
      2018. Dark Souls Remastered features enhanced graphics, improved performance, and
      quality-of-life updates compared to the original 2011 release. Dark Souls Remastered includes
      the main game plus the Artorias of the Abyss DLC.
    </Typography>
  );
};
