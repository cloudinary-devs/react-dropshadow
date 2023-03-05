import {Cloudinary} from "@cloudinary/url-gen";
//import {fill} from "@cloudinary/url-gen/actions/resize";
//import {autoGravity} from "@cloudinary/url-gen/qualifiers/gravity";

export function getOriginalUrl(publicID) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image(publicID);
  //.resize(fill().width(800).height(600).gravity(autoGravity()));

  // Return the URL of the image
  return myImage.toURL();
}