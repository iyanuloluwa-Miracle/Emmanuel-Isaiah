import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img*/}

          <motion.div
            // variants={fadeIn("up", 0.3)}
            // initial="hidden"
            // whiteinview={"show"}
            // viewport={{ once: false, amount: 0.3 }}

          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top "></motion.div>

          <div className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              Motivated Business Intelligence Analyst, Data Analyst and Product Manager
            </h3>
            <p className="mb-6">
              Experienced BI Analyst with a BSc in Computer Science, seeking to
              enhance expertise in business analysis and pursue a career in Data
              Science. Strong analytical mindset, attention to detail, and
              proficient data skills. Eager to contribute insights for
              data-driven decision-making and drive business growth.
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  k+


                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}

                  k+ 
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
