import "bootstrap/dist/css/bootstrap.css";
import "./cards.css";
import { Link } from "react-router-dom";

export default function Card({ img, name }) {
  return (
    <div className="flip d-flex">
      <Link
        to={`details/${name}`}
        className="front"
        style={{ backgroundImage: `url("${img}")` }}
      ></Link>
    </div>
  );
}
