import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import Socials from "../components/Socials";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-primary/60">
      {/* background and particles */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 -z-10" />
      <ParticlesContainer />

      {/* Social Icons in Top Right Corner */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 xl:top-16 xl:right-16 z-[100]"
      >
        <Socials />
      </motion.div>

      <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-6 sm:px-8 lg:px-16 pt-24 pb-32 lg:pt-20 lg:pb-20 gap-12 lg:gap-20">
        {/* Left: Logo, Title, Intro, Buttons */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full max-w-2xl lg:max-w-none justify-center space-y-8">
          {/* Logo and Name */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 w-full justify-center lg:justify-start">
            <Image
              src="/logo.png"
              alt="Pavansai Rangdal Logo"
              width={120}
              height={120}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl border-4 border-accent bg-black/80 shadow-2xl flex-shrink-0 hover:scale-105 transition-transform duration-300"
              priority
            />
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="font-extrabold text-accent mb-0 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Pavansai <br className="hidden sm:block lg:hidden xl:block" />{" "}
              <span className="text-white">Rangdal</span>
            </motion.h1>
          </div>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-full text-gray-200 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed"
          >
            A passionate computer science student focused on{" "}
            <span className="text-accent font-semibold">Machine Learning</span>,{" "}
            <span className="text-accent font-semibold">Generative AI</span>,
            and <span className="text-accent font-semibold">Agentic AI</span>. I
            love building real-world projects, exploring new technologies, and
            sharing what I learn.
          </motion.p>

          {/* current focus */}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-full text-accent/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed px-2 sm:px-0"
          >
            Currently diving deep into{" "}
            <span className="text-white font-semibold">Agentic AI</span>,{" "}
            <span className="text-white font-semibold">Generative AI</span>, and
            contributing to open-source Python projects.
          </motion.p>

          {/* buttons */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start w-full max-w-lg sm:max-w-2xl lg:max-w-none px-2 sm:px-0"
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <button className="btn rounded-full border-2 border-white/50 w-full sm:w-auto sm:min-w-[160px] lg:min-w-[180px] px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent/10 group text-sm sm:text-base lg:text-lg font-medium">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  View Projects
                </span>
                <span className="absolute translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  View Projects
                </span>
              </button>
            </Link>
            {/* Download Resume button with multiple links for Vercel and localhost */}
            <div className="w-full sm:w-auto flex flex-col gap-1">
              <a
                href="/Rangdal_Pavansai_resume.pdf"
                download
                className="w-full"
              >
                <button className="btn rounded-full border-2 border-white/50 w-full sm:w-auto sm:min-w-[160px] lg:min-w-[180px] px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent/10 group text-sm sm:text-base lg:text-lg font-medium">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Download Resume
                  </span>
                  <span className="absolute translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Download Resume
                  </span>
                </button>
              </a>
              <a
                href="https://rangdal-pavansai.vercel.app/Rangdal_Pavansai_resume.pdf"
                download
                className="w-full"
                style={{
                  fontSize: "0.8em",
                  color: "#aaa",
                  textAlign: "center",
                }}
              ></a>
              <a
                href="http://localhost:3001/Rangdal_Pavansai_resume.pdf"
                download
                className="w-full"
                style={{
                  fontSize: "0.8em",
                  color: "#aaa",
                  textAlign: "center",
                }}
              ></a>
            </div>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="btn rounded-full border-2 border-white/50 w-full sm:w-auto sm:min-w-[160px] lg:min-w-[180px] px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent/10 group text-sm sm:text-base lg:text-lg font-medium">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s Connect
                </span>
                <span className="absolute translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Let&apos;s Connect
                </span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right: Avatar - Increased Size */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex-1 flex items-center justify-center z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" />
            <Avatar />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
