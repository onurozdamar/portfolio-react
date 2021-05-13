import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:onur@ozdamar.dev" className="footer__link">
        onur@ozd.dev
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="google.com" className="social-list__link">
            <i className="fab fa-codepen"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="twitter.com" className="social-list__link">
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="facebook.com" className="social-list__link">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a href="instagram.com" className="social-list__link">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
