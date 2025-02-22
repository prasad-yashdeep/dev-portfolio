import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="flex flex-col items-start justify-between w-full">
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {type}
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {place}
          </span>
          <div className="font-medium w-full md:text-sm">
            {info}
          </div>
        </div>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Masters in Computer Engineering, Data Science Minor"
            time="2024-2026"
            place="New York University"
            info={<div></div>}
          />

          <Details
            type="Bachelors in Computer Science"
            time="Aug 2018 - May 2022"
            place="Indraprastha Institute of Information Technology, Delhi"
            info={
              <div className="font-medium">
                <ul className="list-disc pl-4">
                  <li>CGPA: 3.8</li>
                  <li>Received Dean&apos;s List Award for Excellence in Academic Performance</li>
                  <li>Received the Dean&apos;s Innovation and Research award for research on Education and Attention in classrooms</li>
                  <li>Teaching Assistant for Machine Learning course, helping students with assignments and concepts</li>
                </ul>
              </div>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
