import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.add);
productRouter.delete('/:id', productController.delete);
productRouter.put('/:id', productController.update);
productRouter.get('/:id', productController.findById);
export default productRouter;
