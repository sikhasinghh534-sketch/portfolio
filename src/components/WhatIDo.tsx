import { useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    const current = containerRef.current[index];

    if (!current) return;

    const isActive = current.classList.contains("what-content-active");

    containerRef.current.forEach((el) => {
      if (el) {
        el.classList.remove("what-content-active", "what-sibling");
      }
    });

    if (!isActive) {
      current.classList.add("what-content-active");

      containerRef.current.forEach((el, i) => {
        if (el && i !== index) {
          el.classList.add("what-sibling");
        }
      });
    }
  };

  return (
    <div className="whatIDO">
      {/* TITLE */}
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      {/* CONTENT */}
      <div className="what-box">
        <div className="what-box-in">

          {/* PERFORMANCE MARKETING */}
          <div
            className="what-content"
            ref={(el) => (containerRef.current[0] = el)}
            onClick={() => handleClick(0)}
          >
            <div className="what-content-in">
              <h3>PERFORMANCE MARKETING</h3>
              <h4>What I Do</h4>

              <p>
                I create and optimize high-performing paid advertising campaigns
                across Google Ads, Meta Ads, LinkedIn Ads, and YouTube Ads.
                My focus is on maximizing ROI, generating quality leads,
                increasing conversions, and scaling business growth through
                data-driven marketing strategies.
              </p>

              <h5>Expertise</h5>

              <div className="what-content-flex">
                <div className="what-tags">Google Ads</div>
                <div className="what-tags">Meta Ads</div>
                <div className="what-tags">LinkedIn Ads</div>
                <div className="what-tags">YouTube Ads</div>
                <div className="what-tags">SEM</div>
                <div className="what-tags">Remarketing</div>
                <div className="what-tags">A/B Testing</div>
                <div className="what-tags">Conversion Tracking</div>
              </div>
            </div>
          </div>

          {/* DIGITAL MARKETING */}
          <div
            className="what-content"
            ref={(el) => (containerRef.current[1] = el)}
            onClick={() => handleClick(1)}
          >
            <div className="what-content-in">
              <h3>DIGITAL MARKETING</h3>
              <h4>What I Do</h4>

              <p>
                I help brands grow their online presence through SEO, Social
                Media Marketing, Email Marketing, Content Marketing, WhatsApp
                Marketing, and Lead Generation. I build marketing strategies
                that increase visibility, engagement, and long-term business
                growth.
              </p>

              <h5>Expertise</h5>

              <div className="what-content-flex">
                <div className="what-tags">SEO</div>
                <div className="what-tags">Social Media Marketing</div>
                <div className="what-tags">Content Marketing</div>
                <div className="what-tags">Email Marketing</div>
                <div className="what-tags">WhatsApp Marketing</div>
                <div className="what-tags">Lead Generation</div>
                <div className="what-tags">Google Analytics</div>
                <div className="what-tags">Market Research</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;