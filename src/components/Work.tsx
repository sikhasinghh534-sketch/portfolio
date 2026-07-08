import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Star Infomatic Pvt. Ltd.",
    category: "Performance Marketing & Brand Growth",
    tools:
      "Google Ads • Meta Ads • LinkedIn Ads • YouTube Ads • SEO • SEM • Email Marketing • WhatsApp Marketing",
    image: "/images/star-infomatic.png",
  },
  {
    title: "Realty Assistant",
    category: "Real Estate Digital Marketing",
    tools:
      "SEO • Google Ads • Facebook Ads • Instagram Marketing • CRM • Social Media Strategy",
    image: "/images/realty-assistant.png",
  },
  {
    title: "Acreaty Management Consultant",
    category: "Recruitment & Corporate Marketing",
    tools:
      "SEO • Google Ads • Meta Ads • Content Marketing • Lead Generation • Google Maps SEO",
    image: "/images/acreaty.png",
  },
  {
    title: "DataTrained",
    category: "EdTech Marketing Campaign",
    tools:
      "Performance Marketing • Google Ads • Meta Ads • Analytics • Conversion Optimization",
    image: "/images/datatrained.png",
  },
  {
    title: "AfricaOnJobs",
    category: "International Job Portal",
    tools:
      "SEO • SEM • Organic Growth • Keyword Research • Content Strategy",
    image: "/images/africaonjobs.png",
  },
  {
    title: "IndiaOnJobs",
    category: "Recruitment Portal",
    tools:
      "SEO • Google Ads • Lead Generation • Social Media Marketing",
    image: "/images/indiaonjobs.png",
  },
  {
    title: "HotelYaari",
    category: "Hospitality Marketing",
    tools:
      "SEO • Google Business Profile • Social Media Marketing • Content Marketing",
    image: "/images/hotelyaari.png",
  },
  {
    title: "IIDST",
    category: "Educational Organization",
    tools:
      "Website SEO • Google Ads • Lead Generation • Performance Marketing",
    image: "/images/iidst.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Previous */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous Project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          {/* Next */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next Project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">

                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>
                          {String(index + 1).padStart(2, "0")}
                        </h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">
                            Services & Expertise
                          </span>

                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex
                    ? "carousel-dot-active"
                    : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to Project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;