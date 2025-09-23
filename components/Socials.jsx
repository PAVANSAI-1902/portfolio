import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/pavansai_rangdal/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rangdal.pavansai",
    Icon: RiFacebookLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rangdal-pavansai",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://www.github.com/Pavansai20054",
    Icon: RiGithubLine,
  },
];

const Socials = () => (
  <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-4">
    {socialData.map((social, i) => (
      <a
        key={i}
        title={social.name}
        href={social.link}
        target="_blank"
        rel="noreferrer noopener"
        className={`${
          social.name === "Github"
            ? "bg-accent rounded-full p-3 hover:text-white hover:bg-accent/80"
            : "hover:text-accent text-white bg-white/10 rounded-full p-3 hover:bg-accent/20"
        } transition-all duration-300 cursor-pointer flex items-center justify-center w-12 h-12 md:w-14 md:h-14 hover:scale-110 active:scale-95 z-[100] relative shadow-lg border border-white/20`}
      >
        <social.Icon
          aria-hidden
          className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0"
        />
        <span className="sr-only">{social.name}</span>
      </a>
    ))}
  </div>
);

export default Socials;
