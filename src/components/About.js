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

            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top "
          ></motion.div>

          <div className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              Motivated Business Analyst and Product
              Manager
            </h3>
            <p className="mb-6">
            Experienced Business Analyst and Product Manager, specialized in data analysis, product strategy, requirements gathering, and project management. With this unique blend, I bridge the worlds of Business Analysis and Product Management to serve your organization's needs.
           

            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={18} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <a
                  href="https://onedrive.live.com/?authkey=%21AFAR1tff0sMnHTM&id=C05128DCDE81300E%21318&cid=C05128DCDE81300E&parId=root&parQt=sharedby&o=OneUp"
                  download
                  target="_blank"
                >
                  Download Cv
                </a>
              </button>
              <a href="#work" className="text-gradient btn-link">
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
