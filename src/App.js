import logo from './logo.svg';
import './App.css';
import {Todo}from"./component/Todo"
function App() {
 // const food="pizza";
  //const age=54;
//  const skills=["mern" ,"bloging","swiming","hacking"];
const getData=(data)=>{
  console.log("gotdata",data)
}
  return (
  <div className='App'>
     <Todo/>
  </div>
  );
}


export default App;
