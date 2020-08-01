import React, { useEffect } from "react";
import classes from "./Ui.module.css";

import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <div className={classes.Progress} style={{ width: progress + "%" }}></div>
  );
};

export default ProgressBar;
