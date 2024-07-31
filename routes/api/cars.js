import express from 'express';
import * as controller from '../../controllers/carsController.js';

const router = express.Router();

router.get('/', controller.getAllCars);


export default router;