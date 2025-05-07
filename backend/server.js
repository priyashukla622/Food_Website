// import express from 'express';
// import cors from 'cors';
// import mongoose  from 'mongoose';
// import dotenv from 'dotenv';
// import foodRoute from "./routes/foodRoutes.js";
// const app=express();
// // const port=3000;
// const port=process.env.PORT;
// dotenv.config()


// const mongoURI = process.env.mongoDB_URL

// mongoose.connect(mongoURI)
// .then(() => {
//     console.log("MongoDB Connected Successfully!");
// }).catch((err) => {
//     console.error("MongoDB Connection Error:", err);
// });



// app.use(express.json())
// app.use(cors())

// app.use("/api",foodRoute)
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`)
// })




import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import foodRoute from './routes/foodRoutes.js';

dotenv.config();

const app = express();
const mongoURI = process.env.MONGO_DB_URL;
const port = process.env.PORT || 4000;

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use(express.json());
app.use(cors());

app.use("/api", foodRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
