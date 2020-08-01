import React, { useState } from "react";
import classes from "./PictureGallery.module.css";
import ProgressBar from "../UI/ProgressBar";

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
        <h2>Your Gallery</h2>
        <div className={classes.Control}>
          <input
            type="file"
            name="file"
            id="file"
            className={classes.Inputfile}
            onChange={handleChangeFile}
          />
          <label htmlFor="file">Choose a file</label>
          {file && <p>File Name</p>}
        </div>
        {file && <ProgressBar file={file} setFile={setFile} />}
        {error && <p>{error}</p>}
        <div className={classes.ImageGrid}>
          <div className={classes.Image}>
            image 1
            <img src="" alt="" />
          </div>
          <div className={classes.Image}>
            Image 2
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureGallery;
