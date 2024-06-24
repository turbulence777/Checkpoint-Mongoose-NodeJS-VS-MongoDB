// importing mongoose
const mongoose =require("mongoose")
// creating a schema
const userSchema= mongoose.Schema({
    name: String ,
age: Number,
favoriteFoods: [String]
})
// create a model
const User=mongoose.model("user",userSchema)
// export the model User
module.exports=User