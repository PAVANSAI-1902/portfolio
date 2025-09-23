import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiMail, HiGlobe, HiCode } from "react-icons/hi";

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "pavansairangdal@gmail.com",
      link: "mailto:pavansairangdal@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: HiGlobe,
      title: "LinkedIn",
      value: "linkedin.com/in/rangdal-pavansai",
      link: "https://www.linkedin.com/in/rangdal-pavansai",
      color: "text-blue-500",
    },
    {
      icon: HiCode,
      title: "GitHub",
      value: "github.com/Pavansai20054",
      link: "https://github.com/Pavansai20054",
      color: "text-gray-400",
    },
  ];

  return (
    <>
      {/* Netlify hidden form for build-time detection */}
      <form name="contact" netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>
      <div className="min-h-screen bg-primary/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-20 sm:py-24 md:py-28 lg:py-32 text-center xl:text-left flex items-center justify-center min-h-screen">
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold"
            >
              Let&apos;s <span className="text-green-500">connect</span>.
            </motion.h2>

            {/* Contact Info */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-8 sm:mb-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <info.icon
                        className={`text-2xl sm:text-3xl mb-2 sm:mb-3 ${info.color} group-hover:scale-110 transition-transform`}
                      />
                      <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                        {info.title}
                      </h3>
                      <p className="text-white/60 text-xs sm:text-sm break-all">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Download Resume */}
              <div className="text-center mb-6 sm:mb-8 flex flex-col items-center gap-1">
                <a
                  href="/Rangdal_Pavansai_resume.pdf"
                  download
                  className="bg-accent text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-accent/80 transition-all inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>Download Resume</span>
                  <BsArrowRight />
                </a>
                <a
                  href="https://rangdal-pavansai.vercel.app/Rangdal_Pavansai_resume.pdf"
                  download
                  style={{
                    fontSize: "0.8em",
                    color: "#aaa",
                    textAlign: "center",
                  }}
                ></a>
                <a
                  href="http://localhost:3001/Rangdal_Pavansai_resume.pdf"
                  download
                  style={{
                    fontSize: "0.8em",
                    color: "#aaa",
                    textAlign: "center",
                  }}
                ></a>
              </div>
            </motion.div>

            {/* form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto"
              autoComplete="off"
              autoCapitalize="off"
              data-netlify="true"
            >
              {/* input group */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input flex-1"
                  required
                  aria-required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="input flex-1"
                  required
                  aria-required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                required
                aria-required
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="textarea min-h-[120px] sm:min-h-[180px]"
                required
                aria-required
              />
              <button
                type="submit"
                className="btn rounded-full border border-white/50 w-full sm:w-auto sm:max-w-[170px] px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group text-sm sm:text-base mx-auto"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s talk
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[18px] sm:text-[22px]"
                  aria-hidden
                />
              </button>
            </motion.form>

            {/* Additional Info */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-8 sm:mt-12 text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                  Interested in Collaboration?
                </h3>
                <p className="text-white/60 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  I&apos;m always open to discussing new opportunities,
                  collaborations, or just having a chat about technology and AI.
                </p>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Whether it&apos;s a project idea, research collaboration, or
                  just want to connect, feel free to reach out!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Contact;
