import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:onur.ozdamar28@gmail.com" className="footer__link">
        onur.ozdamar28@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            href="https://www.linkedin.com/in/onur-ozdamar/"
            className="social-list__link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            href="https://github.com/onurozdamar"
            className="social-list__link"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
