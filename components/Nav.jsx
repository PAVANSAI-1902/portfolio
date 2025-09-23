import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiCodeBracket,
  HiCube,
  HiHeart,
  HiDocumentText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "projects", path: "/projects", Icon: HiCodeBracket },
  { name: "packages", path: "/packages", Icon: HiCube },
  { name: "open source", path: "/open-source", Icon: HiHeart },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 xl:right-8 xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:left-auto xl:bottom-auto z-50 xl:w-20">
      <div className="flex xl:flex-col items-center justify-center xl:justify-center gap-x-1 xl:gap-y-4 px-4 xl:px-0 h-20 xl:h-auto py-4 xl:py-6 bg-white/10 xl:bg-black/40 backdrop-blur-md xl:rounded-2xl border-t xl:border border-white/20 xl:border-white/10 xl:shadow-2xl">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname
                ? "text-white bg-accent border-accent shadow-lg shadow-accent/30"
                : "text-white/70 hover:text-accent border-white/20 hover:border-accent/50 hover:bg-white/10"
            } relative flex flex-col xl:flex-row items-center justify-center group transition-all duration-300 p-3 xl:p-4 rounded-xl border-2 min-w-[60px] xl:min-w-[64px]`}
            href={link.path}
            key={i}
          >
            {/* tooltip for desktop */}
            <div
              role="tooltip"
              className="absolute pr-16 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center px-3 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-semibold capitalize whitespace-nowrap">
                  {link.name}
                </div>
                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[8px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <link.Icon
              aria-hidden
              className="w-6 h-6 xl:w-7 xl:h-7 mb-1 xl:mb-0"
            />

            {/* label for mobile */}
            <span className="text-xs xl:hidden font-medium capitalize leading-none">
              {link.name === "open source" ? "Open" : link.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
