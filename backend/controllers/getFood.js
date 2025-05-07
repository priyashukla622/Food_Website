import foodModel from '../model/foodSchema.js';

export const getFoodCategory=async (req,res)=>{
    try{
        const foodCategory= await foodModel.find({});
        if(!foodCategory){
            return res.status(404).json({message:"No food category found"});
        }
        return res.status(200).json({foodCategory});
    }
    catch(err){
        console.error(err);
        return res.status(500).json({message:"something went wrong"})
    }
}