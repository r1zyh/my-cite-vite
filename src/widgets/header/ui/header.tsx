import { Link } from "react-router-dom";
import { AppRoute } from "@/shared/const";

export function Header(): JSX.Element {

  //временное лого, в будущем сделаю нормальную SVG

  return (
    <header className="header">
      <div className="logo">
        <Link to={AppRoute.Main}>
          <svg
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "teal", borderRadius: "20%" }}
          >
            <rect width="64" height="64" fill="#FAA860" />
            <text
              x="50%"
              y="75%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="46"
              fill="#FFFFFF"
              fontFamily="Roboto, sans-serif"
              fontWeight="bold"
              color="white"
            >
              КА
            </text>
          </svg>
        </Link>
      </div>
    </header>
  );
}
