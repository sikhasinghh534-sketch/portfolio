import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Current Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Assistant Manager</h4>
                <h5>Star Infomatic Pvt. Ltd.</h5>
              </div>
              <h3>May 2022 – Present</h3>
            </div>
            <p>
              Leading end-to-end digital marketing campaigns across Google Ads,
              Meta Ads, LinkedIn Ads, YouTube Ads, and social media platforms.
              Managing SEO, SEM, email marketing, WhatsApp marketing, lead
              generation, audience targeting, campaign optimization, and a team
              of marketing professionals to improve brand visibility, lead
              quality, and business growth through data-driven strategies.
            </p>
          </div>

          {/* Previous Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Sr. Executive</h4>
                <h5>Realty Assistant</h5>
              </div>
              <h3>Mar 2020 – Apr 2022</h3>
            </div>
            <p>
              Managed SEO, Google Ads, Facebook & Instagram marketing, content
              planning, social media management, and online reputation building.
              Developed SEO strategies, optimized websites for higher rankings,
              managed CRM & ERP systems, and executed high-performing digital
              campaigns to increase website traffic and customer engagement.
            </p>
          </div>

          {/* Earlier Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Executive</h4>
                <h5>Acreaty Management Consultant Pvt. Ltd.</h5>
              </div>
              <h3>May 2018 – Feb 2020</h3>
            </div>
            <p>
              Executed SEO, Google Ads, Facebook Ads, and social media
              marketing campaigns for multiple clients. Managed on-page &
              off-page SEO, keyword research, content optimization, and Google
              Maps rankings while improving online visibility and generating
              quality business leads.
            </p>
          </div>

          {/* First Job */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEO Specialist</h4>
                <h5>Pcpatchers Technologies Pvt. Ltd.</h5>
              </div>
              <h3>Aug 2017 – May 2018</h3>
            </div>
            <p>
              Implemented SEO strategies, created backlink campaigns, monitored
              website performance, and improved search engine rankings through
              technical optimization, keyword analysis, and content
              enhancements.
            </p>
          </div>

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Intern</h4>
                <h5>Woxa Technologies Pvt. Ltd.</h5>
              </div>
              <h3>Jan 2017 – Aug 2017</h3>
            </div>
            <p>
              Started my digital marketing career by working on SEO, backlink
              creation, keyword research, and organic growth strategies. Helped
              improve website traffic and search engine visibility while gaining
              hands-on experience in real-world digital marketing projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;