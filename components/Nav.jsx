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
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-center xl:justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 xl:gap-y-10 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-0 h-[70px] sm:h-[80px] xl:h-max py-4 sm:py-6 xl:py-8 bg-white/10 backdrop-blur-sm text-xl sm:text-2xl md:text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300 p-2 sm:p-3 xl:p-2 rounded-lg hover:bg-white/10`}
            href={link.path}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div className="flex items-center justify-center">
              <link.Icon
                aria-hidden
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-5 xl:h-5"
              />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
