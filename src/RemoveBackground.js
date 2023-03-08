import cld from "./cld";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
import { scale } from "@cloudinary/url-gen/actions/resize";

export function getBackgroundRemovedUrl(publicID, width, height) {

  const myImage = cld.image(publicID); 

  // Apply the background removal effect, scale to the specified
  // dimensions and optimize format and quality
  myImage
  .effect(backgroundRemoval())
  .resize(scale().width(width).height(height))
  .format('auto')
  .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}