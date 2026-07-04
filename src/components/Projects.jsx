import { projects } from '../data/portfolio.js';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">03 — Selected Work</div>
            <div className="sec-title">Featured Projects</div>
          </div>
          <a className="sec-more" href="#">
            View all projects →
          </a>
        </div>
        <div className="proj-list">
          {projects.map((project, index) => (
            <div className="proj-row" key={project.title}>
              <div className="proj-idx">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <div className="proj-title">
                  {project.title}
                  <ArrowIcon />
                </div>
                <div className="proj-desc">{project.description}</div>
              </div>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
