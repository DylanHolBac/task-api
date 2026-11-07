import { Router } from 'express';
import { getTasks, createTask } from '../controllers/taskController.js';
import { validateCompletedQuery } from '../middleware/validateCompletedQuery.js';

const router = Router();

router.get('/', validateCompletedQuery, getTasks);
router.post('/', createTask);

export default router;