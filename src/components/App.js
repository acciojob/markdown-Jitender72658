import React,{useState} from "react";

const App = ()=>{
    const[content, setContent] = useState("");

    function modifyPreview(e){
         const newContent = e.target.value;
         setContent(newContent);
    }
    return ( 
        <div className="app">
           <div className="preview"><textarea onChange={modifyPreview} placeholder="Hello" >{content}</textarea></div>
           <div className="loading"><textarea  onChange={modifyPreview} value={content}></textarea></div>
        </div>
    )
}

export default App;