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

  return (
<div>
  <h1>{props.title}</h1>
  <div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="24"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Capitalise</button>
    </div>
 </div>
  )
}
// Textform.PropTypes={
//     title:PropTypes.string.isRequired
// }