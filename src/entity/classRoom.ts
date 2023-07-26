import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ClassRoom {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type:'varchar',length: 255})
    nameTeacher: string
    @Column()
    numberOfStudent: number
}