import { ArrowCircleUp, ArrowUp } from "phosphor-react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import "./styles.css";

let scroll = Scroll.animateScroll;

export function Header() {
  function handleTopScroll() {
    scroll.scrollToTop();
  }
  return (
    <div className="header-container">
      <Link
        duration={500}
        spy={true}
        smooth={true}
        offset={-70}
        className="link"
        to="intro"
        style={{ color: "#22e8" }}
      >
        React
      </Link>
      <Link
        duration={500}
        spy={true}
        smooth={true}
        offset={-70}
        className="link"
        to="info"
        style={{ color: "#2e2e" }}
      >
        Node
      </Link>
      <Link
        duration={500}
        spy={true}
        smooth={true}
        offset={-70}
        className="link"
        to="price"
        style={{ color: "#e1ae11" }}
      >
        JavaScript
      </Link>
      <Link
        duration={500}
        spy={true}
        smooth={true}
        offset={-70}
        className="link"
        to="footer"
        style={{ color: "#999999" }}
      >
        React Native
      </Link>

      <button className="action-top-scroll" onClick={handleTopScroll}>
        <ArrowCircleUp weight="bold" size={34} />
      </button>
    </div>
  );
}
