import {Request, Response} from "express";
import alumnusService from "../service/alumnusService";


class AlumnusController {
    private alumnusService;

    constructor() {
        this.alumnusService = alumnusService;
    }

    findAll = async (req: Request, res: Response) => {

        let listAlumnus
        if(req.params.score === "ASC"){
            listAlumnus = await alumnusService.ASC();
        }else if(req.params.score === "DESC"){
            listAlumnus =await  alumnusService.DESC()
        } else {
            listAlumnus = await this.alumnusService.getAll();
        }
        console.log(listAlumnus)
        res.json(listAlumnus);
    }
    add = async (req: Request, res: Response) => {
        let listAlumnus = await this.alumnusService.add(req.body);
        res.json(listAlumnus);
    }
    delete = async (req: Request, res: Response) => {
        let listAlumnus = await this.alumnusService.delete(req.params.id);
        res.json(listAlumnus);
    }
    update = async (req: Request, res: Response) => {
        await alumnusService.update(req.params.id , req.body)
        res.json('Sửa thành công');
    }
    findById = async (req: Request, res: Response) => {
        let  listAlumnus= await alumnusService.findById(req.params.id)
        res.json(listAlumnus);
    }
    findByName = async (req: Request, res: Response) => {
        let  listAlumnus= await alumnusService.findByName(req.query.name)
        res.json(listAlumnus);
    }
    // ASC = async (req: Request, res: Response) => {
    //     let listAlumnus = await alumnusService.ASC();
    //     res.json(listAlumnus);
    // }



}

export default new AlumnusController();
