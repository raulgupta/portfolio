import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Laptop } from "lucide-react";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> AI/ML Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Rahul Gupta</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
               I design and implement robust end-to-end solutions using 
               modern AI SDKs and full-stack technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link 
               href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="md"
                  className="uppercase flex items-center gap-2 text-white hover:bg-accent-hover hover:border-transparent"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-base" />
                </Button>
              </Link>
              <a href="https://www.fleuxlabs.ai/login">
              <Button
                variant="outline"
                size="md"
                className="uppercase text-base flex items-center gap-2 text-white hover:bg-accent-hover hover:border-transparent"
              >
                <span>Live Project</span>
                <Laptop className="text-base" />
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-white text-base hover:bg-white hover:text-primary hover:transition-all duration-500 hover:border-transparent"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
