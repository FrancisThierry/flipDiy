//This component renders the model-viewer tool from the google library using the glb file stored in the assets folder and passed as a prop to the component. 

import {useState, useRef} from 'react';
import  blackHeart from "../assets/heart.svg?component";
import  redHeart from "../assets/heart_red.svg?component";

export default function ModelViewer({glbAddress}){
  
  const [heartIcon, setHeartIcon] = useState(blackHeart)
  const modelRef = useRef();

  const doubleTapHandler = () => {
    if(event.detail == 2){
			handleHeartClick()
		}
  }

  const handleHeartClick = () => {
    if(heartIcon === blackHeart) setHeartIcon(redHeart);
    else setHeartIcon(blackHeart);
  };

  return (
    <>
      <main>
        <model-viewer
          onClick={doubleTapHandler} 
          ref={modelRef}
          src= {glbAddress}
          poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
          alt="Reuse Milk Bottle"
          shadow-intensity="1"
          camera-controls
          auto-rotate ar
          >
          </model-viewer>
    </main>
    </>
  )
}