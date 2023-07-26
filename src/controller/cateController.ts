import {Request, Response} from "express";
import CateService from "../service/cateService";

class CateController {
    private cateService;

    constructor() {
        this.cateService = CateService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.cateService.getAll();
        res.json(listProduct);
    }
    add = async (req: Request, res: Response) => {
        let listProduct = await this.cateService.add(req.body);
        res.json(listProduct);
    }
    delete = async (req: Request, res: Response) => {
        let listProduct = await this.cateService.delete(req.params.id);
        res.json(listProduct);
    }
    update = async (req: Request, res: Response) => {
        await CateService.update(req.params.id , req.body)
        res.json('Sửa thành công');
    }
    findById = async (req: Request, res: Response) => {
        let  listProduct= await CateService.findById(req.params.id)
        res.json(listProduct);
    }



}

export default new CateController();
