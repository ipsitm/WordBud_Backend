const express=require("express");

const AmdinSchema=require("../model/AmdinSchema");
const mongoose  = require("mongoose");
const AdminRoute=express.Router();

AdminRoute.get("/",(req,res)=>{
    AmdinSchema.find((err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

AdminRoute.post("/Addcontent",(req,res)=>{
    AmdinSchema.create(req.body,(err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

AdminRoute.route("/updatecontent/:id")
    .get((req, res) => {
        AmdinSchema.findById(req.params.id, (err, data) => {
            if (err) return err;
            else res.json(data);
        });
    })
    .put((req, res) => {
        AmdinSchema.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            (err, data) => {
                if (err) return data;
                else res.json(data);
            }
        );
    });


AdminRoute.delete("/delete-content/:id",(req,res)=>{
    AmdinSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

module.exports=AdminRoute;