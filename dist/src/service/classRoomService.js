"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const classRoom_1 = require("../entity/classRoom");
class ClassRoomService {
    constructor() {
        this.classRoomRepository = data_source_1.AppDataSource.getRepository(classRoom_1.ClassRoom);
        this.getAll = async () => {
            return await this.classRoomRepository.find();
        };
        this.add = async (classRoom) => {
            return await this.classRoomRepository.save(classRoom);
        };
        this.delete = async (classRoom) => {
            return await this.classRoomRepository.delete(classRoom);
        };
        this.update = async (id, classRoom) => {
            return await this.classRoomRepository.update(id, classRoom);
        };
        this.findById = async (id) => {
            return await this.classRoomRepository.find({
                where: {
                    id
                },
            });
        };
    }
}
exports.default = new ClassRoomService();
//# sourceMappingURL=classRoomService.js.map