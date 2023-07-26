import {Request, Response} from "express";
import productService from "../service/productService";


class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll();
        res.json(listProduct);
    }
    add = async (req: Request, res: Response) => {
        let listProduct = await this.productService.add(req.body);
        res.json(listProduct);
    }
    delete = async (req: Request, res: Response) => {
        let listProduct = await this.productService.delete(req.params.id);
        res.json(listProduct);
    }
    update = async (req: Request, res: Response) => {
        await productService.update(req.params.id , req.body)
        res.json('Sửa thành công');
    }
    findById = async (req: Request, res: Response) => {
       let  listProduct= await productService.findById(req.params.id)
        res.json(listProduct);
    }



}

export default new ProductController();
