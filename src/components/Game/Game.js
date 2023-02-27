import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
console.info("Number of guesses allowed: ", NUM_OF_GUESSES_ALLOWED);

function Game() {
  const [count, setCount] = React.useState(0);
  const [win, setWin] = React.useState(false);
  const [lose, setLose] = React.useState(false);
  const initialValue = range(0, NUM_OF_GUESSES_ALLOWED).map((number) => {
    return {
      text: "",
      place: number,
      key: crypto.randomUUID(),
      stat: [
        { letter: "first", status: "NaN" },
        { letter: "second", status: "NaN" },
        { letter: "third", status: "NaN" },
        { letter: "fourth", status: "NaN" },
        { letter: "fifth", status: "NaN" },
      ],
    };
  });
  const [guess, setGuess] = React.useState([...initialValue]);

  const inputWord = (word, number) => {
    const newCount = count + 1;
    setCount(newCount);
    const cellStatus = checkGuess(word, answer);
    const newArray = guess.map((item) => {
      if (item.place === number) {
        item.text = word;
        item.stat = cellStatus;
        return item;
      } else {
        return item;
      }
    });
    setGuess(newArray);
    console.log(newArray);
    console.log("Count ", { newCount });
  };

  return (
    <>
      <div className="guess-results">
        {!!guess &&
          guess.map(({ text, key, stat }) => {
            return (
              <p key={key} className="guess">
                <span className={`cell ${stat[0].status}`}>{text[0]}</span>
                <span className={`cell ${stat[1].status}`}>{text[1]}</span>
                <span className={`cell ${stat[2].status}`}>{text[2]}</span>
                <span className={`cell ${stat[3].status}`}>{text[3]}</span>
                <span className={`cell ${stat[4].status}`}>{text[4]}</span>
              </p>
            );
          })}
      </div>
      <Guess
        inputWord={inputWord}
        answer={answer}
        win={win}
        setWin={setWin}
        setLose={setLose}
        NUM_OF_GUESSES_ALLOWED={NUM_OF_GUESSES_ALLOWED}
      />
      <Keyboard />
      {win && count <= NUM_OF_GUESSES_ALLOWED && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{count} guesses</strong>.
          </p>
        </div>
      )}

      {lose && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
