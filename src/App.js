import React from "react";
import './index.css';


const SlotM = (props) => {
    // let x = '😻' ; 
    // let y = '😻'; 
    // let z = '😻'; 
    
    if ( (props.x===props.y) && (props.x===props.z) ){
        return(
            <>
                <div className="slot_inner">
                    <h1>
                        {props.x} {props.y} {props.z}
                    </h1>
                    <h1>This is Matching. </h1>
                    <hr/>
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className="slot_inner">
                    <h1>
                    {props.x} {props.y} {props.z}
                    </h1>
                    <h1>This is not Matching. </h1>
                    <hr/>
                </div>
            </>
        );
    }
}



const App = () =>{
    return (
        <>
          <h1 className="heading_style"> &#128187; Welcome to
              <span style={{fontWeight : "bold"}}> SLOT MACHINE GAME </span>
               &#128187;
          </h1>
         <div className="slotMachine">
         <SlotM  x= '😄' y= '😄' z= '😄'/>
         <hr/>
         <SlotM  x= '😄' y= '😍' z= '😄'/>
         <hr/>
         <SlotM  x= '🏏' y= '⚾' z= '🏏'/>
         <hr/>
         <SlotM  x= '💑' y= '💑' z= '💑'/>
        
         </div>
        </>
    )
    
};


export default App;