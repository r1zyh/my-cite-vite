import { ReactNode } from 'react';
import styles from './game-list-wrapper.module.scss';

type TGameListWrapperProps = {
  children: ReactNode;
};

export const GameListWrapper = ({ children }: TGameListWrapperProps): JSX.Element => {
  return <ul className={styles.game__list}>{children}</ul>;
};
