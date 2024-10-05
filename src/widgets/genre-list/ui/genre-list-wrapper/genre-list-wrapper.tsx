import { ReactNode } from "react";

type TGenreListWrapperProps = {
    children: ReactNode;
}

export function GenreListWrapper({ children }: TGenreListWrapperProps): JSX.Element {
  return (
    <ul className="genre__list">
      {children}
    </ul>
  );
}
