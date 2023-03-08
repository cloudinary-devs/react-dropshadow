import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import AzimuthSlider from './AzimuthSlider';
import ElevationSlider from './ElevationSlider';
import SpreadSlider from './SpreadShadow';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';


export default function DropShadowOptions({displayOption, setDropShadowParams}) {

  const [azimuth, setAzimuth] = useState(215);
  const [elevation, setElevation] = useState(45);
  const [spread, setSpread] = useState(50);

  if (displayOption !== 'shadow') {
    return null;
  }

  return (
    <div>   
      <FormControl>
        <FormLabel id="shadow-sliders-group-label">Set the light source for the shadow:</FormLabel>
        <div className="spacing"></div>
        <AzimuthSlider azimuth={azimuth} setAzimuth={setAzimuth}/>
        <ElevationSlider elevation={elevation} setElevation={setElevation}/>
        <SpreadSlider spread={spread} setSpread={setSpread}/>
      </FormControl>
      <div>
        <Button size="small" variant="contained" onClick={() => {setDropShadowParams(azimuth, elevation, spread)}}>Submit</Button>
      </div>
    </div>
  );
}