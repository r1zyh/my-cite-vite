import { Button } from "@/shared/ui/button/ui";
import { GameList } from "@/widgets/games-list/ui";
import { GenreDescription } from "../genre-description";

export function GenreListItem(): JSX.Element {
  const soulsListLength = 4;
  const mobaListLength = 4;

  return (
    <>
      <div className="genre__list--inner">
        <li className="genre__list--item front" >
          <h2>SoulsLike</h2>
          <>
            <GameList index={1} />
            {soulsListLength > 3 ? (
              <Button text="Show More" />
            ) : (
              <Button text="Genre Page" />
            )}
          </>
        </li>
        <GenreDescription />
      </div>
      <li className="genre__list--item">
        <h2>MOBA</h2>
        <GameList />
        {mobaListLength > 3 ? (
          <Button text="Show More" />
        ) : (
          <Button text="Genre Page" />
        )}
      </li>
    </>
  );
}
