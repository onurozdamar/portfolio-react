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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          error ad veniam perspiciatis corporis dolores culpa asperiores
          inventore rerum maiores? Eveniet fugit odit provident facilis error
          exercitationem ea deserunt delectus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex laborum
          soluta mollitia inventore dolor, eos praesentium cum, distinctio
          delectus quis fugiat culpa, neque officiis reprehenderit eveniet
          aliquid possimus aspernatur facilis?
        </p>
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
