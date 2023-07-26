import {Service} from "./service";
import {Cate} from "../entity/cate";
import {AppDataSource} from "../data-source";

class CateService implements Service<Cate> {
    cateRepository = AppDataSource.getRepository(Cate)

    getAll = async () => {
        return  await this.cateRepository.find();

    }

    add = async (product) => {
        return  await this.cateRepository.save(product)
    }
    delete = async (product) => {
        return  await this.cateRepository.delete(product)
    }
    update = async (id, product) =>{
        return await this.cateRepository.update(id, product)
    }
    findById = async (id) => {
        return await this.cateRepository.find({
            where: {
                id
            },
        })
    }

}
export default new CateService();
