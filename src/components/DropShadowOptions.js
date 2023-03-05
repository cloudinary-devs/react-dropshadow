import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import AzimuthSlider from './AzimuthSlider';
import ElevationSlider from './ElevationSlider';
import SpreadSlider from './SpreadShadow';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';


export default function DropShadowOptions({setDropShadowParams}) {

  const [azimuth, setAzimuth] = useState(215);
  const [elevation, setElevation] = useState(45);
  const [spread, setSpread] = useState(50);

  return (
    <div>   
    <FormControl>
    <FormLabel id="shadow-sliders-group-label">Set the light source for your shadow:</FormLabel>
    <AzimuthSlider setAzimuth={setAzimuth}/>
    <ElevationSlider setElevation={setElevation}/>
    <SpreadSlider setSpread={setSpread}/>
    </FormControl>
    <div>

    <Button size="small" variant="contained" onClick={() => {setDropShadowParams(azimuth, elevation, spread)}}>Submit</Button>
    </div>
    </div>
  );
}