"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 9,
    text: "Years of Experience",
  },
  {
    num: 5,
    text: "Technology Stacks",
  },
  {
    num: 7,
    text: "Regional Collaborations",
  },
  {
    num: 100,
    text: "+Production Deployments",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mx-auto max-h-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="xl:text-6xl text-2xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 30 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-xs lg:text-xl`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
