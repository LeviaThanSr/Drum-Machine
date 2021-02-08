export const DrumBody = (button) => (
  <div
    className="drum-pad rounded border shadow-sm btn btn-primary"
    id="{button.key}"
  >
    {button.innerText}
  </div>
);

export default DrumBody;
