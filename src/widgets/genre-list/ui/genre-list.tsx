import { GenreListItem } from './genre-list-item';
import { GenreListWrapper } from './genre-list-wrapper';

export const GenreList = (): JSX.Element => {
  return (
    <GenreListWrapper>
      <GenreListItem />
    </GenreListWrapper>
  );
};
