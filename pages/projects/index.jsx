import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { fadeIn } from "../../variants";

const projectData = [
  {
    title: "Car Purchase Rate Estimation",
    image: "/thumb1.jpg",
    description: "ML model to predict car purchase rates using customer data",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Streamlit"],
    demoLink: "#",
    githubLink: "https://github.com/Pavansai20054/Car_purchase_rate_Estimation_using_ANN",
    problem: "Predicting customer car purchase probability based on demographic and behavioral data",
    approach: "Used Artificial Neural Networks with feature engineering and data preprocessing",
    mlModel: "ANN with multiple hidden layers, optimized using Adam optimizer",
    challenges: "Handling imbalanced data and feature scaling",
    solutions: "Applied SMOTE for balancing and StandardScaler for normalization",
    deployment: "Deployed on Streamlit with interactive UI for real-time predictions",
    screenshots: ["/thumb1.jpg", "/thumb2.jpg"]
  },
  {
    title: "Xara (Text-to-Speech App)",
    image: "/thumb2.jpg",
    description: "Multilingual text-to-speech application with natural voice synthesis",
    techStack: ["Python", "gTTS", "Tkinter", "PyAudio", "NLTK"],
    demoLink: "#",
    githubLink: "https://github.com/Pavansai20054/gTTS",
    problem: "Creating a user-friendly multilingual text-to-speech application",
    approach: "Built a desktop application with support for multiple languages and voice customization",
    mlModel: "Google Text-to-Speech (gTTS) with natural language processing",
    challenges: "Managing audio quality and language detection",
    solutions: "Implemented audio preprocessing and automatic language detection",
    deployment: "Packaged as executable with PyInstaller for cross-platform compatibility",
    screenshots: ["/thumb2.jpg", "/thumb3.jpg"]
  },
  {
    title: "Attendance by Face Recognition",
    image: "/thumb3.jpg",
    description: "Automated attendance system using facial recognition technology",
    techStack: ["Python", "OpenCV", "Face Recognition", "SQLite", "Tkinter"],
    demoLink: "#",
    githubLink: "https://github.com/Pavansai20054/face-attendance",
    problem: "Automating attendance tracking in educational institutions",
    approach: "Real-time face detection and recognition with database integration",
    mlModel: "Face Recognition library with dlib backend for facial feature extraction",
    challenges: "Handling lighting variations and multiple face detection",
    solutions: "Implemented adaptive thresholding and face alignment techniques",
    deployment: "Desktop application with SQLite database for attendance records",
    screenshots: ["/thumb3.jpg", "/thumb4.jpg"]
  },
  {
    title: "DataStruct-Kit (Python Package)",
    image: "/thumb4.jpg",
    description: "Comprehensive data structures and algorithms library for Python",
    techStack: ["Python", "NumPy", "Matplotlib", "Pytest", "Sphinx"],
    demoLink: "https://pypi.org/project/datastruct-kit/",
    githubLink: "https://github.com/Pavansai20054/DataStruct-Kit",
    problem: "Providing easy-to-use data structures and algorithms for Python developers",
    approach: "Created a comprehensive library with well-documented implementations",
    mlModel: "N/A - Data structures library",
    challenges: "Ensuring performance optimization and comprehensive testing",
    solutions: "Implemented efficient algorithms with extensive unit tests",
    deployment: "Published on PyPI with automated CI/CD pipeline",
    screenshots: ["/thumb4.jpg", "/thumb1.jpg"]
  },
  {
    title: "logictools (Python Package)",
    image: "/thumb5.jpg",
    description: "Logic gate simulation and digital circuit design toolkit",
    techStack: ["Python", "NetworkX", "Matplotlib", "Pytest", "Sphinx"],
    demoLink: "https://pypi.org/project/logictools/",
    githubLink: "https://github.com/Pavansai20054/logictools",
    problem: "Simplifying digital logic design and circuit simulation",
    approach: "Built a toolkit for logic gate operations and circuit visualization",
    mlModel: "N/A - Logic simulation library",
    challenges: "Creating intuitive API and efficient circuit evaluation",
    solutions: "Designed clean API with graph-based circuit representation",
    deployment: "Published on PyPI with comprehensive documentation",
    screenshots: ["/thumb5.jpg", "/thumb6.jpg"]
  },
  {
    title: "Prodigal Automation (Open Source)",
    image: "/thumb6.jpg",
    description: "Contributing to open-source automation tools and workflows",
    techStack: ["Python", "GitHub Actions", "Docker", "CI/CD", "Automation"],
    demoLink: "#",
    githubLink: "https://github.com/Pavansai20054/prodigal-automation",
    problem: "Improving automation workflows and developer experience",
    approach: "Active contribution to open-source automation projects",
    mlModel: "N/A - Automation tools",
    challenges: "Understanding complex codebases and maintaining backward compatibility",
    solutions: "Thorough code review and incremental improvements",
    deployment: "Continuous integration with automated testing and deployment",
    screenshots: ["/thumb6.jpg", "/thumb1.jpg"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-20 sm:py-24 md:py-28 lg:py-32 xl:text-left px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 animate-pulse" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold"
          >
            My <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 text-base sm:text-lg md:text-xl text-center max-w-3xl leading-relaxed"
          >
            Explore my latest projects showcasing machine learning, AI applications, and open-source contributions.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto relative">
        {/* Custom Navigation Arrows */}
        <div className="hidden lg:block">
          <div className="swiper-button-prev-custom absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-3 cursor-pointer transition-all duration-300 hover:scale-110 group">
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
          </div>
          <div className="swiper-button-next-custom absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full p-3 cursor-pointer transition-all duration-300 hover:scale-110 group">
            <ChevronRight className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            el: '.swiper-pagination-custom',
          }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-16"
          onSlideChange={() => {
            // Add slide change animations
            const slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(slide => {
              slide.classList.remove('slide-animate');
            });
            setTimeout(() => {
              slides.forEach(slide => {
                slide.classList.add('slide-animate');
              });
            }, 100);
          }}
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index} className="slide-animate">
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 h-full flex flex-col min-h-[500px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[600px] mx-2 border border-white/20 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 group hover:scale-105 transform-gpu"
              >
                {/* Project Image */}
                <div className="relative mb-4 sm:mb-6 group/image overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={224}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg transition-transform duration-500 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500 rounded-lg flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-4 transform translate-y-8 group-hover/image:translate-y-0 transition-transform duration-500">
                      {project.demoLink !== "#" && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-accent text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-accent/80 transition-all text-sm text-center shadow-lg hover:shadow-accent/30"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary px-3 sm:px-4 py-2 rounded-lg hover:bg-white/90 transition-all text-sm text-center shadow-lg"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-white/70 mb-3 sm:mb-4 flex-1 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors duration-300">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.techStack.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs sm:text-sm border border-accent/30 hover:bg-accent/30 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="bg-white/10 text-white/60 px-2 py-1 rounded-full text-xs sm:text-sm border border-white/20">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    {project.demoLink !== "#" && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-accent/80 transition-all text-sm text-center shadow-lg hover:shadow-accent/30"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-all text-sm text-center border border-white/20 hover:border-white/40"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-8 lg:mt-12" />
      </div>

      <style jsx>{`
        .slide-animate {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-pagination-custom .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #7c3aed;
          border-color: #7c3aed;
          transform: scale(1.2);
        }

        .swiper-pagination-custom .swiper-pagination-bullet:hover {
          background: rgba(124, 58, 237, 0.5);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Projects;