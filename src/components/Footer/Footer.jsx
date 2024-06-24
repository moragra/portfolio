import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="footer__h3">Graciela Mora -- 2024</h3>
      <div className="footer__div">
        <Link className="footer__link"to={"https://www.linkedin.com/in/graciela--mora/"}>
          <h4 className="footer__h4">LinkedIn</h4>
        </Link>
        <Link className="footer__link" to={"https://github.com/moragra"}>
          <h4 className="footer__h4">GitHub</h4>
        </Link>
      </div>
    </div>
  );
}
