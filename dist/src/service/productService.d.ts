declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<any>;
    delete: (product: any) => Promise<any>;
    update: (id: any, product: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
