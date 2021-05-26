import "./Introduction.css";
import picture from "../../img/img.png";

function Introduction() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Merhaba, ben <strong>Onur Özdamar</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Bilgisayar Mühendisi
      </p>
      <img className="intro__img" src={picture} alt="Onur Özdamar" />
    </section>
  );
}

export default Introduction;
