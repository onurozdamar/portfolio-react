import MyWorkImg1 from "../../img/abalone.png";
import MyWorkImg2 from "../../img/calis.png";
import MyWorkImg3 from "../../img/ingilizce.jpg";
import MyWorkImg4 from "../../img/shoplist.jpg";
import MyWorkImg5 from "../../img/sudoku.png";
import MyWorkImg6 from "../../img/xox.png";

const projects = [
  { id: 0, img: MyWorkImg1, path: "" },
  { id: 1, img: MyWorkImg2, path: "" },
  { id: 2, img: MyWorkImg3, path: "" },
  { id: 3, img: MyWorkImg4, path: "" },
  { id: 4, img: MyWorkImg5, path: "" },
  { id: 5, img: MyWorkImg6, path: "" },
];

function MyWork() {
  return (
    <section
      className="text-center"
      id="work"
      style={{ backgroundColor: "var(--clr-dark)", color: "var(--clr-light)" }}
    >
      <h2 className="mb-4">Projelerim</h2>
      <div className="grid grid-cols-projects">
        {projects.map((project) => (
          <a
            href={project.path}
            className="m-2 overflow-hidden hover:z-10"
            key={project.id}
          >
            <img
              src={project.img}
              alt="one of my projects"
              className=" transform hover:scale-125 hover:opacity-75"
              style={{
                transition:
                  "transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear",
              }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default MyWork;
