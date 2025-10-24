import { Router } from "express";
import { UserController } from "../controllers/user.controller";

// Creem un router
const router = Router();

// Creem un controlador
const userController = new UserController();


// Definim les rutes dins aquest router i enllacem amb les
// funcions corresponents del controlador.
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.create);

export default router;
