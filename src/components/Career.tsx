import "./styles/Career.css";

const Career = () => {
  return (
    <div id="career" className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Full Stack Developer</h4>
                <h5>Tech Startup · Remote</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Developed and maintained RESTful APIs with Node.js & Express,
              built interactive React dashboards, and collaborated with design
              teams to ship production-ready features on schedule.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Software Agency · On-site</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Led development of multiple client projects using Next.js,
              PostgreSQL, and Docker. Introduced CI/CD pipelines and
              microservice architecture that reduced deployment time by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Self-Employed / Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building scalable SaaS products and custom web solutions for
              global clients. Specializing in high-performance full stack
              architectures with React, Next.js, NestJS, and cloud deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
