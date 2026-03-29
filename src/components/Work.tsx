import "./styles/Work.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    category: "Full Stack Web App",
    year: "2024",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    description:
      "A high-performance e-commerce platform with real-time inventory, Stripe payments, Redis caching, and a powerful admin dashboard with analytics.",
    color: "#7c3aed",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/shofiqul",
    imgBg: "linear-gradient(135deg, #1e0a3c 0%, #7c3aed 100%)",
  },
  {
    number: "02",
    title: "SaaS Dashboard",
    category: "React / NestJS",
    year: "2024",
    tech: ["React", "NestJS", "MongoDB", "Docker", "GraphQL"],
    description:
      "Multi-tenant SaaS app with role-based access, real-time WebSockets, and a containerised microservice architecture deployed on Docker.",
    color: "#0f766e",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/shofiqul",
    imgBg: "linear-gradient(135deg, #03251f 0%, #0f766e 100%)",
  },
  {
    number: "03",
    title: "Social Media API",
    category: "Backend Engineering",
    year: "2023",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    description:
      "RESTful API with full auth flow, media uploads via Cloudinary, follow/feed system, and advanced pagination built for millions of records.",
    color: "#b45309",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/shofiqul",
    imgBg: "linear-gradient(135deg, #2d1500 0%, #b45309 100%)",
  },
  {
    number: "04",
    title: "Portfolio CMS",
    category: "Headless CMS · Next.js",
    year: "2023",
    tech: ["Next.js", "Sanity.io", "Tailwind CSS", "Vercel", "TypeScript"],
    description:
      "Custom headless CMS-driven portfolio with dynamic content, ISR, full SEO optimisation, dark mode, and silky-smooth GSAP animations.",
    color: "#be185d",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/shofiqul",
    imgBg: "linear-gradient(135deg, #2d0020 0%, #be185d 100%)",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const total = cards.length;
      const SCROLL_PER_CARD = 700;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(total - 1) * SCROLL_PER_CARD}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          id: "work-stack",
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.fromTo(
          card,
          { yPercent: 105 },
          { yPercent: 0, ease: "none", duration: 1 },
          i - 1
        );
        tl.to(cards[i - 1], { scale: 0.96, ease: "none", duration: 1 }, i - 1);
      });

      return () => {
        ScrollTrigger.getById("work-stack")?.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-stack">
          {projects.map((project, index) => (
            <div
              className="work-card"
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              style={
                {
                  "--card-color": project.color,
                  zIndex: index + 1,
                } as React.CSSProperties
              }
            >
              {/* Left: Text */}
              <div className="work-card-left">
                <div className="work-card-top">
                  <span className="work-card-num">{project.number}</span>
                  <div className="work-card-meta">
                    <h3>{project.title}</h3>
                    <p className="work-card-category">{project.category}</p>
                  </div>
                  <span className="work-card-year">{project.year}</span>
                </div>
                <p className="work-card-desc">{project.description}</p>
                <div className="work-card-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="work-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work-card-btns">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn work-btn-live"
                    data-cursor="disable"
                  >
                    Live Preview <MdArrowOutward />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn work-btn-repo"
                    data-cursor="disable"
                  >
                    GitHub Repo <MdArrowOutward />
                  </a>
                </div>
              </div>

              {/* Right: Image / Visual */}
              <div
                className="work-card-right"
                style={{ background: project.imgBg }}
              >
                <div className="work-card-visual">
                  <div className="work-visual-window">
                    <div className="work-visual-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div
                      className="work-visual-screen"
                      style={{ background: project.imgBg }}
                    >
                      <div className="work-visual-tag">{project.category}</div>
                      <div
                        className="work-visual-title"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
