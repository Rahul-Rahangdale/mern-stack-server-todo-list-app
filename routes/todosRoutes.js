import express from 'express';
import {readTodo, createTodo, updateTodo, deleteTodo} from '../controllers/todosController.js'
const router = express.Router();

router.get('/', readTodo);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;