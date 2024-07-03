"use client";

import {
  FaReact,
  FaJava,
  FaPause,
} from "react-icons/fa";

import React from "react";
import { SiTailwindcss, SiNextdotjs, SiVercel, SiTypescript, SiOpenai, SiAnthropic, SiPerplexity, SiDocker, SiAmazonaws, SiPytorch, SiJupyter, SiPython, SiExpress, SiPuppeteer } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I design and implement robust end-to-end solutions using modern AI SDKs and full-stack technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rahul Gupta",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 619 764 8386",
    },
    {
      fieldName: "Location",
      fieldValue: "San Diego, CA"
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "rahul2608",
    },
    {
      fieldName: "Status",
      fieldValue: "OPT-(Aug,2027)",
    },
    {
      fieldName: "Email",
      fieldValue: "rahul.gupta2608@yahoo.com",
    },
    {
      fieldName: "Relocate",
      fieldValue: "Yes",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    `I use my expertise in AI development and full-stack engineering to develop 
    platforms that facilitate natural, user-friendly interactions between humans 
    and AI.`,
  items: [
    {
      company: "Fleuxlabs.ai",
      position: "Founder",
      duration: "August 2022 - Present",
      location: "San Diego, CA, USA",
      kpi: [
        { one: "Developed a live, state-of-the-art multi-LLM chat platform with shared context, integrating GPT-4/Vo, Claude Opus, and Perplexity, using a vectorized Pinecone database and Cohere embeddings for seamless user experiences.", 
          two: "Includes 5 attachments per message and TTS backed by Elevenlabs.", 
          three: "Actively working on Puppeeteer based Dockerized agentic control systems with multi-llm access running on proxies in a controlled access space.", }        
      ]    
    },
    {
      company: "Stratas",
      position: "Co-Founder",
      duration: "Jan 2023 - Jan 2024",
      location: "San Diego, CA, USA",
      kpi: [
        { one: "Built a React Native application with speed sensors and Bluetooth connectivity.", 
          two: "Developed a Raspberry Pi prototype with a 4K camera for ride monitoring.", 
          three: "Made a data-driven decision to halt further development due to scaling challenges and universal chip shortages.", }
      ]    
    },
    {
      company: "Walmart Global Tech",
      position: "Software Development Engineer II",
      duration: "June 2021 - August 2022",
      location: "Vancouver, BC, Canada ", 
      kpi: [
        { one: "Dockerized WalmartUS iOS and Android mobile release pipeline, collaborating with NX founder, Victor Savkin to create a custom monorepo.", 
          two: "Implemented dependency caching and dependency graphs, reducing average build times by 47%.", 
          three: "Subsequent builds after initial failure were 78% faster, down to 12 minutes from 54 minutes, enhancing developer commit velocity.",}
        ]    
    },
    {
      company: "@WalmartLabs",
      position: "Software Developmenet Engineer In Test",
      duration: "June 2019 - May 2021",
      location: "Sunyvale, CA, USA",
      kpi: [ { one: "Developed a React.js tool that automated the entire order lifecycle using mock APIs, enabling same-day testing and deployment across US, UK, and India.", 
        two: "Eliminated production hot-fixes, significantly reducing risk and improving software quality.", 
        three: "Saved 200+ hours of US resources and facilitated the US testing department's transition to India due to the tool's reliability and minimal maintenance requirements.", }, 
      ]
    },
    
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Masters in Computer Science from San Diego State University, focusing on deep learning and AI applications. Coursework included speech recognition, intelligent systems, agentic control systems, and large language modeling.",
  items: [
    {
      institution: "San Diego State University",
      degree: "MS in Computer Science",
      duration: "2022 - 2024",
    },
    {
      institution: "Oracle",
      degree: "Java Cerified Professional",
      duration: "2019 - Present",
    },
    {
      institution: "San Diego State University",
      degree: "BS in Computer Science",
      duration: "2014 - 2018",
    }
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Core technologies I'm experienced with",
  skillList: [
    {
      icon: <SiPytorch />,
      name: "PyTorch",
    },
    {
      icon: <SiJupyter />,
      name: "Jupyter Notebooks",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiOpenai />,
      name: "OpenAI",
    },
    {
      icon: <SiAnthropic />,
      name: "Anthropic",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiAmazonaws/>, 
      name: "AWS",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiVercel />,
      name: "Vercel",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <Image src="/pinecone.svg" alt="Pinecone DB" width={110} height={110} className="h-[110px] w-[110px] hover:content-[url('/pinecone-red.svg')]"/>,
      name: "Pinecone DB",
    },
    {
      icon:<FaJava />,
      name: "Java",
    },
    {
      icon: <FaPause />,
      name: "Elevenlabs",
    },
    {
      icon: <SiPuppeteer />,
      name: "Puppeteer",
    }
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 text-white"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] text-white/80"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      const experienceId = `experience-${index}`;
                      const kpiId = `kpi-${index}`;
                      return (
                        <React.Fragment key={`item-${index}`}>
                        <li
                          key={experienceId}
                          className="bg-[#232329] h-[360px] py-6 px-10 rounded-xl flex flex-col items-center justify-start lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-md max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 mt-2">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] mb-2 rounded-full bg-accent"></span>
                            <p className="text-white">{item.company}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-whit3/80">{item.location}</p>
                          </div>
                        </li>
                        <li
                        key={kpiId}
                        className="bg-[#232329] h-[360px] py-6 px-10 rounded-xl flex flex-col items-start gap-1"
                      >
                        <span className="text-green-400">KPIS</span>
                          {item.kpi.map((kpi, index) => {
                            return (
                              <div key={`${kpiId}-${index}`} className="flex flex-col text-white/60 text-xs">
                                <div className="flex items-center gap-3 my-3">
                                  {/* dot */}
                                  <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                                   <p className="w-full">{kpi.one}</p>
                                </div>
                                <div className="flex items-center gap-2 my-3">
                                  {/* dot */}
                                  <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                                   <p className="w-full">{kpi.two}</p>
                                </div>
                                <div className="flex items-center gap-3 my-3">
                                  {/* dot */}
                                  <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                                   <p className="w-full">{kpi.three}</p>
                                </div>
                              </div>
                            );
                          })}
                      </li>
                      </React.Fragment>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-green-400">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
