import { Router } from "express";
import UserController from "../controllers/UserController.js";

const {createUser, deleteUser, getAllUsers, getUnique, updateUser} = new UserController(); 

const router = Router();

router.post('/createUser', createUser);
router.get('/getAll', getAllUsers);
router.get('/getById/:id', getUnique);
router.put('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

export default router;