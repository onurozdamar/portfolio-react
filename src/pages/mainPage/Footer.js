function Footer() {
  return (
    <footer className="bg-gray-900 text-green-300 text-center py-10 text-2xl">
      <a href="mailto:onur.ozdamar28@gmail.com" className="font-bold">
        onur.ozdamar28@gmail.com
      </a>
      <ul className="flex justify-center">
        <li className="m-4">
          <a
            href="https://www.linkedin.com/in/onur-ozdamar/"
            className="hover:opacity-50"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="m-4">
          <a href="https://github.com/onurozdamar" className="hover:opacity-50">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
