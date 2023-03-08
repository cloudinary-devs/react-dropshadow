import cld from "./cld";
import { scale } from "@cloudinary/url-gen/actions/resize";

export function getOriginalUrl(publicID, width, height) {

  // Scale the image to the specified dimensions
  // and optimize format and quality
  const myImage = cld.image(publicID)
    .resize(scale().width(width).height(height))
    .format('auto')
    .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}