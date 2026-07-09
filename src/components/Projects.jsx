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
            <h2 className="sec-title">Featured Projects</h2>
          </div>
          <a className="sec-more" href="https://github.com/yezarniko" target="_blank" rel="me noreferrer">
            View all projects →
          </a>
        </div>
        <div className="proj-list">
          {projects.map((project, index) => (
            <div className="proj-row" key={project.title}>
              <div className="proj-idx">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h3 className="proj-title">
                  {project.title}
                  <ArrowIcon />
                </h3>
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
