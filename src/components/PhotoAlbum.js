import React from "react";
import '../App.css';
import {getBackgroundRemovedUrl} from '../RemoveBackground';
import { getBackgroundRemovedShadowUrl } from "../RemoveBackgroundAddShadow";
import { getOriginalUrl } from "../OriginalUrl";
import PhotoAlbum from "react-photo-album";

// Uses https://react-photo-album.com/

const PhotoAlbumComponent = (props) => {
  
  let publicIds = [];
  let widths = [];
  let heights = [];

  if (props.data.productOption === "cars") {
      publicIds = ['docs/cars/car1',
                   'docs/cars/car2',
                   'docs/cars/car3',
                   'docs/cars/car4',
                   'docs/cars/car5'];
      widths = [1920, 1920, 1920, 1920, 1920];
      heights = [1280, 1278, 1278, 1280, 975];
  }

  else if (props.data.productOption === "furniture") {
      publicIds = ['docs/bl_1',
                   'docs/bl_2',
                   'docs/bl_3',
                   'docs/bl_4',
                   'docs/bl_5'];
      widths = [480, 480, 480, 480, 480];
      heights = [350, 350, 350, 350, 350];
  }
  else if (props.data.productOption === "chairs") {
      publicIds = ['docs/furniture/chair1',
                   'docs/furniture/chair2',
                   'docs/furniture/chair6',
                   'docs/furniture/chair4',
                   'docs/furniture/chair5'];
      widths = [1920, 1280, 1920, 1920, 1272];
      heights = [1257, 1920, 1288, 1280, 1920];
  }

  let photos = [];

   if (props.data.displayOption === "bgremoved") {
      for (let i=0; i<5; i++)
      {
          photos.push({ src: getBackgroundRemovedUrl(publicIds[i], widths[i], heights[i]), 
            width: widths[i], height: heights[i], 
            images: [
              { src: getBackgroundRemovedUrl(publicIds[i], Math.ceil(widths[i]/2), Math.ceil(heights[i]/2)), 
                width: Math.ceil(widths[i]/2), height: Math.ceil(heights[i]/2) },
              { src: getBackgroundRemovedUrl(publicIds[i], Math.ceil(widths[i]/4), Math.ceil(heights[i]/4)), 
                width: Math.ceil(widths[i]/4), height: Math.ceil(heights[i]/4) }
            ]});
      }
   }
   else if (props.data.displayOption === "shadow") {
      for (let i=0; i<5; i++)
      {
          photos.push({ src: getBackgroundRemovedShadowUrl(publicIds[i], widths[i], heights[i], 
            props.data.az, props.data.el, props.data.spr), width: widths[i], height: heights[i], 
            images: [
              { src: getBackgroundRemovedShadowUrl(publicIds[i], Math.ceil(widths[i]/2), Math.ceil(heights[i]/2), 
                props.data.az, props.data.el, props.data.spr), 
                width: Math.ceil(widths[i]/2), height: Math.ceil(heights[i]/2) },
              { src: getBackgroundRemovedShadowUrl(publicIds[i], Math.ceil(widths[i]/4), Math.ceil(heights[i]/4), 
                props.data.az, props.data.el, props.data.spr), 
                width: Math.ceil(widths[i]/4), height: Math.ceil(heights[i]/4) }
            ]});
      }
  }
  else if (props.data.displayOption === "original") {
      for (let i=0; i<5; i++)
      {
          photos.push({ src: getOriginalUrl(publicIds[i], widths[i], heights[i]), 
            width: widths[i], height: heights[i], 
            images: [
              { src: getOriginalUrl(publicIds[i], Math.ceil(widths[i]/2), Math.ceil(heights[i]/2)), 
                width: Math.ceil(widths[i]/2), height: Math.ceil(heights[i]/2) },
              { src: getOriginalUrl(publicIds[i], Math.ceil(widths[i]/4), Math.ceil(heights[i]/4)), 
                width: Math.ceil(widths[i]/4), height: Math.ceil(heights[i]/4) }
            ]});
      }
  }

  return (
      <div className="App-body">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    );

}

export default PhotoAlbumComponent;