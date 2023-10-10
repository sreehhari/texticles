import React, {useState} from 'react'
// import PropTypes from 'prop-types'
export default function Textform(props) {
  const [text,setText]=useState('Nut here')
  //capitalise button
  const handleUpClick=()=>{
    console.log("upper case was pressed")
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleOnChange=(event)=>{
    console.log("On Change")
    setText(event.target.value)
  }
  const handleLowClick=()=>{
    console.log("lower case button was pressed")
    let newText = text.toLowerCase()
    setText(newText)
  }

  return (
    <>
<div className='container'>
  <h1>{props.title}</h1>
  <div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="24"></textarea>
  <button className="btn btn-primary my-2" onClick={handleUpClick}>Capitalise</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
    </div>
 </div>
 <div className="container">
  <h2>Your text summary</h2>
  <p>You have {(text.split(" ").length)-1} words and {text.length} characters in the inputed text</p>
  <p>Its gonna take you {0.008*((text.split(" ").length)-1)} minutes to read</p>
  <h2>Preview</h2>
  <p>{text}</p> 
 </div>
 </>
  )
}
// Textform.PropTypes={
//     title:PropTypes.string.isRequired
// }