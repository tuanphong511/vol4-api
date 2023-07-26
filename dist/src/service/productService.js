"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            return await this.productRepository.find({
                relations: {
                    cate: true
                }
            });
        };
        this.add = async (product) => {
            return await this.productRepository.save(product);
        };
        this.delete = async (product) => {
            return await this.productRepository.delete(product);
        };
        this.update = async (id, product) => {
            return await this.productRepository.update(id, product);
        };
        this.findById = async (id) => {
            return await this.productRepository.find({
                where: {
                    id
                },
            });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.ProductPro);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map