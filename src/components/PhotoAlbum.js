import React from "react";
import '../App.css';
import {getBackgroundRemovedUrl} from '../RemoveBackground';
import { getBackgroundRemovedShadowUrl } from "../RemoveBackgroundAddShadow";
import { getOriginalUrl } from "../OriginalUrl";
import PhotoAlbum from "react-photo-album";

// Uses https://react-photo-album.com/

const PhotoAlbumComponent = (props) => {

  let photos = [
    { src: getOriginalUrl('docs/bl_1'), width: 800, height: 600 },
    { src: getOriginalUrl('docs/bl_2'), width: 800, height: 600 },
    { src: getOriginalUrl('docs/bl_3'), width: 800, height: 600 },
    { src: getOriginalUrl('docs/bl_4'), width: 800, height: 600 },
    { src: getOriginalUrl('docs/bl_5'), width: 800, height: 600 },
  ];

   if (props.data === "bgremoved")
   {
      photos = [
        { src: getBackgroundRemovedUrl('docs/bl_1'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_2'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_3'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_4'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_5'), width: 800, height: 600 },
      ];
   }
   else if (props.data === "shadow")
   {
      photos = [
        { src: getBackgroundRemovedShadowUrl('docs/bl_1'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_2'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_3'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_4'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_5'), width: 800, height: 600 },
    ];
  }
  else if (props.data === "original")
  {
      photos = [
       { src: getOriginalUrl('docs/bl_1'), width: 800, height: 600 },
       { src: getOriginalUrl('docs/bl_2'), width: 800, height: 600 },
       { src: getOriginalUrl('docs/bl_3'), width: 800, height: 600 },
       { src: getOriginalUrl('docs/bl_4'), width: 800, height: 600 },
       { src: getOriginalUrl('docs/bl_5'), width: 800, height: 600 },
     ];    
  }

    return (
        <div className="App-body">
          <PhotoAlbum layout="rows" photos={photos} />
        </div>
      );

}

export default PhotoAlbumComponent;