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

          {/* GROWTH MARKETING */}
          <div
            className="what-content"
            ref={(el) => (containerRef.current[0] = el)}
            onClick={() => handleClick(0)}
          >
            <div className="what-content-in">
              <h3>GROWTH MARKETING</h3>
              <h4>What I Do</h4>

              <p>
                Build sustainable business growth through SEO, GEO, AIO, AEO,
                Content Marketing, Social Media Strategy, and Website
                Optimization—creating long-term visibility, authority, and
                qualified lead generation.
              </p>

              <h5>Expertise</h5>

              <div className="what-content-flex">
                <div className="what-tags">SEO</div>
                <div className="what-tags">GEO</div>
                <div className="what-tags">AIO</div>
                <div className="what-tags">AEO</div>
                <div className="what-tags">Content Marketing</div>
                <div className="what-tags">Social Media Strategy</div>
                <div className="what-tags">Website Optimization</div>
                <div className="what-tags">Lead Generation</div>
              </div>
            </div>
          </div>

          {/* PERFORMANCE MARKETING */}
          <div
            className="what-content"
            ref={(el) => (containerRef.current[1] = el)}
            onClick={() => handleClick(1)}
          >
            <div className="what-content-in">
              <h3>PERFORMANCE MARKETING</h3>
              <h4>What I Do</h4>

              <p>
                Execute and optimize high-performing campaigns across Google Ads,
                Meta Ads, YouTube Ads, and LinkedIn Ads using data-driven
                targeting, audience segmentation, and continuous optimization to
                maximize ROI, conversions, and revenue growth.
              </p>

              <h5>Expertise</h5>

              <div className="what-content-flex">
                <div className="what-tags">Google Ads</div>
                <div className="what-tags">Meta Ads</div>
                <div className="what-tags">YouTube Ads</div>
                <div className="what-tags">LinkedIn Ads</div>
                <div className="what-tags">Audience Targeting</div>
                <div className="what-tags">Segmentation</div>
                <div className="what-tags">Conversion Optimization</div>
                <div className="what-tags">ROI Growth</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;