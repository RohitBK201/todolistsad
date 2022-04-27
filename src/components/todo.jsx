import { nanoid } from "nanoid";
import { useState } from "react";
import { Todoitm } from "./todoitm";
import { Todoinp } from "./todolist";

export const Todo = () =>{


    const [todolist,setTodolist] = useState([]);

    const getdata = (todo) =>{

        const payload = {

            
            title : todo,
            status : false,
            id: nanoid(5)

        }


        setTodolist([...todolist,payload])

    }

    const handlestatus = (id) =>{

        
        setTodolist(todolist.map(e =>e.id===id?{...e, status : !e.status} : e))

    } 


    return(
        <div>

            <Todoinp getdata={getdata}/>

            {todolist.map((e)=>(

                <Todoitm key={e.id} todo={e}  handlestatus={handlestatus}/>

            ))}


        </div>
    );

}