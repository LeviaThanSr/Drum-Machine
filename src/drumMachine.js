import React, { Component } from "react";
import AudioFileArr from "./audioFileArr";
import DrumPad from "./drumPad";
import AudioNameArr from "./audioNameArr";

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioKey: "",
    };
    this.updateOnClick = this.updateOnClick.bind(this);
    this.updateOnKeyPress = this.updateOnKeyPress.bind(this);
    this.handlePlayAudio = this.handlePlayAudio.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.updateOnKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.updateOnKeyPress);
  }
  updateOnClick(e) {
    this.setState({
      audioKey: e.target.children[0].id,
    });
  }
  updateOnKeyPress(e) {
    const keyPressed = e.key.toUpperCase();
    const keys = AudioFileArr.map((i) => i.key);
    this.setState({
      audioKey: keys.includes(keyPressed) ? keyPressed : "",
    });
  }
  handlePlayAudio() {
    const audio = document.getElementById(this.state.audioKey);
    audio.currentTime = 0;
    audio.play();
  }
  render() {
    var display = "It's All Yours";
    if (this.state.audioKey !== "") {
      display = `${AudioNameArr[this.state.audioKey]}`;
      this.handlePlayAudio();
    }
    return (
      <div id="drum-machine" className="container-fluid card shadow">
        <div id="display" className="card rounded">
          <h2 className="text-center card-header py-3" id="text">
            {display}
          </h2>
          <div className="container card-body shadow">
            {AudioFileArr.map((i, id) => (
              <DrumPad
                innerText={i.key}
                audio={i.url}
                key={id}
                handleClick={this.updateOnClick}
              />
            ))}
          </div>
          <div className="card-footer text-center d-flex justify-content-between">
            <div className=" btn btn-danger btn-block w-59">
              <a
                href="https://www.freecodecamp.org/leviathansr"
                target="_blank"
                rel="noreferrer"
              >
                LeviaThanSr
              </a>
            </div>
            <div className=" btn btn-block btn-success">
              <a
                href="https://github.com/LeviaThanSr"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
