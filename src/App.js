import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] =  useState('light');
  const [alert, setAlert] =  useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#1e3459';
      showAlert("Dark mode has been enabled", "success")
      document.title="TextUtils-DarkMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
      document.title= "TextUtils-LightMode"
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container">
    {/* <Routes> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route path="/"> */}
          <TextForm headings="Enter the text to analyse:" showAlert={showAlert} mode={mode}/> 
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm headings="Enter the text to analyse:" showAlert={showAlert} mode={mode}/>} /> */}
    {/* </Routes> */}
    {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
