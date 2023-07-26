export interface Service<T> {
    getAll(): any;
    add(data: any): any;
    update(id: any, data: any): any;
    findById(id: any): any;
    delete(id: any): any;
}
