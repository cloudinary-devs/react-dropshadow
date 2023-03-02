import React from "react";
import '../App.css';
import {getBackgroundRemovedUrl} from '../RemoveBackground';
import { getBackgroundRemovedShadowUrl } from "../RemoveBackgroundAddShadow";
import { getOriginalUrl } from "../OriginaUrl";
import PhotoAlbum from "react-photo-album";

// Uses https://react-photo-album.com/

const PhotoAlbumComponent = () => {

    const photos = [
        { src: getOriginalUrl('docs/bl_1'), width: 800, height: 600 },
        { src: getOriginalUrl('docs/bl_2'), width: 800, height: 600 },
        { src: getOriginalUrl('docs/bl_3'), width: 800, height: 600 },
        { src: getOriginalUrl('docs/bl_4'), width: 800, height: 600 },
        { src: getOriginalUrl('docs/bl_5'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_1'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_2'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_3'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_4'), width: 800, height: 600 },
        { src: getBackgroundRemovedUrl('docs/bl_5'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_1'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_2'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_3'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_4'), width: 800, height: 600 },
        { src: getBackgroundRemovedShadowUrl('docs/bl_5'), width: 800, height: 600 },
    ];

    return (
        <div className="App-body">
          <h1 className="font-weight-light">Photo Album</h1>
          <PhotoAlbum layout="rows" photos={photos} />
        </div>
      );

}

export default PhotoAlbumComponent;