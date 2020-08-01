import React, { useEffect } from "react";
import classes from "./Ui.module.css";
import { motion } from "framer-motion";

import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div
      layout
      className={classes.Progress}
      style={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
