import { Button } from "@/shared/ui/button/ui";
import { GameList } from "@/widgets/games-list/ui";
import { GenreDescription } from "../genre-description";
import { useState } from "react";
import { TGame } from "@/widgets/games-list/ui/types";

export function GenreListItem(): JSX.Element {
  const gameListLength = 4;

  const genres = [
    {
      title: "SoulsLike",
      description:
        "Soulslike (also spelled Souls-like) is a subgenre of action role-playing games known for high difficulty level and emphasis on environmental storytelling, typically in a dark fantasy setting.",
      games: [
        { title: "Dark Souls 1", image: "/src/assets/ds1.png" },
        { title: "Dark Souls 3", image: "/src/assets/ds3resizedV2.jpg" },
        { title: "Elden Ring", image: "/src/assets/eldenring.png" },
      ] as TGame[],
    },
    {
      title: "MOBA",
      description:
        "Multiplayer online battle arena (MOBA) is a subgenre of strategy video games in which two teams of players compete against each other on a predefined battlefield. Some text Some text Some text",
      games: [
        { title: "Dota 2", image: "/src/assets/dota2.png" },
        { title: "League of Legends", image: "/src/assets/lol.png" },
        { title: "Deadlock", image: "/src/assets/deadlock.png" },
      ] as TGame[],
    },
    {
      title: "Shooter",
      description:
        "Shooter video games or shooters are a subgenre of action video games where the focus is on the defeat of the character's enemies using ranged weapons given to the player. Some text Some text Some text",
      games: [
        { title: "CS 2", image: "/src/assets/cs2.png" },
        { title: "Valorant", image: "/src/assets/valorant.png" },
        { title: "Call of Duty: Warzone", image: "/src/assets/warzone.png" },
      ] as TGame[],
    },
    {
      title: "Shooter",
      description:
        "Shooter video games or shooters are a subgenre of action video games where the focus is on the defeat of the character's enemies using ranged weapons given to the player. Some text Some text Some text",
      games: [
        { title: "CS 2", image: "/src/assets/cs2.png" },
        { title: "Valorant", image: "/src/assets/valorant.png" },
        { title: "Call of Duty: Warzone", image: "/src/assets/warzone.png" },
      ] as TGame[],
    },
  ];

  const [descriptionToggle, setDescriptionToggle] = useState(
    Array(genres.length).fill(false)
  );

  const toggleDescription = (index: number) => {
    setDescriptionToggle((prevToggles) =>
      prevToggles.map((toggle, i) => (i === index ? !toggle : toggle))
    );
  };

  return (
    <>
      {genres.map((genre, index) => (
        <li key={index} className="genre__list--item">
          <div
            className={`genre__list--inner ${
              descriptionToggle[index] ? "flipped" : ""
            }`}
          >
            <div className="genre__item-front">
              <h2 className="genre__title" onClick={() => toggleDescription(index)}>{genre.title}</h2>
              <GameList games={genres[index].games} />
              <Button text={gameListLength > 3 ? "Show More" : "Genre Page"} />
            </div>
            <GenreDescription
              title={genre.title}
              click={() => toggleDescription(index)}
              description={genre.description}
            />
          </div>
        </li>
      ))}
    </>
  );
}
