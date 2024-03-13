const express=require("express");

const UserSchema=require("../model/UserSchema");
const mongoose  = require("mongoose");
const UserRoute=express.Router();

UserRoute.get("/",(req,res)=>{
    UserSchema.find((err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

UserRoute.post("/Adduser",(req,res)=>{
    UserSchema.create(req.body,(err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

UserRoute.route("/updateuser/:id")
    .get((req, res) => {
        UserSchema.findById(req.params.id, (err, data) => {
            if (err) return err;
            else res.json(data);
        });
    })
    .put((req, res) => {
        UserSchema.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            (err, data) => {
                if (err) return data;
                else res.json(data);
            }
        );
    });


UserRoute.delete("/delete-user/:id",(req,res)=>{
    UserSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

module.exports=UserRoute;