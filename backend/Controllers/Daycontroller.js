const m=require("../Models/Model")
const gp=require("../Models/SavP")


module.exports.savepdf= async(req,res)=>{
 try{   const {pdfdata}=req.body
    const g=new gp({
        pdfdata:Buffer.from(pdfdata,'base64')
    })
    await g.save();
    console.log("pdf saved.....")
    res.status(200).json({message:"pdf saved"})

}catch(err){
    res.status(500).json({message:"pdf unsaved"})
}
}
module.exports.getToDos= async(req,res)=>{
    const getDos=  await m.find()
    res.send(getDos)
}

module.exports.getSave=(req,res)=>{
    const { toDo ,From ,To }= req.body
   
m.create( { toDo ,From ,To })
.then((data)=>{
   console.log("saved successfully......")
   res.status(201).send(data)})
.catch(err=>{
    console.log(err)
})
}

module.exports.getUpdate=(req,res)=>{
    const { id}=req.params
    const { toDo ,From,To}= req.body   // sechema name should be same
    m.findByIdAndUpdate( id,{ toDo ,From ,To })
    .then(()=>{
       res.send("Update Successfully....")
       console.log("Update Successfully....");})
    .catch(err=>{
        console.log(err)
        res.send({error:err,msg:"Something went wrong"})
    })  

}

module.exports.getdelete=(req,res)=>{
    const { id  }=req.params

    m.findByIdAndDelete( id)
    .then(()=>{
       res.send("Delete Successfully....");
    console.log("Delete Successfully....");})
    .catch(err=>{
        console.log(err)
        res.send({error:err,msg:"Something went wrong"})
    })  

}



