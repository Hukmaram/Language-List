import React,{useState,useEffect} from "react";
import axios from "axios";
import './App.css';
import LanguageContainer from "./LanguageContainer"

function App() {
  const[languageList,setLanguageList]=useState([]);
  useEffect(()=>{
    axios.get('https://www.mist-one.com/pub/languages')
    .then(response=>{
      console.log(response)
      console.log(response.data.data.rows)
      setLanguageList(response.data.data.rows)
    })
  },[])
  return (
    <React.Fragment>
    <h1 style={{textAlign:'center'}}>Language List</h1>
    <div className="language-container">
        {languageList.map(language=>(
          <LanguageContainer language={language} />
        ))}
    </div>
    </React.Fragment>
  );
}

export default App;
