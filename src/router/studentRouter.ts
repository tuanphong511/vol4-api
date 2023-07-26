import {Router} from "express";
import productController from "../controller/productController";
import studentController from "../controller/studentController";

const studentRouter = Router();
studentRouter.get('/', studentController.findAll);
export default studentRouter;
