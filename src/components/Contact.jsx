import { contactLinks } from '../data/portfolio.js';

const LINKEDIN_PROFILE_URL = 'https://mm.linkedin.com/in/yezarniko?trk=profile-badge';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-inner">
        <div className="sec-num">05 — Get in touch</div>
        <h2 className="big-cta">
          Have a project in mind? <em>Let's build something that works.</em>
        </h2>
        <div className="social-badge-row">
          <div className="linkedin-badge-wrap">
            <a
              className="compact-social-badge linkedin-fallback-card"
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-badge-mark linkedin-in">in</span>
              <span className="social-badge-body">
                <img className="social-badge-avatar" src="/images/linkedin-profile.png" alt="" />
                <span className="social-badge-copy">
                  <span className="social-badge-title">Ye Zarni Ko</span>
                  <span className="social-badge-action">linkedin.com/in/yezarniko/</span>
                </span>
              </span>
            </a>
          </div>
          <a className="compact-social-badge github-badge" href="https://github.com/yezarniko" target="_blank" rel="noreferrer">
            <svg
              aria-hidden="true"
              focusable="false"
              className="social-badge-mark github-mark"
              viewBox="0 0 24 24"
            >
              <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
            </svg>
            <span className="social-badge-body">
              <img className="social-badge-avatar" src="/images/linkedin-profile.png" alt="" />
              <span className="social-badge-copy">
                <span className="social-badge-title">GitHub</span>
                <span className="social-badge-action">github.com/yezarniko</span>
              </span>
            </span>
          </a>
        </div>
        <div className="contact-action-row">
          <a className="btn btn-line contact-phone-btn" href="tel:+959797223755">
            <img className="action-icon phone-icon" src="/images/phone-icon.png" alt="" />
            <span>+959 797223755</span>
          </a>
          <a className="btn btn-line telegram-btn" href="https://t.me/mg_ye_the_great" target="_blank" rel="noreferrer">
            <img className="action-icon telegram-icon" src="/images/telegram-logo.svg" alt="" />
            <span>Message me</span>
          </a>
        </div>
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
