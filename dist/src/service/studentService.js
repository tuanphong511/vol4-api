"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const student_1 = require("../entity/student");
class StudentService {
    constructor() {
        this.getAll = async () => {
            let students = await this.studentRepository.find();
            return students;
        };
        this.add = async (student) => {
            await this.studentRepository.save(student);
        };
        this.studentRepository = data_source_1.AppDataSource.getRepository(student_1.Students);
    }
}
exports.default = new StudentService();
//# sourceMappingURL=studentService.js.map