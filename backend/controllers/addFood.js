import express from 'express';
import foodModel from '../model/foodSchema.js';


export const addFoodCategory =async(req,res)=>{
    const{category,items,image}=req.body;
    try{
        const foodCategory=await foodModel.findOne({category});
       if(foodCategory){
        return res.status(400).json({message:"Category already exits"});
       }
       const newCatefory=new foodModel({
        category,
        items,
        image
       })
       await newCatefory.save();
       return res.status(200).json({messsage:"Category added successfully"});
    }
    catch(err){
        console.error(err);
        return res.status(500).json({message:"something went wrong"})
    }
}
