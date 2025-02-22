import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Yashdeep Prasad | About Page</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">

          <div className="grid w-full grid-cols-8 gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hi, I&apos;m <strong>Yashdeep Prasad</strong>, a Master&apos;s student in Computer Engineering 
                with a Data Science minor at New York University. I&apos;m passionate about developing scalable 
                AI solutions, optimizing deep learning models, and leveraging machine learning to solve 
                real-world challenges. Currently, I&apos;m fortunate to be learning deep learning from 
                Prof. Yann LeCun, Chief Scientist at Meta AI.
              </p>
              <p className="my-4 font-medium">
                As an AI Software Engineer at Reliance Jio, I gained hands-on experience in building 
                machine learning pipelines, fine-tuning LLMs, and designing scalable backend AI systems. 
                My work included developing an LLM-powered agentic system and building end-to-end ML 
                workflows. At HMI labs, I worked on GPU-accelerated deep learning pipelines and explored 
                LSTM and Vision Transformer architectures for multimodal video analysis.
              </p>
              <p className="font-medium">
                Beyond technical expertise, I&apos;ve demonstrated leadership as the Badminton Captain and 
                Sports Coordinator. I also managed TEDx @ IIITD, handling sponsorships and speaker outreach.
              </p>
            </div>

            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                className="w-full h-auto rounded-2xl"
                src={profile}
                alt="Yashdeep Prasad"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                priority
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-8 mt-16 md:grid-cols-1 md:gap-y-16">
            <div className="flex flex-col items-center justify-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={15} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
              text-center md:text-lg sm:text-base xs:text-sm">
                Projects
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={3} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
              text-center md:text-lg sm:text-base xs:text-sm">
                Years of Experience
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={5} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
              text-center md:text-lg sm:text-base xs:text-sm">
                Online Courses
              </h2>
            </div>
          </div>

          <Experience />
          <Education />
          <Skills />
        </Layout>
      </main>
    </>
  );
}
