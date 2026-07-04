import { skills } from '../data/portfolio.js';

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">02 — Toolkit</div>
            <div className="sec-title">Skills</div>
          </div>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-pill" key={skill}>
              <span className="dot"></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
