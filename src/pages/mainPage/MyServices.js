import "./MyServices.css";

function MyServices() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What do i do</h2>
      <div className="services">
        <div className="service">
          <h3>Design + Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            suscipit sed tempore facere eos perspiciatis dolorem sequi, vero aut
            ullam corrupti, minus accusamus delectus, quos soluta. Fuga
            accusantium laudantium saepe.
          </p>
        </div>
        <div className="service">
          <h3>E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            molestiae impedit, quibusdam accusantium qui ut accusamus illo, eius
            quo provident, harum eligendi repudiandae numquam! Earum est
            laboriosam quae perferendis odio?
          </p>
        </div>
        <div className="service">
          <h3>Wordpress</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            expedita dolores beatae voluptatem veritatis? Ea ipsum animi
            consequatur, id error obcaecati, odit molestiae illum porro rerum
            recusandae expedita. Voluptas.
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
