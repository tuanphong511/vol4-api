import {Request, Response} from "express";
import productService from "../service/productService";
import * as fs from "fs";
import studentService from "../service/studentService";

class StudentController {
    private studentService;

    constructor() {
        this.studentService = studentService;
    }

    findAll = async (req: Request, res: Response) => {
        let listStudent = await this.studentService.getAll();
        res.json(listStudent);
    }

}

export default new StudentController();
