import { Request, Response } from "express";
declare class StudentController {
    private studentService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: StudentController;
export default _default;
