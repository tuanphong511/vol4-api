"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const alumnus_1 = require("../entity/alumnus");
class AlumnusService {
    constructor() {
        this.getAll = async () => {
            return await this.alumnusRepository.find({
                relations: {
                    classRoom: true
                }
            });
        };
        this.add = async (alumnus) => {
            return await this.alumnusRepository.save(alumnus);
        };
        this.delete = async (alumnus) => {
            return await this.alumnusRepository.delete(alumnus);
        };
        this.update = async (id, alumnus) => {
            return await this.alumnusRepository.update(id, alumnus);
        };
        this.findById = async (id) => {
            return await this.alumnusRepository.find({
                relations: {
                    classRoom: true
                },
                where: {
                    id
                },
            });
        };
        this.findByName = async (name) => {
            return await this.alumnusRepository.find({
                relations: {
                    classRoom: true
                },
                where: {
                    name
                },
            });
        };
        this.ASC = async () => {
            let a = await this.alumnusRepository.find({
                relations: {
                    classRoom: true
                },
                order: { score: 'ASC' }
            });
            console.log(a);
            return a;
        };
        this.DESC = async () => {
            let a = await this.alumnusRepository.find({
                relations: {
                    classRoom: true
                },
                order: { score: 'DESC' }
            });
            console.log(a);
            return a;
        };
        this.alumnusRepository = data_source_1.AppDataSource.getRepository(alumnus_1.Alumnus);
    }
}
exports.default = new AlumnusService();
//# sourceMappingURL=alumnusService.js.map