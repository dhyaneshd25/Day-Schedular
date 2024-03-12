const {Router}= require("express");
const { getToDos, getSave, getUpdate, getdelete } = require("../Controllers/Daycontroller");

const router=Router()


router.get("/get",getToDos);
router.post("/save",getSave);
router.put("/update/:id",getUpdate);
router.delete("/delete/:id",getdelete);

module.exports=router