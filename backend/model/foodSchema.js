// import mongoose from 'mongoose'

// const foodCategorySchema = new mongoose.Schema({
//   category: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   items: [
//     {
//       name: String,
//       image: String  
//     }
//   ]
// });
// const foodeModel= mongoose.model('FoodCategory', foodCategorySchema);
// export default foodeModel;











import mongoose from 'mongoose'

const foodItemSchema = new mongoose.Schema({
  name: String,
  image: String  // Item-specific image
});
const foodCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true
  },
  image: String,  
  items: [
    {
      name: String,
      description:String,
      image: String  
    }
  ]
});
const foodeModel= mongoose.model('FoodCategory', foodCategorySchema);
export default foodeModel;

