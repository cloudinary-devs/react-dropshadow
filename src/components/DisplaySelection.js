import * as React from "react";
import '../App.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function DisplaySelection({displayOption, onDisplayOptionChange}) {

  const setDisplay = (event) => {
    onDisplayOptionChange(event.target.value);
  };

  return (
    <div>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Choose how you want to display the images:</FormLabel>
          <RadioGroup
              row
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
              value={displayOption}
              onChange={setDisplay}>
              <FormControlLabel value="original" control={<Radio />} label="Original" />
              <FormControlLabel value="bgremoved" control={<Radio />} label="Background Removed" />
              <FormControlLabel value="shadow" control={<Radio />} label="Drop Shadow" />
          </RadioGroup>
        </FormControl>
    </div>
  );
}

