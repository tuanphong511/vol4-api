import {Router} from "express";
import alumnusController from "../controller/alumnusController";

const alumnusRouter = Router();
alumnusRouter.get('/:score', alumnusController.findAll);
alumnusRouter.get('/', alumnusController.findByName);

alumnusRouter.post('/', alumnusController.add);
alumnusRouter.delete('/:id', alumnusController.delete);
alumnusRouter.put('/:id', alumnusController.update);
alumnusRouter.get('/:id', alumnusController.findById);
// alumnusRouter.get('/ASC', alumnusController.ASC);
export default alumnusRouter;