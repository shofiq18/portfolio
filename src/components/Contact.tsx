import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      {/* ── CTA Banner ── */}
      <div className="contact-cta-wrap">
        <div className="contact-cta">
          <div className="contact-cta-text">
            <h2>Let's Connect and Create Something Amazing!</h2>
            <p>
              Reach out to me for collaborations, inquiries, or just to say
              hello.
            </p>
          </div>
          <a
            href="mailto:shofiqul18650@gmail.com"
            className="contact-cta-btn"
            data-cursor="disable"
          >
            Contact Me <MdArrowOutward />
          </a>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="contact-footer-inner">
          <p className="contact-footer-credit">
            Developed by <span>Md Shofiqul Islam</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
