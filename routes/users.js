import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verfiyToken,verifyUser,verifyAdmin } from "../utils/verfiyToken.js";

const router=express.Router();

router.get("/checkauthentication",(req,res,next)=>{
    res.send("Hello  user, you are logged in!")
})

router.get("/checkuser/:id", (req,res,next)=>{
    res.send("Hello  user, you are logged in and you can delete your account!")
})
router.get("/checkadmin/:id", verifyAdmin,(req,res,next)=>{
    res.send("Hello Admin, you are logged in and you can delete all account!")
})
router.put("/:id",verifyUser,updateUser);
router.delete("/:id", verifyUser,deleteUser);

router.get("/:id",getUser);
router.get("/", getUsers);

export default router