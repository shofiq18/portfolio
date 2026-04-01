import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm <span className="highlight">Md Shofiqul Islam</span>, a passionate
          <span className="text-white"> Full Stack Developer</span> who loves
          building high-performance web applications from the ground up. With
          deep expertise across the entire stack — from crafting
          <span className="text-white"> pixel-perfect UIs</span> with <strong>React & Next.js</strong>
          to architecting <span className="text-white">robust back-end systems</span> with
          <strong>Node.js, Express</strong>, and databases like <strong>PostgreSQL & MongoDB</strong> —
          I turn complex ideas into elegant, scalable digital products.
          <i> Clean code, great UX, and continuous learning</i> drive everything I do.
        </p>
      </div>
    </div>
  );
};

export default About;
