import React, {useState} from 'react'
export default function TextForm(props) {

const handleUpClick = ()=>{
    console.log("UpperCASE was clicked "+ text);
    setText(text.toUpperCase())
    props.showAlert("Converted to uppercase!","success")
}
const handleLoClick = ()=>{
  console.log("LowerCASE was clicked "+ text);
  setText(text.toLowerCase())
  props.showAlert("Converted to lowercase!","success")

}
const handleClearClick = ()=>{
  console.log("Clear text was clicked "+ text);
  setText("")
  props.showAlert("Text was cleared!","success")

}
const handleTrimClick = ()=>{
  console.log("Trim text was clicked "+ text);
  setText(text.trim())
  props.showAlert("text was trimmed!","success")

}
const reversed = () => {
  let splitWord = text.split("");

  let reverseWord = splitWord.reverse("");
  let joinedWords = reverseWord.join("");
  let newText = joinedWords

  setText(newText);
};
const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
}

const[text,setText]=useState('Enter text here');

  return (
    <>
    <div  className="container" style={{color : props.mode === 'light'? 'black':'white'}}>
        <h3>{props.headings}</h3>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'? 'white':'grey', color: props.mode === 'light'?'black':'white' }} rows="8"></textarea>
      </div>
      <button className="btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
      <button className="btn-primary mx-2" onClick={handleTrimClick}>Trim text</button>
      <button className="btn-primary mx-2" onClick={reversed}>Reverse text</button>
    
    <div className="container my-3" >
      <h1>Your text summary</h1>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
    </div>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
