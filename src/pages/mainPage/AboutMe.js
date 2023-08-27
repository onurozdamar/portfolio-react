import aboutMeImg from "../../img/spear.jpg";

function AboutMe() {
  return (
    <section className="my-0 mx-auto max-w-5xl relative" id="about">
      <h2>Ben Kimim?</h2>
      <p
        className="bg-green-300 px-4 py-1 mb-4 text-left  relative"
        style={{
          fontFamily: "var(--ff-secondary)",
          fontSize: "var(--fs-h3)",
          width: "calc(100% - 4rem)",
        }}
      >
        Bilgisayar Mühendisliği Öğrencisi
      </p>
      <img
        className="w-30 z-10 md:absolute md:right-40 md:top-14"
        style={{ boxShadow: "var(--bs)" }}
        src={aboutMeImg}
        alt="Onur learning against a bus"
      />

      <div className="md:w-2/3">
        <p>
          Merhaba ben Onur ÖZDAMAR.{" "}
          {new Date().getFullYear() - new Date("04.13.1998").getFullYear()}{" "}
          yaşındayım, satranç oynamayı ve piyano dinlemeyi seviyorum. Bursa
          Uludağ Üniversitesinde Bilgisayar Mühendisliği'nde 4. sınıf öğrencisi
          olarak öğrenim görmekteyim. Mobil uygulama geliştirme ve front-end
          geliştirmeye ilgi duyuyorum.
        </p>
        <p>
          Lisede makine bölümünde öğrenim görüyordum fakat yıllar geçtikçe
          makine bölümünün bana uygun olmadığını farkettim. Makine bölümünde
          gördüğümüz solidworks tarzında yazılımlara olan ilgim ve yatkınlığım
          beni bilgisayar mühendisliğine itti. Böylece Bursa'da Bilgisayar
          Mühendisliğine başladım. Öğrendiğim ilk dillerden biri olan javayı çok
          sevdim ve bu konuda kendimi geliştirerek projeler geliştirdim. Şu an
          react ve react-native öğreniyorum ve hedefim kendimi front-end
          konusunda geliştirmek.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
