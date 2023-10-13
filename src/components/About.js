import React,{useState} from 'react'

export default function About() {

const[darkmode,setDark]=useState({

  color: 'white',
  backgroundColor : 'black'
})

const [btnTxt, setbtnTxt] = useState("Enable dark mode")

const toggleDark=()=>{
  if(darkmode.color==='white'){
      setDark({

        color: 'black',
        backgroundColor:'white',
        border:'1px solid white'
    


      })
      setbtnTxt("Enable dark mode")
  }
  else{
    setDark({
      color: 'white',
      backgroundColor:'black'
    })

    setbtnTxt("Enable light mode")
  }
}
  return (
    <div className='container' style={darkmode}>
      <h1>About them nut</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={darkmode}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={darkmode}>
      <div className="accordion-body" style={darkmode}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

    </div>
    <div className="container" style={darkmode}>
    <button type="button" onClick={toggleDark} className="btn btn-dark my-2">{btnTxt}</button>
    </div>
  </div>


















  )
}
