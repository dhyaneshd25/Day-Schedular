import React, { useEffect } from "react";
import Daily from "../components/Daily";
import { u ,uu} from "../utils/constant";;
import { useState } from "react";

import jsPDF from "jspdf";
import 'jspdf-autotable'

const  App =  ()  =>{
const [ds,setds]=useState(false)
const [ws,setws]=useState(false)
const [vis,setvis]=useState(false)
const [dall,setdall]=useState(false)
const [wrt,setwrt]=useState("")
const [hd,sethd]=useState("")
const [scroll,setscroll]=useState(0)
const [datah,setdatah]=useState(["Every day is a new opportunity to compose the  symphony of your life. Plan, organize, and conquer your day with Daily Rhythm, your ultimate day scheduler"]);
const dsfun=()=>{
   setds((st)=>!st)
   setws(false)
}


const dpu1=()=>{
const pdf=new jsPDF({orientation:'landscape'});

const header=document.querySelector("#tsd")

setdall((s)=>!s)

setws((s)=>!s)
pdf.autoTable({
 html:header
})


const fname='Daily_Rhythm.pdf';

pdf.save(fname);
/*
//for saving pdf in db
const d=pdf.output('datauristring').split(',')[1];
axios.post(`${uu}/save-pdf`,{pdfdata:d})
*/
}
const [position, setPosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (event) => {
  setPosition({ x: event.clientX, y: event.clientY });
};

useEffect(()=>{
const st=setTimeout(() => {
  const cir=document.querySelector("#b").style="background-color:rgb(34, 255, 0);" 
  const ci=document.querySelector("#circle").style=`animation:ca2;
  animation-duration:2s;animation-iteration-count:infinite`;
  setwrt("Let Started")
}, 3000);
},[])
const disc=()=>{
   const c=document.querySelector("#circle").style=`animation:ca3;
   animation-duration:2s;animation-iteration-count:1`
   setwrt("")
   setdatah("")
   setds(true)
   setTimeout(()=>{const cir=document.querySelector("#b").style="background-color:black;" 
   setvis(true)},2000)
}

useEffect(()=>{
   const h=()=>{
      setscroll(window.scrollY)
   }
   window.addEventListener("scroll",h);

},[])

 return(
   <div id="c1" onMouseMove={handleMouseMove}>
     


   <div onClick={disc} id="circle">{wrt}</div>

   { vis &&  <> <h1 className="logo" style={{right:`${scroll+10}%`}}> Daily Rhythm</h1>

       { ds && <Daily da={u} sg={setws} sd={setdall} val={dall}/>}
       {ws && <button id="genp" onClick={dpu1}>Generate Pdf</button> 
}</>
   }



<div id="textcontainer">
<p>{datah}</p></div>

 </div>
 )

};
export default App;