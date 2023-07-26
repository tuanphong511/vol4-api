export interface Service<T>{
    getAll();

    add(data);

    update(id, data)

    findById(id)

    delete(id)
}