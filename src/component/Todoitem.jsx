import "./Todoitem.css"
export const Todoitem=({todo,handlestatus,deleteitem})=>{
    return <div className="main">
        {/* {todo.title}-{todo.status ? {color:"green"}:"Not Done"} */}
        <h3 style={todo.status ? {color:"green"}:{color:"red"}}>{todo.title}</h3>
     <button  onClick={()=>handlestatus(todo.id)} className={todo.status ? "btntog":"bt2"}>O</button>
    {/* <input onClick={()=>handlestatus(todo.id)} type="checkbox" name="switch" id="switch"/>
    <label htmlFor="switch"></label> */}

    <button className="rembtn" onClick={()=>deleteitem(todo.id)}>remove</button>
    </div> 
}