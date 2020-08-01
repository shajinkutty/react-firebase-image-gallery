import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PictureGallery from "./components/PictureGallery/PictureGallery";
import ImagePreview from "./components/modal/ImagePreview";
import Images from "./components/Images/Images";

function App() {
  const [setSelectedImg, setSetSelectedImg] = useState(null); //set single image url for modal view
  return (
    <div className="App">
      <Header />
      <PictureGallery></PictureGallery>
      <Images setSelectedImg={setSetSelectedImg}></Images>
      {setSelectedImg && (
        <ImagePreview
          url={setSelectedImg}
          setSetSelectedImg={setSetSelectedImg}
        />
      )}
    </div>
  );
}

export default App;
