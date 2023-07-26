import {Router} from "express";
import cateController from "../controller/cateController";

const cateRouter = Router();
cateRouter.get('/', cateController.findAll);
cateRouter.post('/', cateController.add);
cateRouter.delete('/:id', cateController.delete);
cateRouter.put('/:id', cateController.update);
cateRouter.get('/:id', cateController.findById);
export default cateRouter;