import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function Textform(props){
 const handleUpclick=()=>{
 
   let newText = Text.toUpperCase();
   setText(newText);
 }
 const handleLowclick=()=>{

  let newText = Text.toLowerCase();
  setText(newText);
}
const handleClear=()=>{
  let newText = '';
  setText(newText);
}
 
  const handleUpchange=(event)=>{
    console.log("On Chane!!!");
    setText(event.target.value)
    }

  const handleReverse=(event)=>{
    let strArr =Text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText)
  }


const FindVowels = () => {
  for (count = 0; count <= Text.length; count++) {
    if (Text.charAt(count).match(/[aeiouAEIOU]/)) {
      countChar++;
      setCount(countChar);
    }
    
  }
  console.log("No. of Vowels are: " + countChar);
}

 
  const [Text, setText] = useState('Enter Text here!!!');

  //Global declaration:
  let [count, setCount] = useState(0);
  let countChar = 0;

    return (
      <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <div>
      <h1>{props.heading}</h1>
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <textarea className="form-control" value={Text} style={{ backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} onChange={handleUpchange}  id="mybox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Upper!</button>
      <button className="btn btn-success mx-2" onClick={handleLowclick}>Lower!</button>
      <button className="btn btn-danger mx-2" onClick={handleClear}>Clear!</button>
      <button className="btn btn-warning mx-2" onClick={handleReverse}>Reverse!</button>
      <button className="btn btn-danger mx-2" onClick={FindVowels}>Vowels!</button>
      </div> 
      </div>
      <div className='container mb-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text is here</h1>
      <p>{Text.split(" ").length} words and {Text.length} charachters!!!</p>
      <p>{0.008 * Text.split(" ").length} Minutes to read this...</p>
      <h2>Preview...</h2>
      <p>{Text}</p>
      </div>
  </>
    )
}