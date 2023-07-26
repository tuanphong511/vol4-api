"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cateService_1 = __importDefault(require("../service/cateService"));
class CateController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.cateService.getAll();
            res.json(listProduct);
        };
        this.add = async (req, res) => {
            let listProduct = await this.cateService.add(req.body);
            res.json(listProduct);
        };
        this.delete = async (req, res) => {
            let listProduct = await this.cateService.delete(req.params.id);
            res.json(listProduct);
        };
        this.update = async (req, res) => {
            await cateService_1.default.update(req.params.id, req.body);
            res.json('Sửa thành công');
        };
        this.findById = async (req, res) => {
            let listProduct = await cateService_1.default.findById(req.params.id);
            res.json(listProduct);
        };
        this.cateService = cateService_1.default;
    }
}
exports.default = new CateController();
//# sourceMappingURL=cateController.js.map