const express=require("express")
const router=express.Router()
const User=require("../models/userSchema")
// Create several people with Model.create()


router.post("/postt",async(req,res)=>{

    try {
        const user=await User.create(req.body)
        res.status(201).json({ msg:"user created",user})
    } catch (error) {
        res.json({ err:"sthng went wrong try again ",error})

    }
})

// Find all the people having a given name, using Model.find() -> [Person]



router.get("/getusers",async(req,res)=>{

    try {
        const users=await User.find()
        res.status(200).json({msg:"get all users" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
// Find just one person which has a certain food in the person's favorites, using Model 
router.get("/getfoods/:food",async(req,res)=>{

    try {
        const users=await User.findOne({favoriteFoods:req.params.food})
        res.status(200).json({msg:"certain food" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
// Find the only person having a given _id
router.get("/getuser/:user",async(req,res)=>{

    try {
        const users=await User.findById(req.params.user)
        res.status(200).json({msg:"finded successfully by id" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
// Find a person by id and set the person's age to 20.


router.put("/updateuser/:user",async(req,res)=>{

    try {
        const users=await User.findByIdAndUpdate(req.params.user, req.body,{new:true})
        res.status(200).json({msg:"updated successfully" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
// Delete one person by the person's _id.
router.delete("/deleteuser/:user",async(req,res)=>{

    try {
        const users=await User.findByIdAndDelete(req.params.user, req.body)
        res.status(200).json({msg:"deleted successfully" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
module.exports=router
