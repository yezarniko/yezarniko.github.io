import { skillGroups } from '../data/portfolio.js';

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">02 — Toolkit</div>
            <h2 className="sec-title">Skills</h2>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.field}>
              <h3 className="skill-group-title">{group.field}</h3>
              <div className="skills-list">
                {group.skills.map((skill) => (
                  <div className="skill-pill" key={skill}>
                    <span className="dot"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
