import {Cloudinary} from "@cloudinary/url-gen";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";


export function getBackgroundRemovedUrl(publicID) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image(publicID); 

  // Apply the background removal effect
  myImage
  .effect(backgroundRemoval());

  // Return the URL of the image
  return myImage.toURL();
}