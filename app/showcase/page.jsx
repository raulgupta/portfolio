"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Foundry",
    title: "One Chat To Rule Them All. ",
    description:
      "Chat platform with all your favorite AI models in the same chat with shared context. Talk to one, talk to all at the same time.",
    stack: [{ name: "Anthropic" }, { name: "Openai" }, { name: "Cohere" }, { name: "Next14" }, { name: "Pinecone"}],
    image: "/assets/work/thumb1.png",
    live: "https://fleuxlabs.ai/login",
    github: "#",
  },
  {
    num: "02",
    category: "Foundry",
    title: "Live Access",
    description:
      "Streamable UI with theming and multi chat support. Optimized for Desktop Usage.",
    stack: [{ name: "Vercel" }, { name: "Tailwind" }, { name: "React.js" }],
    image: "/assets/work/thumb2.png",
    live: "https://fleuxlabs.ai/login",
    github: "#",
  },
  {
    num: "03",
    category: "Foundry",
    title: "Attachments & TTS",
    description:
      "Attach upto 5 files in a single message and get them read out loud with TTS.",
    stack: [{ name: "Formidable" }, { name: "ElevenLabs" }],
    image: "/assets/work/thumb3.png",
    live: "https://fleuxlabs.ai/login",
    github: "#",
  },
  {
    num: "04",
    category: "Agents",
    title: "Development Underway",
    description:
      "Puppeeteer based Dockerized agentic control systems with multi-llm access running on proxies in a controlled access space.",
    stack: [{ name: "Puppeteer" }, {name: "LangChain"}, { name: "Docker" }, { name: "BrightData" }],
    image: "/assets/work/thumb4.png",
    live: "https://fleuxlabs.ai/login",
    github: "#",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto my-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} 
              </h2>
              <h5>
                {/* project title */}
                <span className="text-[22px] font-bold text-red-400">{project.title}</span>
              </h5>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xs xl:text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Access Private</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[390px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full "></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="h-full w-full object-cover hover:scale-110 transition-all duration-500"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
