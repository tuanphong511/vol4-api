"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.json(listProduct);
        };
        this.add = async (req, res) => {
            let listProduct = await this.productService.add(req.body);
            res.json(listProduct);
        };
        this.delete = async (req, res) => {
            let listProduct = await this.productService.delete(req.params.id);
            res.json(listProduct);
        };
        this.update = async (req, res) => {
            await productService_1.default.update(req.params.id, req.body);
            res.json('Sửa thành công');
        };
        this.findById = async (req, res) => {
            let listProduct = await productService_1.default.findById(req.params.id);
            res.json(listProduct);
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map