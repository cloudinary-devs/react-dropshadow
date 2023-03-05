import {Cloudinary} from "@cloudinary/url-gen";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
//import {fill} from "@cloudinary/url-gen/actions/resize";
//import {autoGravity} from "@cloudinary/url-gen/qualifiers/gravity";


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
  //.resize(fill().width(800).height(600).gravity(autoGravity()));

  // Return the URL of the image
  return myImage.toURL();
}