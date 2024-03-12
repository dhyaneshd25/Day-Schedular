import axios from 'axios';
import React, { useState } from 'react'
import { MdClose} from 'react-icons/md';


const Temp=({val,set,setb,dd})=>{
    const [input,setInput]=useState([]);
    const [input1,setInput1]=useState([]);
    const [input2,setInput2]=useState([]);
  const upd=()=>{
        axios.put(`${dd}/update/${val[1]}`,{toDo:input,From:input1,To:input2}).then((res)=>{console.log("updated");set((s)=>!s);setb(false)})
        .catch((err)=>console.log(err))
    }
const cx=()=>{
    setb((s)=>!s)
}
    return (
      
        <div className='input_holder'>
          <MdClose onClick={cx}id="cs"/>  
        <input text='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Update task....'></input>
         <input text='text' value={input1} onChange={(e)=>setInput1(e.target.value)} placeholder='Update Start Time....'></input>
         <input text='text' value={input2} onChange={(e)=>setInput2(e.target.value)} placeholder='Update to End Time....'></input>
         <button id="bu" onClick={upd}>Update</button>
        </div>
    )
}

export default Temp;