import { Link } from "react-router-dom";
import { AppRoute } from "../../../shared/const";

export function NotFound(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        Pls return to the <Link to={AppRoute.Main}>Main page</Link>
      </p>
    </div>
  );
}
