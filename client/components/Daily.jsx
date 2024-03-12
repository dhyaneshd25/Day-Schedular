import React, { forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import Todo from "./todo";

import Temp from "./temp";
import { useState,useEffect } from "react";


const Daily= ({da,sg,sd,val})=>{
 
const [todos,setTodo]=useState([])
const [input,setInput]=useState("")
const [input1,setInput1]=useState("")
const [input2,setInput2]=useState("")
const [updated,setupdated]=useState(false)
const [showb,setshowb]=useState(false)
const [getval,setgetval]=useState([])

useEffect(()=>{
  axios.get(`${da}/get`).then((res)=>{
    setTodo(res.data)
  }).catch((err)=>[
    console.log(err)
  ])
},[updated]); 

const saveTodo= ()=>{
  axios.post(`${da}/save`,{toDo:input,From:input1,To:input2})
  .then((res)=>{console.log(res.data);setInput("");setInput1("");sg(true);setInput2("");setupdated((prevState)=>!prevState)})
  .catch((err)=>console.log(err))

}



  return (
   
    <div className="container"> 
   <div className='input_holder'>
     <input text='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add Task....'></input>
      <input text='text' value={input1} onChange={(e)=>setInput1(e.target.value)} placeholder='Add Start Time including am or pm....'></input>
      <input text='text' value={input2} onChange={(e)=>setInput2(e.target.value)} placeholder='Add End Time including am or pm....'></input>
      <button onClick={saveTodo}>Add</button>
      </div>
  <table id="tsd">
  <thead><tr><th>Task</th><th>Start Time</th><th>End Time</th></tr></thead>
    <tbody>
{
 //todos.map(el=><div key={el._id}>{el.toDo} <div onclick={deT(el._id)}>x</div></div>)
 todos.map(el=> <Todo  key={el._id} text={el.toDo} sat={el.From} et={el.To} id={el._id} setupdate={setupdated} sh={setshowb} st={setgetval} d={da} sb={sd} v={val}/>)

}
</tbody>
</table>

{showb && <Temp val={getval} set={setupdated} setb={setshowb} dd={da}/>}


</div>
  );
  

}


export default Daily;