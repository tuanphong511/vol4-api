import {Router} from "express";
import productRouter from "./productRouter";
import studentRouter from "./studentRouter";
import alumnusRouter from "./alumnusRouter";


const router = Router();
router.use('/products', productRouter);
router.use('/students', studentRouter);
router.use('/alumnus', alumnusRouter);

export default router;
