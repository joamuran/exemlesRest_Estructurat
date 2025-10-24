import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

// Creem un router per gestionar la ruta users
const router = Router();

// Creem un controlador
const productController = new ProductController();

// Definim les rutes dins aquest router i enllacem amb les
// funcions corresponents del controlador.
router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.create);

export default router;