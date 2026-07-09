import { experience } from '../data/portfolio.js';

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">04 — Track Record</div>
            <h2 className="sec-title">Experience</h2>
          </div>
        </div>
        {experience.map((item) => (
          <div className="exp-item" key={`${item.role}-${item.company}`}>
            <div className="exp-date">{item.date}</div>
            <div>
              <h3 className="exp-role">{item.role}</h3>
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
