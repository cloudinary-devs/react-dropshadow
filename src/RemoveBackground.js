import {Cloudinary} from "@cloudinary/url-gen";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
import {scale} from "@cloudinary/url-gen/actions/resize";


export function getBackgroundRemovedUrl(publicID, width, height) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image(publicID); 

  // Apply the background removal effect
  myImage
  .effect(backgroundRemoval())
  .resize(scale().width(width).height(height))
  .format('auto')
  .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}