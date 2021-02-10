import React, { Component } from "react";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.handlePlay = this.handlePlay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handlePlay() {
    this.audio.current.play();
  }
  handleKeyPress(event) {
    const currentSound = event.key.toUpperCase();
    const audio = document.getElementById(currentSound);
    audio.play();
  }

  render() {
    document.addEventListener("keydown", this.handleKeyPress);
    return (
      <div
        className="drum-pad rounded border shadow-sm btn btn-primary"
        id={this.props.innerText + "-pad"}
        onClick={this.handlePlay}
      >
        {this.props.innerText}
        <audio
          ref={this.audio}
          src={this.props.audio}
          id={this.props.innerText}
          className="clip"
        />
      </div>
    );
  }
}

export default DrumPad;
