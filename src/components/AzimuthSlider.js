import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const marks = [
  {
    value: 0,
    label: '0°',
  },
  {
    value: 45,
    label: '45°',
  },
  {
    value: 90,
    label: '90°',
  },
  {
    value: 135,
    label: '135°',
  },
  {
    value: 180,
    label: '180°',
  },
  {
    value: 225,
    label: '225°',
  },
  {
    value: 270,
    label: '270°',
  },
  {
    value: 315,
    label: '315°',
  },
  {
    value: 360,
    label: '360°',
  },
];

function valuetext(value) {
  return `${value}°`;
}

export default function AzimuthSlider({azimuth, setAzimuth}) {

const handleChange = (event, newValue) => {
    setAzimuth(newValue);
};

  return (
    <Box sx={{ width: 500 }}>
      <Typography id="input-slider"  align="left">
        Azimuth
      </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={azimuth}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        max={360} 
        valueLabelDisplay="on"
        onChange={handleChange}
      />
    </Box>
  );
}