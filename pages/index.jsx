import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

const HeroScene = dynamic(() => import("../components/HeroScene"), {
  ssr: false,
});

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Publications", id: "publications" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];
const SECTION_IDS = NAV_LINKS.map((link) => link.id);

const DOCUMENT_LINKS = {
  resume:
    "https://drive.google.com/file/d/1PWne1e-dDvLSK4brJnDERvjNHTmlAOVI/view?usp=drive_link",
  experienceLetter:
    "https://drive.google.com/file/d/1F9x-tYW3vxLRhgWj_8wiDjfVBaHlFNm9/view?usp=drive_link",
};

const SKILLS = {
  Languages: ["Python", "Bash"],
  Frameworks: ["FastAPI", "Django REST Framework"],
  Databases: ["PostgreSQL", "MySQL"],
  Tools: ["Git", "GitHub", "Docker", "Linux", "Postman", "GitHub Actions"],
  Concepts: [
    "REST APIs",
    "CRUD Operations",
    "API Integration",
    "Version Control",
  ],
  Frontend: ["HTML", "CSS"],
  "Professional Skills": [
    "Communication",
    "Problem Solving",
    "Analytical Thinking",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
  ],
};

const PROJECTS = [
  {
    id: 1,
    title: "Task Orchestration System",
    tag: "Backend Platform",
    tagColor: "tag",
    year: "2026",
    description:
      "A production-focused orchestration system built with FastAPI and PostgreSQL, packaged with Docker and deployed on Railway. Designed to coordinate backend tasks through a clean API-first workflow.",
    stack: ["FastAPI", "PostgreSQL", "React", "Docker", "Railway"],
    featured: true,
  },
  {
    id: 2,
    title: "Multi-Agent Newsletter Generator",
    tag: "GenAI",
    tagColor: "tag-purple",
    year: "2026",
    description:
      "A Python-based newsletter generator using LangChain and ChromaDB to gather context, structure content, and produce multi-agent written output.",
    stack: ["Python", "LangChain", "ChromaDB"],
    featured: true,
  },
  {
    id: 3,
    title: "MCP-Project: README Upgrade Studio",
    tag: "Agentic AI",
    tagColor: "tag",
    year: "2025",
    description:
      "AI-powered tool combining Model Context Protocol (MCP), Groq, and Streamlit to audit GitHub repos and generate structured README drafts. Includes repo analysis and documentation generation.",
    stack: ["MCP", "Groq", "Streamlit", "Python"],
    github: "https://github.com/Pavansai20054/MCP-Project",
    featured: false,
  },
  {
    id: 4,
    title: "DataStruct-Kit — PyPI Package",
    tag: "Open Source",
    tagColor: "tag",
    year: "2023",
    description:
      "Artificial Neural Network model for car purchase rate estimation with interactive Streamlit demo. Live deployment on Streamlit Cloud.",
    stack: ["ANN", "TensorFlow", "Streamlit", "Python"],
    github:
      "https://github.com/Pavansai20054/Car_purchase_rate_Estimation_using_ANN",
    demo: "https://carpurchaserateestimationusingann.streamlit.app",
    featured: false,
  },
];

const EXPERIENCE = [
  {
    role: "Backend Developer Intern",
    company: "Prodigal AI Technologies Pvt. Ltd.",
    period: "Feb 2025 – Mar 2026",
    type: "Remote",
    points: [
      "Built backend services and API workflows for AI-powered product experiences",
      "Worked with Python-based services, integrations, and deployment-friendly delivery patterns",
      "Collaborated with product and engineering teams on bug fixes, improvements, and release readiness",
    ],
    accent: "accent",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Bhuvih HR Solutions",
    period: "Mar 2025 – Aug 2025",
    type: "Remote",
    points: [
      "Developed full-stack features for an HR-focused web platform",
      "Handled frontend interfaces, backend logic, and data-connected workflows",
      "Worked with REST APIs, database integration, and responsive UI delivery",
    ],
    accent: "accent2",
  },
];

