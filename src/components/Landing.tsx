import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">

        <div className="landing-intro">
          <h2 className="fade-in">Hello! I'm</h2>

          <h1 className="slide-up">
            Sagar
            <br />
            <span>Ramola</span>
          </h1>
        </div>

        <div className="landing-info">
          <h3 className="fade-in-delay">A Results-Driven</h3>

          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Digital Marketing</div>
            <div className="landing-h2-2">Specialist</div>
          </h2>

          <h2>
            <div className="landing-h2-info">Performance Marketer</div>
            <div className="landing-h2-info-1">SEO Expert</div>
          </h2>

          {/* Buttons */}
          <div className="landing-buttons">
           <a
  href="/resume/sagar.pdf.pdf"
  download="Sagar_Ramola_Resume.pdf"
  className="btn-primary"
>
  ⬇ Download Resume
</a>

            <a href="#contact" className="btn-secondary">
              Let's Connect
            </a>
          </div>
        </div>

      </div>

      {children}
    </div>
  );
};

export default Landing;