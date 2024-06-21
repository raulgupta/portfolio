"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";


const services = [
  {
    num: "01",
    name: "Verte",
    badge: ["Mistral", "Pytorch"],
    title: "Mistral-7B Finetuning",
    description:
      `Q-LorA fine-tuning on Mistral-7B for Spine related queries. 
       Dataset acquistion: OpenAI Whisper, GPT-4 Turbo.`,
    href: "https://github.com/Alexei196/CS561Proj/tree/main/src",
  },
  {
    num: "02",
    name: "Timit Corpus",
    badge: ["Tensorflow", "Keras"],
    title: "Natural Language Processing",
    description:
      "Identify speakers from King Corpus using 20ms frames. Architectures used: GRU, LSTM, CNN ",
    href: "/timit-report.pdf",
  },
  {
    num: "03",
    name: "Stratas",
    title: "Computer Vision",
    badge: ["OpenCV", "Raspberry Pi"],
    description:
      "Autonomous driving data collection and real-time ride monitoring. Prototype built using RPi & OpenCV YOLO.",
    href: "https://www.youtube.com/shorts/spXXL1nwQmg",
  },
  {
    num: "04",
    name: "Toss Application",
    title: "Android",
    badge: ["Kotlin", "Android"],
    description:
      "A simple coin toss application for Android devices built using Kotlin.",
    href: "https://youtu.be/S8GkMVH_x1o",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-white transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <div className="flex gap-3">
                    {/* title */}
                    <h2 className=" flex-1 text-xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                      {service.name}
                    </h2>
                    {/* badge */}
                    {service.badge.map((badge, index) => {
                      return (
                        <Badge key={index} variant="destructive" className="text-white">
                          {badge}
                        </Badge>
                      );
                    })}
                </div>
                {/* title */}
                <h2 className="text-xl font-bold leading-none text-white group-hover:text-red-300 transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
