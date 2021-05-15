import "./AboutMe.css";
import aboutMeImg from "../../img/spear.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who i am</h2>
      <p className="section__subtitle section__subtitle--about">
        Mobil developer
      </p>
      <div className="about-me__body">
        <p>
          Hello i am Onur ÖZDAMAR. I am 23 years old. I love playing chess and
          listening piano. I am studying at Bursa Uludag University, i will
          graduate at 2022. I am into mobile development and backend
          development.
        </p>
        <p>I developed apps in desktop, mobile and web.</p>
      </div>
      <img
        className="about-me__img"
        src={aboutMeImg}
        alt="Onur learning against a bus"
      />
    </section>
  );
}

export default AboutMe;
