import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@tech_pavan1902",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/pavansai_rangdal/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61575767356883",
    Icon: RiFacebookLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rangdal-pavansai/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://www.github.com/Pavansai.20054",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-2 xs:gap-x-3 sm:gap-x-4 md:gap-x-5 text-base sm:text-lg max-w-xs sm:max-w-none mx-auto">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-1 sm:p-[5px] hover:text-white hover:bg-accent/80"
              : "hover:text-accent"
          } transition-all duration-300 touch-manipulation flex items-center justify-center min-w-[32px] min-h-[32px] sm:min-w-[36px] sm:min-h-[36px] hover:scale-110 active:scale-95`}
        >
          <social.Icon 
            aria-hidden 
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" 
          />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;