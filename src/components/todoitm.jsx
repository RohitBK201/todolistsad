export const Todoitm = ({todo,handlestatus})=>{


    return(

        <div>
            
            
        {todo.title}-{todo.status ? "Done" : "Not Done"}
        
        
         <button

         onClick={()=>{

            handlestatus(todo.id)

            
         }}
        
        >toggle</button></div>

    );
}