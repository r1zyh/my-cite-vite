import { Button } from '@/shared/ui/button/ui';
import Typography from '@mui/material/Typography';
import styles from './genre-description.module.scss';

type TGenreDescriptionProps = {
  title: string;
  click: () => void;
  description: string;
};

export const GenreDescription = ({
  title,
  click,
  description,
}: TGenreDescriptionProps): JSX.Element => {
  return (
    <div className={styles['genre__item--back']}>
      <h2 className={styles.genre__title} onClick={click}>
        {title}
      </h2>
      <Typography className={styles['genre__description--text']}> {description} </Typography>
      <Button text="Genre Page" />
    </div>
  );
};
