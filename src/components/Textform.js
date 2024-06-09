import React, { useState } from "react";

export default function Textform(props) {
  //   state //with default usestate() //
  const [text, setText] = useState("Enter Your Text Here.....");
  //  this state for text area
  const [isCleared, setIsCleared] = useState(false);
  //to handle uppercase//
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  //to handle lowercase//
  const handleDownClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Converted to LowerCase", "success");
  };

  //to handle clear//
  const handleClearClick = () => {
    let newText2 = " ";
    setText(newText2);
    props.showAlert("Text Cleared !", "success");
  };
  //to handle change in box//
  const handleOnChange = (e) => {
    // to change  current text in an box //
    setText(e.target.value);
  };

  //copy the text//
  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied !", "success");
  };

  //for capitalize make first character upper
  const capitalize = (text) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  //for capitalize make first character upper
  const capitalizeText = () => {
    const inputElement = document.getElementById("exampleFormControlTextarea1");
    const userInput = inputElement.value;
    const capitalizedText = capitalize(userInput);
    inputElement.value = capitalizedText;
  };
  // for text area empty  on click first time
  const emptyArea = () => {
    if (!isCleared) {
      setText(""); // Clear the textarea
      setIsCleared(true); // Update state to indicate it has been cleared
    }
  };

  return (
    <>
      <div className=" container my-4  ">
        <h1
          className="mb-4"
          style={{
            color: props.mode === "#042743" ? "white" : "black",
          }} //javascript for {} again {} for object
        >
          {" "}
          <span
            style={{
              borderBottomColor: props.mode === "#042743" ? "white" : "black",
            }}
          >
            <b>
              <span
                style={{
                  borderBottomColor:
                    props.mode === "#042743" ? "white" : "black",
                }}
              >
                TEXTCNVRT
              </span>
            </b>{" "}
            - ENTER YOUR TEXT HERE TO ANALYZE
          </span>
        </h1>
        <div>
          <div className="mb-3 ">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              onClick={emptyArea}
              rows={8}
              value={text} //current text
              onChange={handleOnChange}
              // object h ye
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#13466e",
                color: props.mode === "#042743" ? "white" : "black",
              }}
              //javascript for {} again {} for object
            />
          </div>
          <div className="con mt-4">
            <button
              disabled={text.length === 0}
              className=" btn btn-dark "
              onClick={handleUpClick}
            >
              CONVERT TO UPPER CASE
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-dark one  mx-5"
              onClick={handleDownClick}
            >
              CONVERT TO LOWER CASE
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-dark one  mx-2"
              onClick={handleClearClick}
            >
              CLEAR ALL TEXT
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-dark one  mx-5"
              onClick={handleCopy}
            >
              COPY ALL TEXT
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-dark one  mx-3"
              onClick={capitalizeText}
            >
              CAPITALIZE TEXT
            </button>
          </div>
        </div>
        <div
          className="container mt-4 "
          style={{ color: props.mode === "#042743" ? "white" : "black" }} //javascript for {} again {} for object
        >
          <h2>
            <span
              style={{
                borderBottomColor: props.mode === "#042743" ? "white" : "black",
              }}
            >
              Your Text Summary
            </span>
          </h2>
          <p className="ch fs-5">
            {
              text.split(/\s+/).filter((element) => {
                return element.length != 0;
              }).length
            }{" "}
            <b>Words </b> and {text.length} <b>Characters</b>
          </p>
        </div>
        <div
          className="pre"
          style={{ color: props.mode === "#042743" ? "white" : "black" }} //javascript for {} again {} for object
        >
          <h2
            style={{
              borderBottomColor: props.mode === "#042743" ? "white" : "black",
              // borderBottomStyle: "solid",
              // borderBottomWidth: "2px",
            }}
          >
            Preview
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
