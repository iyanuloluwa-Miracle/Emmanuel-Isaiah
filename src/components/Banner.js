import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              //Motion doesnt seems to work properly
              // variants={fadeIn("up", 0.3)}
              // initial="hidden"
              // whiteInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[0.8] lg:text-[50px]"
            >
              Emmanuel <span>Isaiah</span>
            </motion.h1>

            <div className="mb-6 text-[36px] lg:text-[-60px] font-secondary font-semibold uppercase leading-[1]">
              <span className=" text-black mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Business Intelligence Analyst",
                  2000,
                  "Data Analyst",
                  2000,
                  "Product Manager",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Experienced Business Intelligence Analyst with a BSc in Computer
              Science, seeking to enhance expertise in business analysis and
              pursue a career in Data Science. Strong analytical mindset,
              attention to detail, and proficient data skills. Eager to
              contribute insights for data-driven decision-making and drive
              business growth.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>

            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
              <a  href="http://linkedin.com/in/tomiwatheanalyst/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Tomiwahimself" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
