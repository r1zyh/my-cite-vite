import { ReactNode } from 'react';
import styles from './genre-list-wrapper.module.scss';

type TGenreListWrapperProps = {
  children: ReactNode;
};

export const GenreListWrapper = ({ children }: TGenreListWrapperProps): JSX.Element => {
  return <ul className={styles.genre__list}>{children}</ul>;
};
