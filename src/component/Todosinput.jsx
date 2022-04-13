import"./input.css"
import {useState}from"react"
export const Todosinput=({ getdata })=>{
    const [text,setText]=useState("");
    return (
        <div>
        <input className="datainp" onChange={(e)=>{
            setText(e.target.value)
           
        }} type="text" placeholder="Enter title"/>
        <button className="add" onClick={()=>{
            getdata(text);
        }}>+</button>
        </div>
    )
}