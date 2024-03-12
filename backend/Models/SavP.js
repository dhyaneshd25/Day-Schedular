const mongo=require("mongoose")
 const gpp= new mongo.Schema({
   pdfdata:Buffer,
    
 })





const gp=mongo.model("CreatedPdf",gpp);
module.exports=gp
