import {Router} from "express";
import classController from "../controller/classRoomController";

const classRoomRouter = Router();
classRoomRouter.get('/', classController.findAll);
classRoomRouter.post('/', classController.add);
classRoomRouter.delete('/:id', classController.delete);
classRoomRouter.put('/:id', classController.update);
classRoomRouter.get('/:id', classController.findById);
export default classRoomRouter;