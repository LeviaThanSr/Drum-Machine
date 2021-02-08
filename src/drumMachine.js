import React, { Component } from "react";
import DrumBody from "./drumBody";

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
    };
  }
  render() {
    const { buttons } = this.state;
    return (
      <div className="container" id="drum-machine">
        <div
          id="display"
          className="drum-pad-body rounded border border-2 border-primary shadow"
        >
          {buttons.map((key, id) => (
            <DrumBody innerText={key} key={"drum-" + id} />
          ))}
        </div>
      </div>
    );
  }
}

export default DrumMachine;
