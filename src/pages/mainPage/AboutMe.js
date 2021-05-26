import "./AboutMe.css";
import aboutMeImg from "../../img/spear.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Ben Kimim?</h2>
      <p className="section__subtitle section__subtitle--about">
        Bilgisayar Mühendisliği Öğrencisi
      </p>
      <div className="about-me__body">
        <p>
          Merhaba ben Onur ÖZDAMAR. 23 yaşındayım, satranç oynamayı ve piyano
          dinlemeyi seviyorum. Bursa Uludağ Üniversitesinde Bilgisayar
          Mühendisliği'nde 3. sınıf öğrencisi olarak öğrenim görmekteyim. Mobil
          uygulama geliştirme ve back-end geliştirmeye ilgi duyuyorum.
        </p>
        <p>
          Lisede makine bölümünde öğrenim görüyordum fakat yıllar geçtikçe
          makine bölümünün bana uygun olmadığını farkettim. Makine bölümünde
          gördüğümüz solidworks tarzında yazılımlara olan ilgim ve yatkınlığım
          beni bilgisayar mühendisliğine itti. Böylece Bursa'da Bilgisayar
          Mühendisliğine başladım. Öğrendiğim ilk dillerden biri olan javayı çok
          sevdim ve bu konuda kendimi geliştirerek projeler geliştirdim. Şu an
          c# ve react öğreniyorum ve hedefim kendimi back-end ve front-end
          konusunda geliştirmek.
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
