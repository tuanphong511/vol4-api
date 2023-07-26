import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";
import {Response} from "express";
import {Alumnus} from "../entity/alumnus";

class AlumnusService {
    private alumnusRepository;
    constructor() {
        this.alumnusRepository = AppDataSource.getRepository(Alumnus);
    }

    getAll = async () => {
        return  await this.alumnusRepository.find({
            relations:{
                classRoom:true
            }
        });

    }

    add = async (alumnus) => {
        return  await this.alumnusRepository.save(alumnus)
    }
    delete = async (alumnus) => {
        return  await this.alumnusRepository.delete(alumnus)
    }
    update = async (id, alumnus) =>{
        return await this.alumnusRepository.update(id, alumnus)
    }
    findById = async (id) => {
        return await this.alumnusRepository.find({
            relations:{
                classRoom:true
            },
            where: {
                id
            },
        })
    }
    findByName = async (name) =>{
        return await this.alumnusRepository.find({
            relations:{
                classRoom:true
            },
            where: {
                 name
            },
        })
    }
    ASC = async () => {
        let a  =await this.alumnusRepository.find({
            relations:{
                classRoom:true
            },
            order:
                    {score: 'ASC'}
            })
        console.log(a)
        return a
    }
    DESC = async () => {
        let a  =await this.alumnusRepository.find({
            relations:{
                classRoom:true
            },
            order:
                {score: 'DESC'}
        })
        console.log(a)
        return a
    }
}

export default new AlumnusService();
