import './App.css';
import './components/ProductGalleryWidget';

// 1. Import classes
// ==================

import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";
import { backgroundRemoval, dropShadow } from "@cloudinary/url-gen/actions/effect";
import ProductGalleryWidget from './components/ProductGalleryWidget';

const App = () => {


  // 2. Set your cloud name
  //========================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });


  // 3. Get your image
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('docs/bl_2'); 


  // 4. Transform your image
  //=========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage
   .effect(backgroundRemoval())
   .effect(dropShadow())
   .resize(fill().width(250).height(250));


  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
    <div className="App-body">
      <h1>React Drop Shadow</h1>
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
      <ProductGalleryWidget />
    </div>
  )

};

export default App;
