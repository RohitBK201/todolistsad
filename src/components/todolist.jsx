import { useState } from "react";

export const Todoinp = ({getdata}) =>{


    const [text,settext] = useState();

    return(
        <div>
            <input 

            onChange={(e)=>{

               settext(e.target.value)

            }}

            type="text" placeholder="Enter Text" /> 
            
            <button
            
            onClick={
                ()=>{

                    getdata(text)

                }
            }

            >Add todo</button>

        </div>
    );

}