import { experience } from '../data/portfolio.js';

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">04 — Track Record</div>
            <div className="sec-title">Experience</div>
          </div>
        </div>
        {experience.map((item) => (
          <div className="exp-item" key={`${item.role}-${item.company}`}>
            <div className="exp-date">{item.date}</div>
            <div>
              <div className="exp-role">{item.role}</div>
              <div className="exp-co">{item.company}</div>
              <div className="exp-desc">{item.description}</div>
              <div className="exp-loc">{item.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
