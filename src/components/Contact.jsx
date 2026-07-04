import { contactLinks } from '../data/portfolio.js';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-inner">
        <div className="sec-num">05 — Get in touch</div>
        <h2 className="big-cta">
          Have a project in mind? <em>Let's build something that works.</em>
        </h2>
        <a className="btn btn-solid" href="mailto:yezarniko@gmail.com">
          Say Hello →
        </a>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              className="clink"
              href={link.href}
              key={link.label}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <span className="k">{link.label}</span>
              <span className="v">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
