/* Data */
import projectsAll from "@/data/projects";
/* Components */
import ProjectCard from "@comp/ProjectCard";
/* React */
import { useEffect, useState } from "react";

/**
 * *Projects
 *
 * @returns {ReactNode} The representation of Projects UI
 */
function Projects() {
  const [numberOfPrjectsToDisplay, setNumberOfProjectsToDisplay] = useState(0);

  useEffect(() => {
    if (projectsAll.length < 3)
      setNumberOfProjectsToDisplay(projectsAll.length);
    else setNumberOfProjectsToDisplay(3);
  }, []);

  const projects = projectsAll.slice(0, numberOfPrjectsToDisplay);

  return (
    <section className="projects" id="projects">
      <h3 className="projects__header">Opensource Projects</h3>
      <div className="projects__warp">
        <div className="projects__box">
          {projects.map((project, i) => (
            <ProjectCard {...project} key={i} />
          ))}
        </div>
        {projectsAll.length !== numberOfPrjectsToDisplay && (
          <div className="projects__more_btn">
            <button
              onClick={() =>
                setNumberOfProjectsToDisplay((numOfPrjectsToDisplay) => {
                  if (numOfPrjectsToDisplay < projectsAll.length) {
                    let n = numOfPrjectsToDisplay + 3;
                    if (n > projectsAll.length) return projectsAll.length;
                    else return n;
                  } else return numOfPrjectsToDisplay;
                })
              }
            >
              <h4>More</h4>
            </button>
            <svg
              width="21"
              height="32"
              viewBox="0 0 21 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="more-icon">
                <path
                  id="Vector"
                  d="M0 5.37834L4.2798 0L21 21.5134L4.2798 43.0267L0 37.6484L12.6 21.5134L0 5.37834Z"
                  fill="black"
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
