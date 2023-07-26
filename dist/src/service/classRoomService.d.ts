import { Service } from "./service";
import { ClassRoom } from "../entity/classRoom";
declare class ClassRoomService implements Service<ClassRoom> {
    classRoomRepository: import("typeorm").Repository<ClassRoom>;
    getAll: () => Promise<ClassRoom[]>;
    add: (classRoom: any) => Promise<any>;
    delete: (classRoom: any) => Promise<import("typeorm").DeleteResult>;
    update: (id: any, classRoom: any) => Promise<import("typeorm").UpdateResult>;
    findById: (id: any) => Promise<ClassRoom[]>;
}
declare const _default: ClassRoomService;
export default _default;
