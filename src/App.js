// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark') ;
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'White';

    }
  } 
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter the text to alalysis" />
      </div>
    </>
  );
}

export default App;
