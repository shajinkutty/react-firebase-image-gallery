import React from "react";
import classes from "./PictureGallery.module.css";

const PictureGallery = () => {
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
          />
          <label for="file">Choose a file</label>
          <p>File Name</p>
        </div>
        <div className={classes.Progress}></div>
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
