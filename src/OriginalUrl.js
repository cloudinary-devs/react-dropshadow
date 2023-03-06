import {Cloudinary} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";

export function getOriginalUrl(publicID, width, height) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image(publicID)
    .resize(scale().width(width).height(height))
    .format('auto')
    .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}