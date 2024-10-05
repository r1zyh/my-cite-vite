import { GenreListItem } from "./genre-list-item/ui";
import { GenreListWrapper } from "./genre-list-wrapper";

export function GenreList(): JSX.Element {
  return (
    <GenreListWrapper>
      <GenreListItem />
    </GenreListWrapper>
  );
}
