import { Link } from "react-scroll";
import "./styles.css";

export function Header() {
  return (
    <div className="header-container">
      <Link to="intro">Select-1</Link>
      <Link to="info">Select-2</Link>
      <Link to="price">Select-3</Link>
      <Link to="footer">Select-4</Link>
    </div>
  );
}
