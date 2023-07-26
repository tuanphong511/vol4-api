import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";
import {Students} from "../entity/student";

class StudentService {
    private studentRepository;
    constructor() {
        this.studentRepository = AppDataSource.getRepository(Students);
    }

    getAll = async () => {
        let students = await this.studentRepository.find();
        return students;
    }

    add = async (student) => {
        await this.studentRepository.save(student)
    }
}

export default new StudentService();
