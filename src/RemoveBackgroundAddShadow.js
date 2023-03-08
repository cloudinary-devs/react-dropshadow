import cld from "./cld";
import { backgroundRemoval, dropShadow } from "@cloudinary/url-gen/actions/effect";
import { scale } from "@cloudinary/url-gen/actions/resize";

export function getBackgroundRemovedShadowUrl(publicID, width, height, az, el, spr) {

  const myImage = cld.image(publicID); 

  // Apply the background removal and drop shadow effects,
  // then scale the image to the specified dimensions
  // and optimize format and quality
  myImage
  .effect(backgroundRemoval())
  .effect(dropShadow().azimuth(az).elevation(el).spread(spr))
  .resize(scale().width(width).height(height))
  .format('auto')
  .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}