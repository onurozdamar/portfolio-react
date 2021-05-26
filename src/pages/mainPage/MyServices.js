import "./MyServices.css";

function MyServices() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">Ne Yapıyorum</h2>
      <div className="services">
        <div className="service">
          <h3>Mobil Uygulama Geliştirme</h3>
          <p>
            Javayla birlikte Android Stduio'da mobil uygulamalar
            gelişritiriyorum.
          </p>
        </div>
        <div className="service">
          <h3>Back-end Geliştirme</h3>
          <p>
            Back-end geliştirmek için c# ve entity framework kullanılıyorum.
          </p>
        </div>
        <div className="service">
          <h3>Masaüstü Geliştirme</h3>
          <p>
            Masaüstü projelerinde java kullanıyorum. Netbeans ve Processingde
            masaüstü projelerimi geliştiriyorum.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        Projelerim
      </a>
    </section>
  );
}

export default MyServices;
