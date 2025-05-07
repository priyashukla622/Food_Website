import express from 'express';
import { addFoodCategory } from '../controllers/addFood.js';
import { getFoodCategory } from '../controllers/getFood.js';

const router = express.Router();

router.post('/addFood', addFoodCategory);
router.get('/getFood',getFoodCategory);
export default router;
