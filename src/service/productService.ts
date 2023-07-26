import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";
import {Response} from "express";

class ProductService {
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(ProductPro);
    }


    getAll = async () => {
         return  await this.productRepository.find({
             relations:{
                 cate:true
             }
         });

    }

    add = async (product) => {
       return  await this.productRepository.save(product)
    }
    delete = async (product) => {
       return  await this.productRepository.delete(product)
    }
    update = async (id, product) =>{
        return await this.productRepository.update(id, product)
    }
    findById = async (id) => {
        return await this.productRepository.find({
            where: {
                id
            },
        })
    }
}

export default new ProductService();
