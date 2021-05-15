import "./MyServices.css";

function MyServices() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What do i do</h2>
      <div className="services">
        <div className="service">
          <h3>Mobile Development</h3>
          <p>At Mobile Development i am using java.</p>
        </div>
        <div className="service">
          <h3>Backend Development</h3>
          <p>I am creating backend for apps with the c#.</p>
        </div>
        <div className="service">
          <h3>Desktop Development</h3>
          <p>
            I am using java for Desktop Development. Also i used processing to
            build apps.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}

export default MyServices;
