import "./About.scss";
import gm_photo from "../../../assets/imgs/gm_photo.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="about__header">
        <div className="about__header-left">
          <h2 className="about__h2">
            Hi I’m Graciela Mora, full stack engineer.
          </h2>
          <p className="about__bio">
            My work revolves around full stack development. I love the entire
            coding journey – from planning and implementing to solving problems
            and collaborating in teams.
          </p>
          <p className="about__bio">
            Currently, I'm a Security TAM and SA, helping customers onboard to
            SaaS, set up clusters, manage secure routing, inspect traffic, and
            troubleshoot issues. I'm also diving into Python and AWS to expand
            my skills and I’m always excited about new opportunities in tech.
          </p>
        </div>
        <div className="about__header-right">
          <img className="about__bio-img" src={gm_photo} alt="" />
        </div>
      </div>
      <div className="about__mid">
        <div className="about__mid-top">
          <h3 className="about__mid-left">Main Software </h3>
          <div className="about__mid-right">
            <p className="about__mid-p">Design: Figma</p>
            <p className="about__mid-p">Frontend: HTML, SASS, JavaScript</p>
            <p className="about__mid-p">
              JS Libraries: React, Bootstrap, Axios
            </p>
            <p className="about__mid-p">
              Backend: Express, Node.js, MySQL, Knex
            </p>
          </div>
        </div>
        <div className="about__mid-btm">
          <h3 className="about__mid-left">Main Skills</h3>
          <div className="about__mid-right">
            <p className="about__mid-p">
              Jira, Salesforce, Confluence, Agile, Scrum, Project Managing
            </p>
            <p className="about__mid-p">
              SIEM, WAF, Bot Protection, Security Analysis, Endpoint Security,
              Linux System Administration, OWASP
            </p>
          </div>
        </div>
      </div>
      <hr className="about__hr" />
      <div className="about__btm">
        <h4 className="about__btm-left">
          I am thrilled to answer to your next project →
        </h4>
        <div className="about__btm-right">
          <h4 className="about__btm-right-h4">moragraa@gmail.com</h4>
          <h5 className="about__btm-right-h5">View Resume</h5>
        </div>
      </div>
    </div>
  );
}
