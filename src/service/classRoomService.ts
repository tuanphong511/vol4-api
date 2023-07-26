import {Service} from "./service";
import {Cate} from "../entity/cate";
import {AppDataSource} from "../data-source";
import {ClassRoom} from "../entity/classRoom";

class ClassRoomService implements Service<ClassRoom> {
    classRoomRepository = AppDataSource.getRepository(ClassRoom)

    getAll = async () => {
        return  await this.classRoomRepository.find();

    }

    add = async (classRoom) => {
        return  await this.classRoomRepository.save(classRoom)
    }
    delete = async (classRoom) => {
        return  await this.classRoomRepository.delete(classRoom)
    }
    update = async (id, classRoom) =>{
        return await this.classRoomRepository.update(id, classRoom)
    }
    findById = async (id) => {
        return await this.classRoomRepository.find({
            where: {
                id
            },
        })
    }

}
export default new ClassRoomService();
