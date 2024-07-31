import express from 'express';
import * as controller from '../../controllers/authController.js'

const router = express.Router();

router.post('/signup', controller.createUser);

router.post('/login', controller.logInUser);

export default router;