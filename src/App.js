// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
   <>   
<Navbar title="texticles" AboutTexticles="About" mode={mode} toggleMode={toggleMode}/> 
<div className="container">
<Textform title="Enter you text here"/>
{/* <About/> */}
</div>
   
   
   
   </>
  );
}

export default App;
