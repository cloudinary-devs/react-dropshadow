import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 20,
    label: '20%',
  },

  {
    value: 40,
    label: '40%',
  },
  {
    value: 60,
    label: '60%',
  },
  {
    value: 80,
    label: '80%',
  },

  {
    value: 100,
    label: '100%',
  },
];

function valuetext(value) {
  return `${value}%`;
}



export default function SpreadSlider({spread, setSpread}) {

const handleChange = (event, newValue) => {
    setSpread(newValue);
};

  return (
    <Box sx={{ width: 500 }}>
      <Typography id="input-slider"  align="left">
        Spread
      </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={spread}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        max={100} 
        valueLabelDisplay="on"
        onChange={handleChange}
      />
    </Box>
  );
}