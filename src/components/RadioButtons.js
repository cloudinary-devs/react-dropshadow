import * as React from "react";
import '../App.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PhotoAlbumComponent from './PhotoAlbum';

export default function RadioButtons() {
  const [value, setValue] = React.useState('original');

  const setDisplay = (event) => {
    setValue((event.target).value);

  };

  return (
    <div>
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Choose how you want to display the images:</FormLabel>
        <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={value}
            onChange={setDisplay}
        >
            <FormControlLabel value="original" control={<Radio />} label="Original" />
            <FormControlLabel value="bgremoved" control={<Radio />} label="Background Removed" />
            <FormControlLabel value="shadow" control={<Radio />} label="Drop Shadow" />
        </RadioGroup>
        </FormControl>
        <PhotoAlbumComponent data={value}/>
    </div>
  );
}

