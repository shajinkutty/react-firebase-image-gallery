import React, { useState } from "react";
import classes from "./PictureGallery.module.css";
import ProgressBar from "../UI/ProgressBar";
import { motion } from "framer-motion";

const PictureGallery = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  // File change event
  const handleChangeFile = (e) => {
    const currentFile = e.target.files[0]; //get first file
    const imageTypes = ["image/jpeg", "image/jpg", "image/png"]; //Allowed Image types

    // check if image type match the allowed types
    if (imageTypes.includes(currentFile.type)) {
      setFile(currentFile);
      setError(null);
    } else {
      setError("Invalid Image Type");
      setFile(null);
    }
  };

  return (
    <div>
      <div className={classes.Container}>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Your Gallery
        </motion.h2>
        <div className={classes.Control}>
          <input
            type="file"
            name="file"
            id="file"
            className={classes.Inputfile}
            onChange={handleChangeFile}
          />
          <motion.label
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            htmlFor="file"
          >
            Choose a file
          </motion.label>
          {file && <p>{file.name}</p>}
        </div>
        {file && <ProgressBar file={file} setFile={setFile} />}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default PictureGallery;
