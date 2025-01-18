import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

const userController = new UserController();

const router = Router();

router.post("/create", userController.createUser);
// router.get("/getAll", userController.getAllUsers);
// router.get("/:id", userController.getUnique);
// router.put("/updateUser", userController.updateUser);
// router.delete("/:id", userController.deleteUser);

export default router;
