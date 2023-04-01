import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { LinkButton } from "./buttons";
import { linkedin, github_logo, medium } from "../assets";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <div className='grid grid-cols-3 mt-6 text-violet text-[20px]'>
          <a href="https://github.com/anhhchu">
            <img src={ github_logo } alt="Github" /> Github
          </a>
          <a href="https://www.linkedin.com/in/anhhchu/">
            <img src={ linkedin } alt="LinkedIn" /> LinkedIn
          </a>
          <a href="https://medium.com/@anhcodes">
            <img src={ medium } alt="Medium" /> Medium
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
