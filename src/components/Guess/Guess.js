import React from "react";

function Guess({
  inputWord,
  answer,
  win,
  setWin,
  setLose,
  NUM_OF_GUESSES_ALLOWED,
}) {
  const [btnDisabled, setBtnDisabled] = React.useState(false);
  const [counte, setCounte] = React.useState(0);
  const [text, setText] = React.useState("");
  function submitHandler(e) {
    e.preventDefault();
    const newCounte = counte + 1;
    if (text.length !== 5) {
      return null;
    } else {
      inputWord(text, counte);
      console.log("Word: ", text);

      if (text === answer) {
        setBtnDisabled(true);
        setWin(true);
        setText("");
      } else if (text !== answer && newCounte >= NUM_OF_GUESSES_ALLOWED) {
        setText("");
        setBtnDisabled(true);
        setLose(true);
        setCounte(newCounte);
      } else {
        setCounte(newCounte);
        console.log("counts", counte);
        setText("");
      }
    }
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={submitHandler}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={btnDisabled}
          id="guess-input"
          type="text"
          min={5}
          max={5}
          value={text}
          onChange={(e) => {
            const toUp = e.target.value.toUpperCase();
            setText(toUp);
          }}
        />
      </form>
    </>
  );
}

export default Guess;
