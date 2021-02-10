import React from "react";
import audioArr from "./audioArr";
import DrumPad from "./drumPad";

//Starting layout using Bootstrap
const DrumMachine = () => (
  <div id="drum-machine" className="container-fluid ">
    <div id="display" className="card">
      {/* display the name of the audio that is currently playing  */}
      <h3 className="text-center card-header py-3">hi</h3>
      {/* Creating the drum machine body */}
      <div className="container card-body shadow">
        {/* Generating each drum pad based on the audioArr */}
        {audioArr.map((i, id) => (
          <DrumPad innerText={i.key} fileName={i.name} audio={i.url} key={id} />
        ))}
      </div>
    </div>
  </div>
);

export default DrumMachine;
