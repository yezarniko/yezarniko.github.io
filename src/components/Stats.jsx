import { stats } from '../data/portfolio.js';

function Stats() {
  return (
    <div className="wrap stats">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <div className="num">{stat.value}</div>
          <div className="label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Stats;
