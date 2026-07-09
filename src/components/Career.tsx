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
              Developed and executed integrated digital marketing strategies
              across SEO, paid advertising, social media, email marketing, and
              website optimization to strengthen brand visibility and drive
              qualified lead generation. Managed high-performing campaigns on
              Google Ads, Meta Ads, and LinkedIn while collaborating closely
              with sales and product teams to align marketing initiatives with
              business objectives and maximize overall marketing performance.
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
              Led end-to-end digital marketing initiatives, including SEO,
              Google Ads, Meta Ads, Content Marketing, Social Media Management,
              and Online Reputation Management (ORM). Developed and executed
              data-driven marketing strategies, optimized website performance,
              managed CRM & ERP platforms, and delivered campaigns that
              increased online visibility, qualified leads, and customer
              engagement.
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
              Managed multi-channel digital marketing campaigns across SEO,
              Google Ads, Meta Ads, and Social Media for diverse clients.
              Executed on-page and off-page SEO, keyword research, content
              optimization, and local SEO strategies to improve search rankings,
              enhance online visibility, and generate high-quality business
              leads.
            </p>
          </div>

          {/* SEO Specialist */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEO Specialist</h4>
                <h5>Pcpatchers Technologies Pvt. Ltd.</h5>
              </div>
              <h3>Aug 2017 – May 2018</h3>
            </div>
            <p>
              Executed technical and on-page SEO strategies, conducted keyword
              research, built high-quality backlinks, and optimized website
              performance. Improved organic search visibility, enhanced website
              rankings, and monitored performance using analytics and SEO
              reporting tools.
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
              Built a strong foundation in digital marketing by supporting SEO,
              keyword research, backlink building, content optimization, and
              website analysis. Assisted in improving organic search performance
              while gaining hands-on experience with industry-standard digital
              marketing tools and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;