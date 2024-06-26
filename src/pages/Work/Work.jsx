import "./Work.scss";
import down from '../../assets/imgs/down_arrow.png'
import mockup1 from '../../assets/imgs/mockup-1.jpeg'
import mockup2 from '../../assets/imgs/mockup-2.jpeg'

export default function Work() {
  return (
    <div className="work">
      <div className="work__header">
        <h1 className="work__header-h1">Hello, I’m <br/> Graciela Mora.</h1>
        <p className="work__header-p">A cybersecurity specialist who’s <br /> transitioning to full stack engineer.</p>
      </div>
      <div className="work__arrow">
        <img className="work__arrow-img" src={down} alt="" />
      </div>
      <div className="work__main">
        <div className="work__card">
          <div className="work__card-left">
            <div className="work__card-top">
              <h2 className="work__card-h2">01 / The Local Shop</h2>
              <p className="work__card-pb">The Local Shop started from a deep passion to help local businesses struggling with gentrification and economic displacement.</p>
              <p className="work__card-p">Frontend was developed in React and deployed in Vercel, used mapbox API to display a dynamic map and show the shops that have been submitted around your area.</p>
              <p className="work__card-p">Backend was developed using JavaScript, Express, Node.js, MySQL, Knex, JWT and deployed in Heroku while using JawsDB</p>
            </div>
            <div className="work__card-as"> 
            <a className="work__card-a" href="https://github.com/moragra/the-local-shop-app">See project - client ↗</a>
            <a className="work__card-a" href="https://github.com/moragra/the-local-shop-app-server">See project - server ↗</a>
            </div>
          </div>
          <div className="work__card-right">
            <img className="work__card-img" src={mockup1} alt="" />
          </div>
        </div>
        <hr className="work__hr"/>
        <div className="work__card">
          <div className="work__card-left">
            <div className="work__card-top">
            <h2 className="work__card-h2">02 / Wealthsimple Industry Project</h2>
            <p className="work__card-pb">Facilitated a reward system that uses Wealthsimple’s youtube content to teach their clients financial literacy.</p>
            <p className="work__card-pb">Develop an idea of a network to share and have visibility of the users portfolio and its followers reusing their base cash transfer username system.</p>
            </div>
            <a className="work__card-a" href="https://github.com/moragra/wealthsimple">See project →</a>
          </div>
          <div className="work__card-right">
            <img className="work__card-img" src={mockup2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
