import express from 'express';
import { questionController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', questionController.get);
router.get('/:id/choices', questionController.listChoices);
router.get('/', questionController.list);
router.post('/', questionController.create);
router.put('/:id', questionController.update);
router.delete('/:id', questionController.remove);

export default router;
