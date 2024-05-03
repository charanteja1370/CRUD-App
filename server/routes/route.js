import express from 'express';
import { addUser, getUsers, getUser, editUser, deleteUser } from '../controller/user-controller.js';
// import { editUser } from '../../client/src/service/api.js';
// import { getUser } from '../../client/src/service/api.js';

const router = express.Router();

// router.get('/', getUsers);
// router.post('/add', addUser);
// router.get('/:id', getUserById);
// router.put('/:id', editUser);
// router.delete('/:id', deleteUser);

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;