import { ReactNode } from 'react';

type TGameListWrapperProps = {
  children: ReactNode;
};

export const GameListWrapper = ({ children }: TGameListWrapperProps): JSX.Element => {
  return <ul className="game__list">{children}</ul>;
};
