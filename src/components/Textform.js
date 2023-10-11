import React, {useState} from 'react'
// import PropTypes from 'prop-types'
export default function Textform(props) {
  const [text,setText]=useState('Nut here')
  const [copySuccess,setCopySuccess]=useState(false)
//functions
  const handleUpClick=()=>{
    console.log("upper case was pressed")
    let newText = text.toUpperCase()
    setText(newText)
  }
  const clearScreen=()=>{
    console.log("clear screen was pressed")
    let newText=" "
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
  const copytoclipboard=()=>{
    console.log("copy was pressed")
    const textToCopy = text
    navigator.clipboard.writeText(textToCopy)
    .then(()=>{
      setCopySuccess(true);
      setTimeout(()=>setCopySuccess(false),1500)
    })
      .catch(err => console.error('could not copy text: ',err))
  }

  return (
    <>
<div className='container'>
  <h1>{props.title}</h1>
  <div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="24"></textarea>
  <button className="btn btn-primary my-2" onClick={handleUpClick}>Capitalise</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
  <button className="btn btn-primary " onClick={copytoclipboard}>Copy</button>
  {/* displays the "copied!" text */}
  {copySuccess && <span style={{marginLeft :'10px',color:'green'}}>Copied!</span>} 
  <button className="btn btn-primary mx-2"onClick={clearScreen}>Clear</button>
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