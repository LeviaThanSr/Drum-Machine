import React, { Component } from "react";
class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.audioTrigger = React.createRef();
    this.handlePlay = this.handlePlay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Creating handlePlay function
  handlePlay() {
    this.audioTrigger.current.play();
  }
  // Creating handleKeyPress function
  handleKeyPress(e) {
    const audio = document.getElementById(e.key.toUpperCase());
    audio.play();
  }
  render() {
    // Destructuring props
    const { innerText, audio } = this.props;
    // Trigger audio on keyPress
    document.addEventListener("keydown", this.handleKeyPress);
    return (
      // Adding style and functionality to each drum pad
      <div
        className="drum-pad rounded border shadow-sm btn btn-primary"
        id={innerText + "-pad"}
        onClick={this.handlePlay}
      >
        {/* Drum pad inner text */}
        {innerText}
        {/* Drum pad audio */}
        <audio
          ref={this.audioTrigger}
          src={audio}
          id={innerText}
          className="clip"
        />
      </div>
    );
  }
}

export default DrumPad;
