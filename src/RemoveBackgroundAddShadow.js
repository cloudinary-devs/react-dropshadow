import {Cloudinary} from "@cloudinary/url-gen";
import { backgroundRemoval, dropShadow } from "@cloudinary/url-gen/actions/effect";


export function getBackgroundRemovedShadowUrl(publicID) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image(publicID); 

  // Apply the background removal and drop shadow effects
  myImage
  .effect(backgroundRemoval())
  .effect(dropShadow());

  // Return the URL of the image
  return myImage.toURL();
}