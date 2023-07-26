import {Request, Response} from "express";

import ClassRoomService from "../service/classRoomService";

class ClassRoomController {
    private classRoomService;

    constructor() {
        this.classRoomService = ClassRoomService;
    }

    findAll = async (req: Request, res: Response) => {
        let listClassRoom = await this.classRoomService.getAll();
        res.json(listClassRoom);
    }
    add = async (req: Request, res: Response) => {
        let listClassRoom = await this.classRoomService.add(req.body);
        res.json(listClassRoom);
    }
    delete = async (req: Request, res: Response) => {
        let listClassRoom = await this.classRoomService.delete(req.params.id);
        res.json(listClassRoom);
    }
    update = async (req: Request, res: Response) => {
        await ClassRoomService.update(req.params.id , req.body)
        res.json('Sửa thành công');
    }
    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await ClassRoomService.findById(req.params.id)
        res.json(listClassRoom);
    }



}

export default new ClassRoomController();
