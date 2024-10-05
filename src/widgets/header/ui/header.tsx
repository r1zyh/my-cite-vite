import { Link } from "react-router-dom";
import { AppRoute } from "@/shared/const";

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="logo">
        <Link to={AppRoute.Main}>
          <img src="" alt="my hopefully future self made logo" />
        </Link>
      </div>
    </header>
  );
}
