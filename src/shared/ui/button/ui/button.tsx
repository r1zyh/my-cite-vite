import { AppRoute } from "@/shared/const";
import { Link } from "react-router-dom";

type TButtonProps = {
  text: string;
};

export function Button({ text }: TButtonProps): JSX.Element {
  return (
    <Link className="show__more" to={AppRoute.Genre}>
      {text}
    </Link>
  );
}
