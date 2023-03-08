import * as React from "react";
import '../App.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ProductSelection({productOption, onProductOptionChange}) {

  const setProduct = (event) => {
    onProductOptionChange(event.target.value);
  };

  return (
    <div>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Choose a set of product images:</FormLabel>
          <RadioGroup
              row
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
              value={productOption}
              onChange={setProduct}>
              <FormControlLabel value="furniture" control={<Radio />} label="Furniture" />
              <FormControlLabel value="chairs" control={<Radio />} label="Chairs" />
              <FormControlLabel value="cars" control={<Radio />} label="Cars" />
          </RadioGroup>
        </FormControl>
    </div>
  );
}

