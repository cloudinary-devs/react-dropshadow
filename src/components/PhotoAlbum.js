import React from "react";
import '../App.css';
import {getBackgroundRemovedUrl} from '../RemoveBackground';
import { getBackgroundRemovedShadowUrl } from "../RemoveBackgroundAddShadow";
import { getOriginalUrl } from "../OriginalUrl";
import PhotoAlbum from "react-photo-album";

// Uses https://react-photo-album.com/

const PhotoAlbumComponent = (props) => {

  const product="furniture";

  let publicId1 = 'docs/furniture/chair1';
  let publicId2 = 'docs/furniture/chair2';
  let publicId3 = 'docs/furniture/chair6';
  let publicId4 = 'docs/furniture/chair4';
  let publicId5 = 'docs/furniture/chair5';

  let w1 = 1920;
  let h1 = 1257;

  let w2 = 1280;
  let h2 = 1920;

  let w3 = 1920;
  let h3 = 1288;

  let w4 = 1920;
  let h4 = 1280;

  let w5 = 1272;
  let h5 = 1920;

  if (product === "cars")
  {
    publicId1 = 'docs/cars/car1';
    publicId2 = 'docs/cars/car2';
    publicId3 = 'docs/cars/car3';
    publicId4 = 'docs/cars/car4';
    publicId5 = 'docs/cars/car5';

    w1 = 1920;
    h1 = 1280;

    w2 = 1920;
    h2 = 1278;

    w3 = 1920;
    h3 = 1278;

    w4 = 1920;
    h4 = 1280;

    w5 = 1920;
    h5 = 975;
  }

  else if (product === "furniture")
  {
    publicId1 = 'docs/bl_1';
    publicId2 = 'docs/bl_2';
    publicId3 = 'docs/bl_3';
    publicId4 = 'docs/bl_4';
    publicId5 = 'docs/bl_5';

    w1 = 480;
    h1 = 350;

    w2 = 480;
    h2 = 350;

    w3 = 480;
    h3 = 350;

    w4 = 480;
    h4 = 350;

    w5 = 480;
    h5 = 350;    
  }

  let photos = [
    { src: getOriginalUrl(publicId1), width: w1, height: h1 },
    { src: getOriginalUrl(publicId2), width: w2, height: h2 },
    { src: getOriginalUrl(publicId3), width: w3, height: h3 },
    { src: getOriginalUrl(publicId4), width: w4, height: h4 },
    { src: getOriginalUrl(publicId5), width: w5, height: h5 },
  ];

   if (props.data.displayOption === "bgremoved")
   {
      photos = [
        { src: getBackgroundRemovedUrl(publicId1), width: w1, height: h1 },
        { src: getBackgroundRemovedUrl(publicId2), width: w2, height: h2 },
        { src: getBackgroundRemovedUrl(publicId3), width: w3, height: h3 },
        { src: getBackgroundRemovedUrl(publicId4), width: w4, height: h4 },
        { src: getBackgroundRemovedUrl(publicId5), width: w5, height: h5 },
      ];
   }
   else if (props.data.displayOption === "shadow")
   {
      photos = [
        { src: getBackgroundRemovedShadowUrl(publicId1, props.data.az, props.data.el, props.data.spr), width: w1, height: h1 },
        { src: getBackgroundRemovedShadowUrl(publicId2, props.data.az, props.data.el, props.data.spr), width: w2, height: h2 },
        { src: getBackgroundRemovedShadowUrl(publicId3, props.data.az, props.data.el, props.data.spr), width: w3, height: h3 },
        { src: getBackgroundRemovedShadowUrl(publicId4, props.data.az, props.data.el, props.data.spr), width: w4, height: h4 },
        { src: getBackgroundRemovedShadowUrl(publicId5, props.data.az, props.data.el, props.data.spr), width: w5, height: h5 },
    ];
  }
  else if (props.data.displayOption === "original")
  {
      photos = [
       { src: getOriginalUrl(publicId1), width: w1, height: h1 },
       { src: getOriginalUrl(publicId2), width: w2, height: h2 },
       { src: getOriginalUrl(publicId3), width: w3, height: h3 },
       { src: getOriginalUrl(publicId4), width: w4, height: h4 },
       { src: getOriginalUrl(publicId5), width: w5, height: h5 },
     ];    
  }

    return (
        <div className="App-body">
          <PhotoAlbum layout="rows" photos={photos} />
        </div>
      );

}

export default PhotoAlbumComponent;