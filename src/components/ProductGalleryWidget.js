import React from "react";
import '../App.css';

const ProductGalleryWidget = () => {

  const myGallery= window.cloudinary.galleryWidget({
    container: "#my-gallery",
    cloudName: "demo",
    displayProps: {
      "mode": "expanded",
      "columns": 2
    },
    mediaAssets: [
      {publicId: "docs/bl_1"},
      {publicId: "docs/bl_2"},
      {publicId: "docs/bl_3"},
      {publicId: "docs/bl_4"},
      {publicId: "docs/bl_5"}
    ]
  });
  
  myGallery.render();

  return (
    <div className="App-body">
      <h1 className="font-weight-light">Product Gallery</h1>
      <div className="gallery" id="my-gallery"></div>
    </div>
  );
}

export default ProductGalleryWidget;
