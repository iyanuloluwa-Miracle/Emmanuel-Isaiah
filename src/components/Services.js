import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Data Analysis and Insights",
    description:
      "Turning Data into Decisions, and Ideas into Innovations.",
    link: "Learn more",
  },
  {
    name: "Product Strategy and Development",
    description:
      "Crafting Products, Shaping Strategies and Inspiring Success",
    link: "Learn more",
  },
  {
    name: "Stakeholder Collaboration ",
    description:
      "Connecting Teams, Uniting Visions, and Delivering Excellence",
    link: "Learn more",
  },
  // {
  //   name: "Project Manager",
  //   description:
  //     "Experienced Project Manager adept at leading diverse teams to triumphant outcomes. Expert in efficiency, collaboration, and seamless execution. Let's partner for excellent, successful projects.",
  //   link: "Learn more",
  // },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/**/}

          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">My expertise</h2>
            {/* <h3 className="h3 max-w-[455px] mb-16">
              Motivated Business Intelligence Analyst, Data Analyst and Product
              Manager
            </h3> */}
            <button className="btn btn-sm">
              <a
                href="https://github.com/Tomiwahimself"
                download
                target="_blank"
              >
                See my work
              </a>
            </button>
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
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
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
