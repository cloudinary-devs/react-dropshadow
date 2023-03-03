import {Cloudinary} from "@cloudinary/url-gen";

export function getOriginalUrl(publicID) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image(publicID); 

  // Return the URL of the image
  return myImage.toURL();
}