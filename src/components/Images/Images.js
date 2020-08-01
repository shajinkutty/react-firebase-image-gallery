import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import classes from "./Images.module.css";

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.03,
    },
  }),
};

const Images = (props) => {
  const { docs } = useFirestore("images");
  return (
    <div className={classes.ImageGrid}>
      {docs.map((image, index) => (
        <motion.div
          layout
          whileHover={{ opacity: 1 }}
          key={image.id}
          className={classes.ImageWrap}
          onClick={() => props.setSelectedImg(image.url)}
        >
          <motion.img
            variants={imageVariants}
            custom={index}
            initial="hidden"
            animate="visible"
            src={image.url}
            alt=""
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Images;
