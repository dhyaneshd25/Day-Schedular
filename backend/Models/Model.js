const mongo=require("mongoose")
 const gM= new mongo.Schema({
    toDo:{
         
        type: String ,
        required :true,  
        
    },
    From:{
        type:String,
        required:true,
    },
    To:{
        type:String,
        required:true
    },
    
 })





const m=mongo.model("Dailytimetable",gM);
module.exports=m
