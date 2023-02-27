import React from "react";

function Keyboard() {
  return (
    <div>
      <div className="line1">
        <div className="kcel">
          <p>Q</p>
        </div>
        <div className="kcel">
          <p>W</p>
        </div>
        <div className="kcel">
          <p>E</p>
        </div>
        <div className="kcel">
          <p>R</p>
        </div>
        <div className="kcel">
          <p>T</p>
        </div>
        <div className="kcel">
          <p>Y</p>
        </div>
        <div className="kcel">
          <p>U</p>
        </div>
        <div className="kcel">
          <p>I</p>
        </div>
        <div className="kcel">
          <p>O</p>
        </div>
        <div className="kcel correct">
          <p>P</p>
        </div>
      </div>
      <div className="line2">
        <div className="kcel">A</div>
        <div className="kcel">S</div>
        <div className="kcel">D</div>
        <div className="kcel">F</div>
        <div className="kcel">G</div>
        <div className="kcel">H</div>
        <div className="kcel">J</div>
        <div className="kcel">K</div>
        <div className="kcel">L</div>
      </div>
      <div className="line3">
        <div className="kcel">Z</div>
        <div className="kcel">X</div>
        <div className="kcel">C</div>
        <div className="kcel">V</div>
        <div className="kcel">B</div>
        <div className="kcel misplaced">N</div>
        <div className="kcel">M</div>
      </div>
    </div>
  );
}

export default Keyboard;
