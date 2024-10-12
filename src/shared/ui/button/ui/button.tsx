import { AppRoute } from '@/shared/const';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

type TButtonProps = {
  text: string;
};

export const Button = ({ text }: TButtonProps): JSX.Element => {
  return (
    <Link className={styles.show__more} to={AppRoute.Genre}>
      {text}
    </Link>
  );
};
