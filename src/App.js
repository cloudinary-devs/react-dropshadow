import './App.css';
import { useState } from 'react';
import DropShadowOptions from "./components/DropShadowOptions";
import PhotoAlbumComponent from './components/PhotoAlbum';
import RadioButtons from './components/RadioButtons';
import ProductSelection from './components/ProductSelection';

const App = () => {

  const [productOption, setProductOption] = useState('furniture');
  const [displayOption, setDisplayOption] = useState('original');
  const [az, setAzimuth] = useState(215);
  const [el, setElevation] = useState(45);
  const [spr, setSpread] = useState(50);

  function setDropShadowParams (az, el, spr) {
    setAzimuth(az);
    setElevation(el);
    setSpread(spr);
  }
  

  return (
    <div className="App-body">
      <h1>Background Removal & Drop Shadow</h1>
      <ProductSelection productOption={productOption} onProductOptionChange={setProductOption}/>
      <RadioButtons displayOption={displayOption} onDisplayOptionChange={setDisplayOption}/>

      <DropShadowOptions displayOption={displayOption} setDropShadowParams={setDropShadowParams}/>
      <div>&nbsp;</div>

      <PhotoAlbumComponent data={{productOption: productOption, displayOption: displayOption, az: az, el: el, spr: spr}}/>

    </div>
  )

};

export default App;
