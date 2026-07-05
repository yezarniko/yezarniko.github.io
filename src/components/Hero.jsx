import { useState } from 'react';
import { socialLinks } from '../data/portfolio.js';

function Hero() {
  const [isPortraitLoaded, setIsPortraitLoaded] = useState(false);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Software Engineer · Yangon, Myanmar</div>
          <h1 className="name">
            Ye Zarni Ko
            <br />
            <em>builds things that learn.</em>
          </h1>
          <p className="role">AI / ML Engineer &nbsp;·&nbsp; Full-Stack Developer</p>
          <p className="lede">
            I turn ideas into products that solve real business problems — from computer vision and speech models to
            the web systems that ship them. Currently at Core Value Software Solutions, integrating AI into everyday
            business software.
          </p>
          <div className="cta-row">
            <a className="btn btn-solid" href="#projects">
              View Projects →
            </a>
            <a className="btn btn-line" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="social-row">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className={`portrait${isPortraitLoaded ? ' is-loaded' : ''}`}>
          {!isPortraitLoaded && <div className="portrait-skeleton" aria-hidden="true" />}
          <img
            src="/images/portrait.png?v=transparent-5"
            alt="Ye Zarni Ko"
            loading="lazy"
            decoding="async"
            onLoad={() => setIsPortraitLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