const PUBLICATIONS = [
  {
    title: "AI-Enhanced Emoji Steganography",
    venue: "IEEE ICFACT-2026",
    year: "2026",
    status: "Published",
    description:
      "A multi-agent LLM framework for emoji steganography that combines AI coordination with AES-256 encryption for secure message handling.",
    tags: ["LLM", "Multi-Agent", "Steganography", "AES-256", "IEEE"],
  },
  {
    title: "Real-time Object Detection using MobileNet SSD",
    venue: "AIP Conference Proceedings",
    year: "2026",
    status: "Published",
    description:
      "A published study on real-time object detection using MobileNet SSD, focused on practical computer vision performance.",
    tags: [
      "Computer Vision",
      "Object Detection",
      "Deep Learning",
      "Real-Time",
      "AIP",
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera / DeepLearning.AI",
    year: "Jan 2024",
    icon: "🤖",
  },
  {
    title: "Code Unnati (SAP) — AI/ML Program",
    issuer: "EduNet Foundation × SAP",
    year: "Apr 2026",
    icon: "🏅",
    link: "https://drive.google.com/file/d/1GkDK96PXRoMjqA_EotNf-rgRStoAvIvg/view?usp=sharing",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford Online",
    year: "Jun 2023",
    icon: "🎓",
  },
  {
    title: "Data Science & Analytics",
    issuer: "Google",
    year: "Feb 2024",
    icon: "📊",
    link: "https://drive.google.com/file/d/18iTI7SoS0h6mKAAGnjHW4ltm-RTCMPS9/view?usp=drive_link",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "Mar 2024",
    icon: "🧠",
  },
  {
    title: "Docker & Kubernetes",
    issuer: "Coursera",
    year: "Nov 2024",
    icon: "🐳",
    link: "https://drive.google.com/file/d/1nY2SMMBMNvZFC1KOTQ8QuJuX2kC8Ms_Q/view?usp=sharing",
  },
  {
    title: "Linux Unhatched",
    issuer: "Cisco",
    year: "May 2026",
    icon: "🐧",
    link: "https://drive.google.com/file/d/1LL-6jIEy_97V_5VCb2XtpDvCNs4fDKij/view?usp=drive_link",
  },
];

const TECH_MARQUEE = [
  "Python",
  "LangChain",
  "CrewAI",
  "FastAPI",
  "Next.js",
  "TensorFlow",
  "PyTorch",
  "PostgreSQL",
  "Docker",
  "Airflow",
  "MLflow",
  "Flutter",
  "MCP",
  "Groq",
  "Gemini",
  "React",
  "TypeScript",
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: [0.1, 0.3, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Cursor() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);
  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
    />
  );
}

function Global3DBackdrop() {
  return null;
}

function ThreeDSection({ id, children, style, className = "" }) {
  return (
    <section
      id={id}
      data-scroll-section
      className={`section-3d ${className}`}
      style={style}
    >
      <div className="section-3d-inner">{children}</div>
    </section>
  );
}

