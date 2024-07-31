import express from 'express';

import * as controller from '../controllers/rootController.js';

const router = express.Router();

router.get('^/$|/index(.html)?', controller.getIndex);

router.get('/cars(.html)?', controller.getCarsPage);

router.get('/contactuspage(.html)?', controller.getContactPage);

router.get('/loginpage(.html)?', controller.getLoginPage);

router.get('/signuppage(.html)?', controller.getSignupPage)

export default router;