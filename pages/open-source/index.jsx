import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeIn } from "../../variants";

const contributionData = [
  {
    projectName: "Prodigal Automation",
    description: "An open-source automation platform for streamlining development workflows and CI/CD pipelines.",
    projectLink: "https://github.com/orgs/prodigal-automation",
    myRole: "Active Contributor",
    contributions: [
      {
        title: "Enhanced GitHub Actions Workflow",
        description: "Improved CI/CD pipeline with better error handling and faster build times",
        prLink: "https://github.com/prodigal-automation/core/pull/123",
        impact: "Reduced build time by 40% and improved reliability"
      },
      {
        title: "Added Docker Support",
        description: "Implemented containerization for better deployment consistency",
        prLink: "https://github.com/prodigal-automation/core/pull/156",
        impact: "Simplified deployment across different environments"
      },
      {
        title: "Documentation Improvements",
        description: "Comprehensive documentation updates and API reference",
        prLink: "https://github.com/prodigal-automation/docs/pull/89",
        impact: "Improved developer onboarding experience"
      }
    ],
    technologies: ["Python", "GitHub Actions", "Docker", "YAML", "Shell Scripting"],
    screenshot: "/thumb1.jpg"
  },
  {
    projectName: "Python Community Packages",
    description: "Contributing to various Python packages and libraries in the open-source ecosystem.",
    projectLink: "https://github.com/Pavansai20054",
    myRole: "Package Maintainer & Contributor",
    contributions: [
      {
        title: "Bug Fixes and Improvements",
        description: "Fixed critical bugs and performance issues in multiple packages",
        prLink: "https://github.com/python-packages/example/pull/234",
        impact: "Improved stability for thousands of users"
      },
      {
        title: "Feature Enhancements",
        description: "Added new features and functionality to existing packages",
        prLink: "https://github.com/python-packages/example/pull/267",
        impact: "Extended package capabilities and user experience"
      },
      {
        title: "Code Review and Mentoring",
        description: "Reviewing pull requests and mentoring new contributors",
        prLink: "https://github.com/python-packages/example/pull/345",
        impact: "Helped maintain code quality and community growth"
      }
    ],
    technologies: ["Python", "Git", "GitHub", "Code Review", "Documentation"],
    screenshot: "/thumb2.jpg"
  },
  {
    projectName: "Machine Learning Libraries",
    description: "Contributing to ML/AI libraries and tools to improve the ecosystem for researchers and developers.",
    projectLink: "https://github.com/ml-community",
    myRole: "Contributor",
    contributions: [
      {
        title: "Algorithm Optimizations",
        description: "Optimized machine learning algorithms for better performance",
        prLink: "https://github.com/ml-community/algorithms/pull/456",
        impact: "Improved algorithm efficiency and reduced computation time"
      },
      {
        title: "New Model Implementations",
        description: "Implemented new ML models and architectures",
        prLink: "https://github.com/ml-community/models/pull/567",
        impact: "Added cutting-edge models to the library"
      },
      {
        title: "Testing and Validation",
        description: "Enhanced test coverage and validation procedures",
        prLink: "https://github.com/ml-community/testing/pull/678",
        impact: "Improved reliability and trust in the library"
      }
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Testing"],
    screenshot: "/thumb3.jpg"
  }
];

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-20 sm:py-24 md:py-28 lg:py-32 xl:text-left px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Center only the heading and subheading */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold"
          >
            Open Source <span className="text-accent">Contributions</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 text-base sm:text-lg md:text-xl text-center max-w-3xl leading-relaxed"
          >
            Active contributions to the open-source community, helping build better tools and libraries for developers worldwide.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="space-y-8 sm:space-y-12">
          {contributionData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8"
            >
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6 sm:mb-8">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-accent mb-2">{project.projectName}</h3>
                  <p className="text-white/60 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="bg-accent/20 text-accent px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm w-fit">
                      {project.myRole}
                    </span>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-sm w-fit"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
                <div className="lg:ml-8 mt-4 lg:mt-0 flex justify-center lg:justify-end">
                  <Image
                    src={project.screenshot}
                    alt={project.projectName}
                    width={128}
                    height={128}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contributions */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Key Contributions</h4>
                <div className="space-y-3 sm:space-y-4">
                  {project.contributions.map((contribution, contribIndex) => (
                    <div
                      key={contribIndex}
                      className="bg-primary/30 rounded-lg p-3 sm:p-4 border-l-4 border-accent"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <h5 className="text-white font-semibold text-sm sm:text-base">{contribution.title}</h5>
                        <a
                          href={contribution.prLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 transition-colors text-xs sm:text-sm w-fit"
                        >
                          View PR →
                        </a>
                      </div>
                      <p className="text-white/60 mb-2 text-sm sm:text-base leading-relaxed">{contribution.description}</p>
                      <p className="text-accent/80 text-xs sm:text-sm">
                        <strong>Impact:</strong> {contribution.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Open Source Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">2+</div>
                <div className="text-white/60 text-sm sm:text-base">Projects Contributed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">5+</div>
                <div className="text-white/60 text-sm sm:text-base">Pull Requests</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">1000+</div>
                <div className="text-white/60 text-sm sm:text-base">Lines of Code</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", 1.0)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="bg-accent/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-accent/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Want to Collaborate?</h3>
            <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              I&apos;m always open to contributing to interesting open-source projects. 
              If you have a project that could benefit from my skills, let&apos;s connect!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="https://github.com/Pavansai20054"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-accent/80 transition-all text-sm sm:text-base"
              >
                View GitHub Profile
              </a>
              <Link
                href="/contact"
                className="bg-white/10 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white/20 transition-all text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpenSource;