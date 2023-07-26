import { Service } from "./service";
import { Cate } from "../entity/cate";
declare class CateService implements Service<Cate> {
    cateRepository: import("typeorm").Repository<Cate>;
    getAll: () => Promise<Cate[]>;
    add: (product: any) => Promise<any>;
    delete: (product: any) => Promise<import("typeorm").DeleteResult>;
    update: (id: any, product: any) => Promise<import("typeorm").UpdateResult>;
    findById: (id: any) => Promise<Cate[]>;
}
declare const _default: CateService;
export default _default;
