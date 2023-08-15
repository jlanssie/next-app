import { GraphicLink } from "../../components";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <GraphicLink
            src="/github.svg"
            url="https://www.github.com"
            alt="github"
          />
        </li>
      </ul>
    </footer>
  );
};
