const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "password":{type:String},
    "submissions": { type: Array}
},{
    collection:"user"
})

module.exports=mongoose.model("UserSchema",UserSchema);