import React from 'react';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useEffect } from 'react';


 const Todo = ({ text,sat, et, id , setupdate, sh,st,d,sb,v})=>{
    const deleteToDO=()=>{
        axios.delete(`${d}/delete/${id}`).then((res)=>{
          console.log(res.data);
        }) 
        setupdate((s)=>!s)
      };
      const ok=()=>{
        st([text,id])
        sh((s)=>!s)
      }
      useEffect(()=>{
     if(v){
      axios.delete(`${d}/delete/${id}`).then((res)=>{
        setupdate((s)=>!s)
        sb(false)

      })
 
     }
      })
    return (
       <tr><td><p>{text}</p></td><td> {sat} </td> <td>{et}</td><MdEdit onClick={ok} /><MdDelete onClick={deleteToDO}/></tr> 
    );
 };




 export default Todo;