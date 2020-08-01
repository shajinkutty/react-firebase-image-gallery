import React from "react";
import { motion } from "framer-motion";
import classes from "./Header.module.css";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Header = () => {
  return (
    <>
      <div className={classes.Header}>
        <motion.svg
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          className={classes.Svg}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={pathVariants}
            d="m336 232a32 32 0 1 0 -32-32 32.036 32.036 0 0 0 32 32zm0-48a16 16 0 1 1 -16 16 16.019 16.019 0 0 1 16-16zm152-112h-464a8 8 0 0 0 -8 8v352a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-352a8 8 0 0 0 -8-8zm-8 352h-448v-336h448zm-408-32h368a8 8 0 0 0 8-8v-256a8 8 0 0 0 -8-8h-368a8 8 0 0 0 -8 8v256a8 8 0 0 0 8 8zm13.2-16 84.457-161.876 96.3 111.115a8 8 0 0 0 10.483 1.417l66.1-44.068 80.066 93.412zm346.8-240v226.374l-81.926-95.581a8 8 0 0 0 -10.512-1.449l-66.133 44.089-99.384-114.672a8 8 0 0 0 -13.138 1.538l-80.907 155.073v-215.372z"
            fill="none"
          />
        </motion.svg>
      </div>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={classes.Title}
      >
        <h3>FireGram</h3>
      </motion.div>
    </>
  );
};

export default Header;
