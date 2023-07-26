declare class StudentService {
    private studentRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (student: any) => Promise<void>;
}
declare const _default: StudentService;
export default _default;
