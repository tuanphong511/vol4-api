"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cate_1 = require("../entity/cate");
const data_source_1 = require("../data-source");
class CateService {
    constructor() {
        this.cateRepository = data_source_1.AppDataSource.getRepository(cate_1.Cate);
        this.getAll = async () => {
            return await this.cateRepository.find();
        };
        this.add = async (product) => {
            return await this.cateRepository.save(product);
        };
        this.delete = async (product) => {
            return await this.cateRepository.delete(product);
        };
        this.update = async (id, product) => {
            return await this.cateRepository.update(id, product);
        };
        this.findById = async (id) => {
            return await this.cateRepository.find({
                where: {
                    id
                },
            });
        };
    }
}
exports.default = new CateService();
//# sourceMappingURL=cateService.js.map