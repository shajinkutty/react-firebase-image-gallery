import React from "react";
import classes from "./ImagePreview.module.css";

const ImagePreview = ({ url, setSetSelectedImg }) => {
  const hideModalHandler = (e) => {
    if (!e.target.src) {
      setSetSelectedImg(null);
    }
  };
  return (
    <div className={classes.BackDrop} onClick={hideModalHandler}>
      <div className={classes.Modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default ImagePreview;
