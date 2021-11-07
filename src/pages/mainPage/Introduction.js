import picture from "../../img/img.png";

function Introduction() {
  return (
    <section
      className="flex flex-col items-center relative my-0 mx-auto md:flex-row-reverse md:items-start md:justify-center"
      style={{ width: "fit-content" }}
      id="home"
    >
      <h1 className="font-light ml-4">
        Merhaba, ben <strong className="block">Onur Özdamar</strong>
      </h1>
      <p
        className="bg-green-300 px-4 py-1 mb-4 md:ml-8 text-right bottom-48 md:absolute left-0 right-0"
        style={{
          fontFamily: "var(--ff-secondary)",
          fontSize: "var(--fs-h3)",
          width: "calc(100% - 4rem)",
        }}
      >
        Front-End Developer
      </p>
      <img
        className="w-60 z-10"
        style={{ boxShadow: "var(--bs)" }}
        src={picture}
        alt="Onur Özdamar"
      />
    </section>
  );
}

export default Introduction;
