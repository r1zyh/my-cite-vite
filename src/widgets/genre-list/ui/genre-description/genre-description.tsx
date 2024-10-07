import { Button } from "@/shared/ui/button/ui";

type TGenreDescriptionProps = {
  title: string;
  click: () => void;
  description: string;
};

export function GenreDescription({
  title,
  click,
  description,
}: TGenreDescriptionProps): JSX.Element {
  return (
    <div className="genre__item--back">
      <h2 onClick={click}>{title}</h2>
      <p className="genre__description--text"> {description} </p>
      <Button text="Genre Page" />
    </div>
  ) 
}
