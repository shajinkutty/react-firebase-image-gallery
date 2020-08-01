import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PictureGallery from "./components/PictureGallery/PictureGallery";

function App() {
  return (
    <div className="App">
      <Header />
      <PictureGallery></PictureGallery>
    </div>
  );
}

export default App;
