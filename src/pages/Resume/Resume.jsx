import "./Resume.scss";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume__left">
        <h1 className="resume__h1">Graciela Mora</h1>
        <h2 className="resume__top-h2">Software Engineer</h2>
        <div className="resume__info-top">
          <p className="resume__gt">moragraa@gmail.com</p>
          <p className="resume__gt">403-671-1374</p>
          <p className="resume__gt">
            <a className="resume__a" href="https://www.linkedin.com/in/graciela--mora">linkedin.com/in/graciela--mora</a>
          </p>
          <p className="resume__gt">
            <a className="resume__a" href="https://www.github.com/moragra">github.com/moragra</a>
          </p>
        </div>
        <div className="resume__info-bttm">
          <div>
            <h2 className="resume__h2">Profile</h2>
            <p className="resume__gt">
              I love diving into problems and the thinking process behind figuring them out. 
              After six years in cybersecurity, where I often took on SA tasks, I discovered my
              true joy in hands-on technical challenges. Coding is my happy place, 
              I can spend hours immersed in it, creating cool apps and
              solving puzzles, driven by a love for logic and creativity.
            </p>
          </div>
          <div>
            <h2 className="resume__h2">Skills</h2>
            <div className="resume__skills">
              <p className="resume__gt">
                Jira, Salesforce, Confluence, Agile, Scrum, Project Managing
              </p>
              <p className="resume__gt">
                HTML, CSS, Sass, JavaScript, REST APIs, React JS, Node.js, SQL,
                Knex, Backend
              </p>
              <p className="resume__gt">Python, MySQL, Data Analysis</p>
              <p className="resume__gt">
                SIEM, WAF, Bot Protection, Security Analysis, Endpoint Security,
                Linux System Administration, OWASP
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="resume__right">
        <h2 className="resume__h2">Experience</h2>
        <h3 className="resume__h3">Technical Account Manager | F5 Inc</h3>
        <p className="resume__gt">JAN2023-PRESENT, CALGARY, AB</p>
        <ul className="resume__ul">
          <li className="resume__gt">
            Orchestrate the design of bot management strategies for web and
            mobile apps, enhancing security measures.
          </li>
          <li className="resume__gt">
            Lead the migration of applications from On-Prem to Cloud SaaS for
            major retailers, ensuring robust security.
          </li>
          <li className="resume__gt">
            Analyze customer applications to mitigate fraud, driving solution
            design and performance visibility, resulting in increasing upsells.
          </li>
        </ul>
        <h3 className="resume__h3">
          Security and Web Delivery Technical Project Manager | Akamai
          Technologies
        </h3>
        <p className="resume__gt">OCT 2019- DEC 2022, SAN JOSE, CR</p>
        <ul className="resume__ul">
          <li className="resume__gt">
            Led integrations of web and mobile apps within Akamai, optimizing
            security and performance delivery for more than 20 customers
            simultaneously.
          </li>
          <li className="resume__gt">
            Collaborated with channel partners, assessed traffic patterns, and
            innovative technical solutions to meet business needs.
          </li>
          <li className="resume__gt">
            Facilitated cross-team coordination, delivering product training,
            managing accounts, and delivering impactful technical presentations.
          </li>
        </ul>
        <h3 className="resume__h3">Technical Consultant | UST Global</h3>
        <p className="resume__gt">SEPT 2018 - OCT 2019, SAN JOSE, CR</p>
        <ul className="resume__ul">
          <li className="resume__gt">
            Leveraged expertise in Linux Server Administration, Networking, and
            Cybersecurity to develop robust solutions.
          </li>
          <li className="resume__gt">
            Proficiency in Python, MySQL, HTML, CSS, and JavaScript
          </li>
        </ul>
        <h2 className="resume__h2">Education</h2>
        <h3 className="resume__h3">
          BrainStation | Diploma, Software Engineering
        </h3>
        <p className="resume__gt">MAR 2024-JUN 2024, CALGARY, AB</p>
        <h3 className="resume__h3">
          CertiProf | Scrum Foundation Professional Certificate
        </h3>
        <p className="resume__gt">2022, SAN JOSE, CR</p>
        <h3 className="resume__h3">
          Project Management Institute (PMI) | Agile Foundations
        </h3>
        <p className="resume__gt">2022, SAN JOSE, CR</p>
        <h3 className="resume__h3">
          Fidelitas University | Industrial Engineering and Systems Engineering
        </h3>
        <p className="resume__gt">SEPT 2016 - 2018 (Drop Out), SAN JOSE, CR</p>
        <h2 className="resume__h2">Projects</h2>
        <h3 className="resume__h3">
          Software Engineer | The Local Shop Capstone
        </h3>
        <p className="resume__gt">JUN 2024, BRAINSTATION CAPSTONE</p>
        <ul className="resume__ul">
          <li className="resume__gt">
            Using React, Node, Firebase, REST APIs and SQL, develop an app to
            combat global gentrification by promoting local businesses.
            Addressing issues like economic displacement and the impact of big
            companies in conflicts, like the genocide in Palestine, the project
            empowers community.
          </li>
        </ul>
        <h3 className="resume__h3">
          Software Engineer | Wealthsimple Industry Hackathon
        </h3>
        <p className="resume__gt">MAY 2024, BRAINSTATION HACKATHON</p>
        <ul className="resume__ul">
          <li className="resume__gt">
            Facilitated a reward system that uses Wealthsimple's youtube content
            to teach their clients financial literacy.
          </li>
          <li className="resume__gt">
            Develop an idea of a network to share and have visibility of the
            users portfolio and its followers reusing their base cash transfer
            username system.
          </li>
        </ul>
      </div>
    </div>
  );
}
