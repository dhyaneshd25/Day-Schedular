const {Router}= require("express");
const { savepdf } = require("../Controllers/Daycontroller");


const routerp=Router()


routerp.post("/save-pdf",savepdf);


module.exports=routerp