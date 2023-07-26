"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alumnusService_1 = __importDefault(require("../service/alumnusService"));
class AlumnusController {
    constructor() {
        this.findAll = async (req, res) => {
            let listAlumnus;
            if (req.params.score === "ASC") {
                listAlumnus = await alumnusService_1.default.ASC();
            }
            else if (req.params.score === "DESC") {
                listAlumnus = await alumnusService_1.default.DESC();
            }
            else {
                listAlumnus = await this.alumnusService.getAll();
            }
            console.log(listAlumnus);
            res.json(listAlumnus);
        };
        this.add = async (req, res) => {
            let listAlumnus = await this.alumnusService.add(req.body);
            res.json(listAlumnus);
        };
        this.delete = async (req, res) => {
            let listAlumnus = await this.alumnusService.delete(req.params.id);
            res.json(listAlumnus);
        };
        this.update = async (req, res) => {
            await alumnusService_1.default.update(req.params.id, req.body);
            res.json('Sửa thành công');
        };
        this.findById = async (req, res) => {
            let listAlumnus = await alumnusService_1.default.findById(req.params.id);
            res.json(listAlumnus);
        };
        this.findByName = async (req, res) => {
            let listAlumnus = await alumnusService_1.default.findByName(req.query.name);
            res.json(listAlumnus);
        };
        this.alumnusService = alumnusService_1.default;
    }
}
exports.default = new AlumnusController();
//# sourceMappingURL=alumnusController.js.map