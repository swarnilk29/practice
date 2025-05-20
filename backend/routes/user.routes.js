import express from 'express';
import { createUser,deleteUser,getAllUsers,getUserById,updateUser} from '../controllers/user.api.js';

const router = express.Router();

router.post('/createUser', createUser);
router.delete('/deleteUser/:id', deleteUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);

export default router;