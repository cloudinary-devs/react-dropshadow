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
    value: 15,
    label: '15°',
  },

  {
    value: 30,
    label: '30°',
  },
  {
    value: 45,
    label: '45°',
  },
  {
    value: 60,
    label: '60°',
  },

  {
    value: 75,
    label: '75°',
  },
  {
    value: 90,
    label: '90°',
  },
];

function valuetext(value) {
  return `${value}°`;
}

export default function ElevationSlider({elevation, setElevation}) {

const handleChange = (event, newValue) => {
    setElevation(newValue);
};

  return (
    <Box sx={{ width: 500 }}>
      <Typography id="input-slider"  align="left">
        Elevation
      </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={elevation}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        max={90} 
        valueLabelDisplay="on"
        onChange={handleChange}
      />
    </Box>
  );
}