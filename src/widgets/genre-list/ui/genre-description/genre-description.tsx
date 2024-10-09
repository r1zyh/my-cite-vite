import { Button } from "@/shared/ui/button/ui";
import Typography from "@mui/material/Typography";

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
      <h2 className="genre__title" onClick={click}>{title}</h2>
      <Typography className="genre__description--text"> {description} </Typography>
      <Button text="Genre Page" />
    </div>
  ) 
}
