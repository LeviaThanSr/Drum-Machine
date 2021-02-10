import React from "react";
import audioArr from "./audioArr";
import DrumPad from "./drumPad";

const DrumMachine = () => (
  <div id="drum-machine" className="container-fluid ">
    <div id="display" className="card bg-info">
      <h3 className="text-center">hi</h3>
      <div className="container drum-pad-body rounded border border-2 border-primary shadow">
        {audioArr.map((i, id) => (
          <DrumPad innerText={i.key} audio={i.url} key={id} />
        ))}
      </div>
    </div>
  </div>
);

export default DrumMachine;
