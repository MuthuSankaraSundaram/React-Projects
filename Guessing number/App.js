import './App.css';
import {useState} from "react";
import Result from './components/Result';

const secnum=Math.floor(Math.random() * 10)+1;

function App() {

  const[term,setTerm]=useState("");

  function handleChange(e) {
    setTerm(e.target.value)
  }
  
  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess the number between 1 to 10   (answer:{secnum})
          <input 
            id="term"
            type="text" 
            name="term"
            onChange={handleChange}
          />
        </label>
        <Result secnum={secnum} term={term}/>
      </div>
      
    </div>
  );
}

export default App;
