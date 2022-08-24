import React from "react";
import Wave from 'react-wavify';

import "./App.css"

function Waves() {
  return (
    <>
    <div id = "wave">
    <Wave fill="url(#gradient)" options={{speed: 0.5}}>
    <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%" stopColor="white" />
      <stop offset="90%" stopColor="blue" />
    </linearGradient>

        </defs>
    </Wave>
    </div>
    </>
  )
}

export default Waves;