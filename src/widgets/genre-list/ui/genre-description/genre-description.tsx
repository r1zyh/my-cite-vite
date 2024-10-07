import { Button } from "@/shared/ui/button/ui";

export function GenreDescription(): JSX.Element {
  return (
    <li className="genre__list--item">
      <h2>SoulsLike</h2>
      <p className="genre__description--text">
        {" "}
        Soulslike (also spelled Souls-like) is a subgenre of action role-playing
        games known for high difficulty level and emphasis on environmental
        storytelling, typically in a dark fantasy setting.{" "}
      </p>
      <Button text="Genre Page" />
    </li>
  );
}
