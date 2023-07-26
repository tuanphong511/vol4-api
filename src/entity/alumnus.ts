import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClassRoom} from "./classRoom"

@Entity()
export class Alumnus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    age: number
    @Column()
    score: number
    @ManyToOne(()=> ClassRoom, (classRoom) => classRoom.id)
    classRoom: ClassRoom

}