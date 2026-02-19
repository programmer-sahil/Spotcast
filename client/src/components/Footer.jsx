import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="newsletter-text">
          <h3>JOIN OUR NEWSLETTER</h3>
          <p>
            Sign up with your email address to receive news and update.
          </p>
        </div>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />
          <button type="submit">→</button>
        </form>
      </div>

      {/* Main footer grid */}
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/assets/images/logo-white.png" alt="Spotcast" />
        </div>

        <div>
          <h4>OUR MENU</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/works">Works</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h4>SERVICES</h4>
          <p>Mobile Podcast Production</p>
          <p>Cinematic Set Podcasts</p>
          <p>Studio Podcast</p>
          <p>Video Editing & Post-Production</p>
        </div>

        <div>
          <h4>CONTACT INFO</h4>
          <p>
            Office #816 – 8th Floor<br />
            The Burlington Tower,<br />
            Marasi Drive, Business Bay – Dubai
          </p>

          <p className="contact-label">Phone</p>
          <p>8000644489</p>

          <p className="contact-label">Mail</p>
          <p>info@spotcast.ae</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © 2025 Spotcast. All right reserved &nbsp;|&nbsp;
          <a href="#">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#">Terms & Conditions</a> &nbsp;|&nbsp;
          Powered By: Mightywarners
        </p>

        <div className="footer-social">
            <a href="https://www.facebook.com/mightywarner" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/mightywarners/" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/WarnersMighty" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/mightywarnersuae/" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>

      </div>
    </footer>
  );
}
