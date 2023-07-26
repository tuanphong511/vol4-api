declare class AlumnusService {
    private alumnusRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (alumnus: any) => Promise<any>;
    delete: (alumnus: any) => Promise<any>;
    update: (id: any, alumnus: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByName: (name: any) => Promise<any>;
    ASC: () => Promise<any>;
    DESC: () => Promise<any>;
}
declare const _default: AlumnusService;
export default _default;
