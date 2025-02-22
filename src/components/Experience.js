import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <div className="font-medium w-full md:text-sm">
          {work}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
          origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="AI Software Engineer"
            company="Reliance Jio"
            companyLink="https://www.jio.com/"
            time="November 2022 - August 2024"
            address="Bengaluru, India"
            work={
              <ul className="list-disc pl-4">
                <li>Developed LLM-powered Agentic system to make API Tool calls via LLM&apos;s finetuned on API documentation</li>
                <li>Developed an internal service for managing end-to-end machine learning workflows and model training, enabling seamless deployment and scaling of data science pipelines across Telos (Jio Organization for AI)</li>
                <li>Developed expression engine to perform computation efficiently for the recommendation system, improving matrix multiplication calculations for protocol buffer objects</li>
              </ul>
            }
          />

          <Details
            position="Machine Learning Student Researcher"
            company="HMI LABS"
            companyLink="#"
            time="October 2021 - April 2022"
            address="Delhi, India"
            work={
              <ul className="list-disc pl-4">
                <li>Developed a web interface to capture and segment user responses to advertisements</li>
                <li>Conducted A/B tests and hypothesis testing, capturing multiple modalities such as eye, face, and audio</li>
                <li>Created a video pipeline from scratch for 3DCNN + NeXtVLAD and LGSS+Xception+NeXtVLAD in Pytorch</li>
                <li>Prepared and cleaned data for 100+ users after extracting features using OpenFace</li>
              </ul>
            }
          />

          <Details
            position="Software Engineering Intern"
            company="Microsoft"
            companyLink="https://www.microsoft.com/"
            time="May 2021 - July 2021"
            address="Remote"
            work={
              <ul className="list-disc pl-4">
                <li>Improved MAPE score for next-day load forecasts from 4% to 2.02% on load consumption data</li>
                <li>Optimized GPU-accelerated training pipelines using PyTorch and TensorFlow, enhancing model training speed</li>
                <li>Explored and implemented state-of-the-art deep learning architectures (LSTMs, Transformers) for time-series forecasting</li>
              </ul>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
