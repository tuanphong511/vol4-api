"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classRoomService_1 = __importDefault(require("../service/classRoomService"));
class ClassRoomController {
    constructor() {
        this.findAll = async (req, res) => {
            let listClassRoom = await this.classRoomService.getAll();
            res.json(listClassRoom);
        };
        this.add = async (req, res) => {
            let listClassRoom = await this.classRoomService.add(req.body);
            res.json(listClassRoom);
        };
        this.delete = async (req, res) => {
            let listClassRoom = await this.classRoomService.delete(req.params.id);
            res.json(listClassRoom);
        };
        this.update = async (req, res) => {
            await classRoomService_1.default.update(req.params.id, req.body);
            res.json('Sửa thành công');
        };
        this.findById = async (req, res) => {
            let listClassRoom = await classRoomService_1.default.findById(req.params.id);
            res.json(listClassRoom);
        };
        this.classRoomService = classRoomService_1.default;
    }
}
exports.default = new ClassRoomController();
//# sourceMappingURL=classRoomController.js.map