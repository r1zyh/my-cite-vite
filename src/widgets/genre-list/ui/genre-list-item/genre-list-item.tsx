import { Button } from "@/shared/ui/button/ui";
import { GameList } from "@/widgets/games-list/ui";

export function GenreListItem(): JSX.Element {
  const soulsListLength = 4;
  const mobaListLength = 4;

  return (
    <>
      <li className="genre__list--item">
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
