import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = ('');
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("text copied");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange = (event) => {
    // console.log("On Change ");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("new text");
  return (
    <>
      <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlfor="myBox" class="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnChange}
            style={{ backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black' }} id="myBox" rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to lowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'grey' : 'black' }}>
        <h2>Your text summary </h2>
        <p>{text.split(" ").length} words and {text.length}  characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box  to preview it here"}</p>

      </div>
    </>
  );
}
