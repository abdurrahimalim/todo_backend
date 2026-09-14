import { Router } from 'express';
import { validateTodo, validateUpdateTodo } from '../middlewares/validator';
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

// GET /api/todos - Ambil semua todo milik user
router.get('/', getTodos);

// GET /api/todos/:id - Ambil satu todo berdasarkan ID
router.get('/:id', getTodoById);

// POST /api/todos - Tambah todo baru
router.post('/', validateTodo, createTodo);

router.put('/:id', validateUpdateTodo, updateTodo);

router.delete('/:id', deleteTodo);

export default router;