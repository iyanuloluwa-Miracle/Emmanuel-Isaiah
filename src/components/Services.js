import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Bussiness Intelligence Analyst",
    description:
      "Motivated BI Analyst with a BSc in Computer Science and 14 months of experience, transitioning to Data Science for impactful data-driven decisions.",
    link: "Learn more",
  },
  {
    name: "Data Analyst",
    description:
      "Data Analyst | Motivated BI Analyst with a BSc in Computer Science and 14 months of experience, transitioning to Data Science for impactful data-driven decisions.",
    link: "Learn more",
  },
  {
    name: "Product Manager",
    description:
      "Product Manager | Strategic visionary shaping exceptional products. Proficient in full product lifecycle, from ideation to launch. Let's innovate and create remarkable user experiences.",
    link: "Learn more",
  },
  {
    name: "Project Manager",
    description:
      "Project Manager | Seasoned professional adept at orchestrating diverse teams and resources to deliver successful projects. Proven track record of driving efficiency and fostering collaboration. Let's achieve excellence together.",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/**/}

          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Motivated Business Intelligence Analyst, Data Analyst and Product
              Manager
            </h3>
            <button className="btn btn-sm">See my work</button>
          </div>

          <div className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">{link}</a>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
