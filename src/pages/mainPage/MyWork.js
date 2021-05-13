import "./MyWork.css";
import MyWorkImg1 from "../../img/temsil.png";
import MyWorkImg2 from "../../img/spear.jpg";
import MyWorkImg3 from "../../img/img.png";
import MyWorkImg4 from "../../img/temsil.png";
import MyWorkImg5 from "../../img/spear.jpg";

function MyWork() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title">My Work</h2>
      <p className="section__subtitle"></p>
      <div className="portfolio">
        <a href="portfolio-item.html" className="portfolio__item">
          <img src={MyWorkImg1} alt="" className="portfolio__img" />
        </a>
        <a href="../#asd" className="portfolio__item">
          <img src={MyWorkImg2} alt="" className="portfolio__img" />
        </a>
        <a href="../#asd" className="portfolio__item">
          <img src={MyWorkImg3} alt="" className="portfolio__img" />
        </a>
        <a href="../#asd" className="portfolio__item">
          <img src={MyWorkImg4} alt="" className="portfolio__img" />
        </a>
        <a href="../#asd" className="portfolio__item">
          <img src={MyWorkImg5} alt="" className="portfolio__img" />
        </a>
      </div>
    </section>
  );
}

export default MyWork;