function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -18, scale: 0.96, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -14,
      scale: 0.98,
      filter: "blur(8px)",
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-semibold text-xl text-white inline-flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="Pavansai logo"
            width={42}
            height={42}
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`desktop-nav-link text-sm font-medium transition-colors hover:text-accent ${active === link.id ? "active" : ""}`}
                style={{
                  color: active === link.id ? "var(--accent)" : "var(--dim)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:flex btn-primary text-sm py-2.5 px-5"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <motion.button
          type="button"
          className="md:hidden mobile-menu-toggle text-dim"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          animate={open ? "open" : "closed"}
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: -7 },
              open: { rotate: 45, y: 0 },
            }}
          />
          <motion.span
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 7 },
              open: { rotate: -45, y: 0 },
            }}
          />
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={menuVariants}
            className="md:hidden nav-glass mobile-menu px-6 pb-5 pt-2 flex flex-col gap-2"
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                variants={itemVariants}
                className={`text-dim hover:text-accent transition-colors mobile-nav-link ${active === link.id ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              variants={itemVariants}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function FloatingParticle({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: "var(--accent)",
        animation: `float-particle ${style.duration}s ease-in-out ${style.delay}s infinite`,
        ...style,
        opacity: 0.4,
        pointerEvents: "none",
      }}
    />
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [sceneProgress, setSceneProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setSceneProgress(value);
  });

  const goToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const particles = [
    { top: "20%", left: "10%", duration: 7, delay: 0 },
    { top: "60%", left: "5%", duration: 9, delay: 2 },
    { top: "80%", left: "15%", duration: 6, delay: 1 },
    { top: "30%", right: "10%", duration: 8, delay: 3 },
    { top: "70%", right: "8%", duration: 7, delay: 1.5 },
    { top: "15%", right: "20%", duration: 10, delay: 0.5 },
    { top: "50%", left: "50%", duration: 8, delay: 2.5 },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="section-3d relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Radial glow bg */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,160,0.06) 0%, rgba(123,97,255,0.04) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} style={p} />
      ))}

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="interactive-layer">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="section-label mb-6">
                Available for Opportunities
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#00E5A0",
                    marginLeft: 6,
                    boxShadow: "0 0 8px rgba(0,229,160,0.8)",
                  }}
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display font-semibold leading-tight"
              style={{
                fontSize: "clamp(42px, 6vw, 76px)",
                color: "var(--text)",
              }}
            >
              Pavansai
              <br />
              <span className="gradient-text">Rangdal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {[
                "AI Backend Engineer",
                "Agentic AI Builder",
                "IEEE Author",
                "Open Source",
              ].map((t) => (
                <span key={t} className="tag text-xs">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--dim)", maxWidth: 520 }}
            >
              B.Tech CSE (Data Science) graduate from KG Reddy College,
              Hyderabad. I build production-grade AI backends — multi-agent
              systems, RAG pipelines, MLOps infra, and agentic tools that
              actually ship. IEEE published. Two PyPI packages live.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-4"
              style={{
                position: "relative",
                zIndex: 30,
                pointerEvents: "auto",
              }}
            >
              <a href="#projects" className="btn-primary social-link-btn">
                View Projects
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={DOCUMENT_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost social-link-btn"
              >
                View Resume
              </a>
              <button
                type="button"
                onClick={goToContact}
                className="btn-ghost social-link-btn"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex items-center gap-6"
            >
              {[
                {
                  href: "https://github.com/Pavansai20054",
                  label: "GitHub",
                  icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
                },
                {
                  href: "https://www.linkedin.com/in/rangdal-pavansai",
                  label: "LinkedIn",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  href: "https://x.com/RangdalPavansai",
                  label: "Twitter",
                  icon: "M18.244 2H21l-6.52 7.455L22.148 22h-6.005l-4.703-6.145L6.06 22H3.304l6.973-7.968L1.852 2h6.157l4.251 5.63L18.244 2zm-1.053 18h1.525L7.18 3.895H5.544L17.191 20z",
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                  style={{ color: "var(--dim)" }}
                  aria-label={label}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={icon} />
                  </svg>
                </a>
              ))}
              <span
                style={{ width: 1, height: 24, background: "var(--border)" }}
              />
              <span
                style={{
                  fontSize: 13,
                  color: "var(--dim)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Hyderabad, IN
              </span>
            </motion.div>
          </div>

          {/* Right — 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:block"
            style={{
              position: "relative",
              padding: "10px 12px",
              minHeight: 620,
            }}
          >
            <HeroScene scrollProgress={sceneProgress} />

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                top: "clamp(12px, 2vw, 24px)",
                right: "clamp(12px, 2vw, 24px)",
              }}
              className="hero-stat-card hero-stat-card--accent"
            >
              <div className="hero-stat-value">1</div>
              <div className="hero-stat-label">IEEE Paper</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                bottom: "clamp(16px, 3vw, 32px)",
                left: "clamp(12px, 2vw, 24px)",
              }}
              className="hero-stat-card hero-stat-card--accent2"
            >
              <div className="hero-stat-value">2</div>
              <div className="hero-stat-label">PyPI Packages</div>
            </motion.div>
          </motion.div>
        </div>

        <div
          style={{ marginTop: 56, display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "min(100%, 920px)",
              padding: "18px 20px",
              borderRadius: 18,
              border: "1px solid rgba(30, 37, 53, 0.9)",
              background:
                "linear-gradient(135deg, rgba(19, 24, 37, 0.78), rgba(8, 10, 15, 0.72))",
              boxShadow: "0 18px 40px rgba(0, 0, 0, 0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 12,
                letterSpacing: "0.14em",
                color: "var(--accent)",
              }}
            >
              SCROLL FOR THE FULL STORY
            </span>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                "Skills",
                "Projects",
                "Experience",
                "Publications",
                "Contact",
              ].map((label) => (
                <span
                  key={label}
                  className="tag"
                  style={{
                    background: "rgba(123, 97, 255, 0.08)",
                    color: "var(--text)",
                    borderColor: "rgba(123, 97, 255, 0.18)",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2"
          style={{ transform: "translateX(-50%)" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              color: "var(--dim)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontFamily: "JetBrains Mono, monospace",
                letterSpacing: "0.1em",
              }}
            >
              SCROLL
            </span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <motion.circle
                cx="8"
                cy="8"
                r="2"
                fill="currentColor"
                animate={{ cy: [8, 16, 8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TechMarquee() {
  const doubled = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <motion.div
      className="tech-3d-shell"
      animate={{ rotateX: [0, 0.6, 0], y: [0, -2, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "20px 0",
      }}
    >
      <div
        className="marquee-track"
        style={{ display: "flex", gap: 48, whiteSpace: "nowrap" }}
      >
        {doubled.map((tech, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontSize: 14,
              fontFamily: "JetBrains Mono, monospace",
              color: "var(--dim)",
            }}
          >
            <span style={{ color: "var(--accent)", fontSize: 8 }}>◆</span>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({ name, level, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
          fontSize: 13,
        }}
      >
        <span style={{ color: "var(--text)" }}>{name}</span>
        <span
          style={{
            color: "var(--accent)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ scaleX: 0 }}
          animate={visible ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{
            duration: 1.2,
            delay: delay || 0,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      </div>
    </div>
  );
}

function SkillsSection() {
  const [ref, visible] = useReveal();
  return (
    <ThreeDSection
      id="skills"
      style={{ padding: "100px 0", position: "relative" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-label">Skill Set</div>
          <h2 className="section-title mb-16">
            What I <span className="gradient-text">Build With</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([cat, skills], ci) => (
            <div key={cat} className="card p-6">
              <h3
                style={{
                  fontSize: 14,
                  fontFamily: "JetBrains Mono, monospace",
                  color: "var(--accent)",
                  marginBottom: 24,
                  letterSpacing: "0.05em",
                }}
              >
                {cat.toUpperCase()}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag"
                    style={{
                      background: "rgba(0,229,160,0.06)",
                      color: "var(--text)",
                      borderColor: "rgba(30, 37, 53, 0.9)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThreeDSection>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -10, rotateX: 4, rotateY: -4, scale: 1.01 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="card project-card p-6 flex flex-col gap-4"
      style={{ height: "100%", transformStyle: "preserve-3d" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <span className={project.tagColor}>{project.tag}</span>
        <span
          style={{
            fontSize: 12,
            color: "var(--dim)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {project.year}
        </span>
      </div>

      <h3
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "var(--text)",
          fontFamily: "Clash Display, sans-serif",
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.7, flex: 1 }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.stack.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              fontFamily: "JetBrains Mono, monospace",
              color: "var(--dim)",
              background: "var(--panel)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "3px 8px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: "var(--accent)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: "var(--dim)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  const visible = showAll ? rest : rest.slice(0, 3);
  const [ref, isVisible] = useReveal();

  return (
    <ThreeDSection
      id="projects"
      style={{ padding: "100px 0", background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="section-label">Work</div>
          <h2 className="section-title mb-4">
            Projects &amp; <span className="gradient-text">Builds</span>
          </h2>
          <p style={{ color: "var(--dim)", marginBottom: 48, maxWidth: 520 }}>
            From IEEE research to live PyPI packages — things I&apos;ve shipped.
          </p>
        </div>

        {/* Featured */}
        <div
          style={{
            marginBottom: 16,
            fontSize: 12,
            fontFamily: "JetBrains Mono, monospace",
            color: "var(--accent)",
            letterSpacing: "0.1em",
          }}
        >
          FEATURED
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Rest */}
        <div
          style={{
            marginBottom: 16,
            fontSize: 12,
            fontFamily: "JetBrains Mono, monospace",
            color: "var(--dim)",
            letterSpacing: "0.1em",
          }}
        >
          MORE PROJECTS
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {!showAll && rest.length > 3 && (
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(true)} className="btn-ghost">
              Show All Projects ({rest.length})
            </button>
          </div>
        )}
      </div>
    </ThreeDSection>
  );
}

function ExperienceSection() {
  const [ref, visible] = useReveal();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const timelineDraw = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
  });
  return (
    <ThreeDSection
      id="experience"
      style={{
        padding: "110px 0",
        background:
          "linear-gradient(180deg, rgba(16, 30, 48, 0.9), rgba(10, 18, 30, 0.98))",
        borderTop: "1px solid rgba(52, 71, 95, 0.55)",
        borderBottom: "1px solid rgba(52, 71, 95, 0.55)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-label">Career</div>
          <h2 className="section-title mb-16">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div
          ref={timelineRef}
          style={{ position: "relative", paddingLeft: 32 }}
        >
          {/* Timeline line */}
          <svg
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: 8,
              width: 16,
              height: "100%",
              overflow: "visible",
            }}
          >
            <defs>
              <linearGradient
                id="timeline-gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="rgba(0, 229, 160, 0)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M8 0 V1000"
              stroke="url(#timeline-gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: timelineDraw }}
            />
          </svg>

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              style={{
                position: "relative",
                marginBottom: 48,
                pointerEvents: "auto",
              }}
            >
              <div
                className="timeline-dot"
                style={{ position: "absolute", left: -28 }}
              />

              <div className="card p-8 experience-card">
                <div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      fontFamily: "Clash Display, sans-serif",
                      color: "var(--text)",
                      marginBottom: 12,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          color: `var(--${exp.accent || "accent"})`,
                          fontWeight: 600,
                          fontSize: 15,
                        }}
                      >
                        {exp.company}
                      </span>
                      <span className="tag text-xs">{exp.type}</span>
                      {exp.highlight && (
                        <span className="tag-purple text-xs">
                          {exp.highlight}
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--dim)",
                        fontFamily: "JetBrains Mono, monospace",
                        background: "var(--panel)",
                        padding: "6px 14px",
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  {exp.duration && (
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--dim)",
                        fontFamily: "JetBrains Mono, monospace",
                        marginBottom: 12,
                      }}
                    >
                      {exp.duration}
                    </div>
                  )}
                </div>

                <ul
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {exp.points.map((pt, pi) => (
                    <li
                      key={pi}
                      style={{
                        display: "flex",
                        gap: 12,
                        fontSize: 14,
                        color: "var(--dim)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        ▸
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  {exp.highlight && (
                    <a
                      href={DOCUMENT_LINKS.experienceLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost social-link-btn"
                      style={{ fontSize: 13, padding: "10px 16px" }}
                    >
                      📄 Experience Letter
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div
              className="timeline-dot"
              style={{
                position: "absolute",
                left: -28,
                background: "var(--accent2)",
              }}
            />
            <div className="card p-8">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      fontFamily: "Clash Display, sans-serif",
                      color: "var(--text)",
                    }}
                  >
                    B.Tech — CSE (Data Science)
                  </h3>
                  <div style={{ marginTop: 6 }}>
                    <span
                      style={{
                        color: "var(--accent2)",
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                      KG Reddy College of Engineering & Technology
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    color: "var(--dim)",
                    fontFamily: "JetBrains Mono, monospace",
                    background: "var(--panel)",
                    padding: "6px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--border)",
                  }}
                >
                  2022 – 2026
                </span>
              </div>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 14,
                  color: "var(--dim)",
                  lineHeight: 1.7,
                }}
              >
                Focused on Machine Learning, Data Science, and AI systems. IEEE
                paper accepted at ICFACT-2026. Developed two published PyPI
                packages and multiple production AI tools during the course of
                study.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </ThreeDSection>
  );
}

function PublicationsSection() {
  const [ref, visible] = useReveal();
  return (
    <ThreeDSection
      id="publications"
      style={{ padding: "100px 0", background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-label">Research</div>
          <h2 className="section-title mb-16">
            <span className="gradient-text">Publications</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {PUBLICATIONS.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card p-8"
              style={{
                background:
                  "linear-gradient(135deg, var(--panel), var(--surface))",
                borderColor: "rgba(123,97,255,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(123,97,255,0.1)",
                      border: "1px solid rgba(123,97,255,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    📄
                  </div>
                  <div>
                    <span
                      className="tag-purple text-xs"
                      style={{ marginBottom: 4 }}
                    >
                      {pub.status}
                    </span>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--dim)",
                        fontFamily: "JetBrains Mono, monospace",
                        marginTop: 4,
                      }}
                    >
                      {pub.year}
                    </div>
                  </div>
                </div>
              </div>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  fontFamily: "Clash Display, sans-serif",
                  color: "var(--text)",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {pub.title}
              </h3>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--accent2)",
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                {pub.venue}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--dim)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {pub.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {pub.tags.map((t) => (
                  <span key={t} className="tag-purple">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ThreeDSection>
  );
}

function CertificationsSection() {
  const [ref, visible] = useReveal();
  return (
    <ThreeDSection id="certifications" style={{ padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-label">Credentials</div>
          <h2 className="section-title mb-16">
            Certifications &amp; <span className="gradient-text">Learning</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card p-5 flex gap-4 items-start"
            >
              <div style={{ fontSize: 32, flexShrink: 0 }}>{cert.icon}</div>
              <div>
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </h4>
                <p
                  style={{ fontSize: 12, color: "var(--dim)", marginBottom: 8 }}
                >
                  {cert.issuer}
                </p>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "JetBrains Mono, monospace",
                    color: "var(--accent)",
                    background: "rgba(0,229,160,0.06)",
                    border: "1px solid rgba(0,229,160,0.15)",
                    borderRadius: 6,
                    padding: "2px 8px",
                  }}
                >
                  {cert.year}
                </span>
                {cert.link && (
                  <div style={{ marginTop: 10 }}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost social-link-btn"
                      style={{ fontSize: 12, padding: "6px 10px" }}
                    >
                      🔗 See certificate
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ThreeDSection>
  );
}

function ContactSection() {
  const [ref, visible] = useReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("pavansairangdal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ThreeDSection
      id="contact"
      style={{
        padding: "100px 0",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(0,229,160,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center interactive-layer">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Let&apos;s Connect
          </div>
          <h2 className="section-title mb-6">
            Ready to <span className="gradient-text">Build Together?</span>
          </h2>
          <p
            style={{
              color: "var(--dim)",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 540,
              margin: "0 auto 48px",
            }}
          >
            I&apos;m actively looking for full-time engineering roles in AI/ML
            and backend development. If you&apos;re building something
            interesting, let&apos;s talk.
          </p>
        </div>

        {/* Email card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="card p-6 mb-8"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            cursor: "pointer",
            borderColor: "rgba(0,229,160,0.2)",
          }}
          onClick={copyEmail}
          whileHover={{ scale: 1.02 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span
            style={{
              fontSize: 16,
              fontFamily: "JetBrains Mono, monospace",
              color: "var(--text)",
            }}
          >
            pavansairangdal@gmail.com
          </span>
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="copied"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{ color: "var(--accent)", fontSize: 13 }}
              >
                ✓ Copied!
              </motion.span>
            ) : (
              <motion.svg
                key="copy"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--dim)"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social links */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
            position: "relative",
            zIndex: 30,
            pointerEvents: "auto",
          }}
        >
          {[
            { label: "GitHub", href: "https://github.com/Pavansai20054" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/rangdal-pavansai",
            },
            { label: "Twitter/X", href: "https://x.com/RangdalPavansai" },
            { label: "Resume", href: DOCUMENT_LINKS.resume },
            {
              label: "Experience Letter",
              href: DOCUMENT_LINKS.experienceLetter,
            },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost social-link-btn"
              style={{ fontSize: 14, padding: "10px 20px" }}
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </ThreeDSection>
  );
}

function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid var(--border)",
        padding: "48px 24px 28px",
      }}
    >
      {/* top row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 32,
          maxWidth: 1100,
          margin: "0 auto",
          paddingBottom: 32,
        }}
      >
        {/* brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            maxWidth: 280,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Image src="/logo.svg" alt="Pavansai logo" width={28} height={28} />
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "var(--fg, #fff)",
              }}
            >
              Pavansai Rangdal
            </span>
          </div>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: "var(--dim)",
              margin: 0,
            }}
          >
            AI backend engineer &amp; full-stack developer, building agentic
            systems and clean web experiences.
          </p>
          {/* status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 4,
              padding: "5px 10px",
              width: "fit-content",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "rgba(0,229,160,0.06)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00E5A0",
                boxShadow: "0 0 6px #00E5A0",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontFamily: "JetBrains Mono, monospace",
                color: "#00E5A0",
              }}
            >
              Open to work
            </span>
          </div>
        </div>

        {/* quick links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "var(--dim)",
            }}
          >
            Links
          </span>
          {[
            { label: "GitHub", href: "https://github.com/Pavansai20054" },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/rangdal-pavansai",
            },
            { label: "Email", href: "mailto:pavansairangdal@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                fontSize: 13,
                color: "var(--dim)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7B61FF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--dim)",
            fontSize: 12,
            fontFamily: "JetBrains Mono, monospace",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#00E5A0";
            e.currentTarget.style.color = "#00E5A0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--dim)";
          }}
        >
          ↑ Back to top
        </button>
      </div>

      {/* bottom row */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          paddingTop: 20,
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 12, color: "var(--dim)" }}>
          © 2026 Pavansai Rangdal. All rights reserved.
        </span>
        <span
          style={{
            fontSize: 12,
            color: "var(--dim)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          Built with ❤️
        </span>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const activeSection = useActiveSection();
  const mainRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    const resetScroll = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    resetScroll();
    const frameId = window.requestAnimationFrame(resetScroll);

    let cleanup = () => {};
    let cancelled = false;

    const setupScrollTrigger = async () => {
      const [{ default: importedGsap }, scrollTriggerModule] =
        await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);

      if (cancelled) return;

      const ScrollTriggerModule =
        scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger;
      importedGsap.registerPlugin(ScrollTriggerModule);

      const context = importedGsap.context(() => {
        const panels = importedGsap.utils.toArray("[data-scroll-section]");
        const triggers = [];

        panels.forEach((panel) => {
          if (panel.id === "home") return;

          const tween = importedGsap.fromTo(
            panel,
            { opacity: 0.55, y: 44, scale: 0.965 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 82%",
                end: "bottom 18%",
                scrub: 0.8,
              },
            },
          );

          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
          triggers.push(tween);
        });

        cleanup = () => {
          triggers.forEach((trigger) => {
            if (trigger && typeof trigger.kill === "function") trigger.kill();
          });
          context.revert();
        };
      }, mainRef);

      cleanup = () => context.revert();
    };

    setupScrollTrigger();

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      cleanup();
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Pavansai Rangdal | AI Backend Engineer &amp; Agentic AI Builder
        </title>
        <meta
          name="description"
          content="Pavansai Rangdal is an AI backend engineer and full-stack developer building agentic systems, FastAPI services, and production-ready AI applications from Hyderabad, India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index,follow,max-snippet:-1,max-image-preview:large"
        />
        <meta name="bingbot" content="index,follow" />
        <meta name="author" content="Pavansai Rangdal" />
        <meta name="theme-color" content="#080A0F" />
        <meta
          name="keywords"
          content="Pavansai Rangdal, AI backend engineer, FastAPI developer, Python backend engineer, agentic AI engineer, Hyderabad developer, portfolio"
        />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana, India" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://rangdalpavansai.dev/" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://rangdalpavansai.dev/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://rangdalpavansai.dev/"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://rangdal-pavansai.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pavansai Rangdal Portfolio" />
        <meta property="og:url" content="https://rangdalpavansai.dev/" />
        <meta
          property="og:title"
          content="Pavansai Rangdal | AI Backend Engineer &amp; Agentic AI Builder"
        />
        <meta
          property="og:description"
          content="Building agentic AI systems, FastAPI backends, and production-grade ML workflows for modern products."
        />
        <meta
          property="og:image"
          content="https://rangdalpavansai.dev/avatar.png"
        />
        <meta
          property="og:image:alt"
          content="Pavansai Rangdal portfolio preview"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RangdalPavansai" />
        <meta
          name="twitter:title"
          content="Pavansai Rangdal | AI Backend Engineer &amp; Agentic AI Builder"
        />
        <meta
          name="twitter:description"
          content="Building agentic AI systems, FastAPI backends, and production-grade ML workflows for modern products."
        />
        <meta
          name="twitter:image"
          content="https://rangdalpavansai.dev/avatar.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pavansai Rangdal",
              url: "https://rangdalpavansai.dev/",
              jobTitle: "AI Backend Engineer",
              description:
                "AI backend engineer focused on FastAPI, PostgreSQL, multi-agent systems, and production-ready AI applications.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/Pavansai20054",
                "https://www.linkedin.com/in/rangdal-pavansai",
                "https://x.com/RangdalPavansai",
              ],
              alumniOf: "KG Reddy College of Engineering & Technology",
            }),
          }}
        />
      </Head>

      <Cursor />
      <Global3DBackdrop />

      {/* Progress bar */}
      <motion.div id="progress-bar" style={{ scaleX }} />

      <Navbar active={activeSection} />

      <main ref={mainRef} className="global-3d-stage">
        <HeroSection />
        <TechMarquee />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <PublicationsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
