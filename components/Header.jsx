import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const getPageTitle = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/projects":
        return "Projects";
      case "/packages":
        return "Packages";
      case "/open-source":
        return "Open Source";
      case "/contact":
        return "Contact";
      default:
        return "Home";
    }
  };

  return (
    <header className="absolute z-30 w-full items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6 lg:py-8">
          {/* logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="logo"
              width={48}
              height={48}
              className="w-12 h-12 lg:w-14 lg:h-14"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
