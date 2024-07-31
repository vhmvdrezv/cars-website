import express from 'express';
import * as controller from '../../controllers/contactController.js';

const router = express.Router();

router.post('/', controller.createContact);

router.get('/', controller.getAllContacts);

router.get('/:id', controller.getContactById);

router.delete('/:id', controller.deleteContact);

router.put('/:id', controller.updateContact);

export default router;