import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="http://localhost:3000/">
         <Image 
              src="/fleux-logo.png"
              width={48}
              height={48}
              className="mr-6"
              alt="Fleux Labs"
            />
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="text-gray-50 hover:text-black hover:border-transparent">Contact</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
