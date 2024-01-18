import React,{useState} from "react";

function Textform(props) {
    const handleonChange=(e)=>{
        setText(e.target.value)
    }
    const handleUpClick=()=>{
        const UPtext= Text.toUpperCase()
        setText(UPtext)
        setuplobtn(!uplobtn)
        props.showalert("! Converted to Uppercase.", 'success');
      }
      const handleLOClick=()=>{
        const Lotext= Text.toLowerCase()
        setText(Lotext)
        setuplobtn(!uplobtn)
        props.showalert("! Converted to Lowercase.", 'success');
      }
      const handleClearText=()=>{
        setText("")
        props.showalert("! Text Cleared Now you can use textform.", 'success');
      }
      const handleCopy=()=>{
        navigator.clipboard.writeText(Text)
        props.showalert("! Text copied to clipboard.", 'success');
      }
      const handleExtraSpace=()=>{
        const newText= Text.split(/[ ]+/) 
        setText(newText.join(" "))
        props.showalert("! Extra spaces are removed.", 'success');
    }
   const[Text, setText] = useState("")
   const[uplobtn, setuplobtn] = useState(true)
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'grey'}}>
      <h1>Enter the text to analyze Below</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={Text}
          onChange={handleonChange}
          rows="8"
          style={{backgroundColor: props.mode==='light'?'white':'#d7dcda'}}
        ></textarea>
      </div>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={uplobtn?handleUpClick:handleLOClick}>{uplobtn?"Convert to Uppercase":"Convert to Lowercase"}</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'black':'grey'}}>
        <h2>Your text Summary</h2>
        <p>{Text.split(/\s+/).filter((item)=>item.length > 0).length} words and  {Text.length} charecters</p>
        <p>{0.008 * Text.split(/\s+/).filter((item)=>item.length > 0).length} Minutes read </p>
        <h2>Preview :</h2>
        <p>{Text.length?Text:"Nothing to Preview! Please enter the text above to preview."}</p>

    </div>
    </>
  );
}

export default Textform;
