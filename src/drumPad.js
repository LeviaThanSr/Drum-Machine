export const DrumPad = (props) => {
  const { innerText, audio, handleClick } = props;
  return (
    <div
      className="drum-pad btn rounded shadow-sm btn btn-primary"
      id={innerText + "-pad"}
      onClick={handleClick}
    >
      {innerText}
      <audio src={audio} type="audio/mp3" id={innerText} className="clip" />
    </div>
  );
};

export default DrumPad;
