import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:vectorsagar@gmail.com" data-cursor="disable">
                vectorsagar@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+918076057313" data-cursor="disable">
                +91 8076057313
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/in/sagar-ramola-448808141/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            {/* Add remaining links when available */}
            <a
              href="#"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>

            <a
              href="#"
              data-cursor="disable"
              className="contact-social"
            >
              Google Ads Profile <MdArrowOutward />
            </a>

            <a
              href="#"
              data-cursor="disable"
              className="contact-social"
            >
              Meta Ads Portfolio <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Digital Marketing <br />
              Specialist by <span>Sagar Ramola</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;