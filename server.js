// importing the required libraries
const express=require("express")
const app=express()
const mongoose=require("mongoose")
// set up a middleware
app.use(express.json())

const port=8081
// connect to the database
mongoose.connect("mongodb+srv://ladharimalek10:1234@cluster0.6eeywmw.mongodb.net/myfirstapp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))
app.use("/",require("./routes/userRoute"))
app.listen(port,(err)=>{
    err?console.log(err):console.log("server is running")
})