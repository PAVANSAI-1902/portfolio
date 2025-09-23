import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-y-4 sm:gap-y-6 py-4 sm:py-6 lg:py-8">
          {/* logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              className="sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;