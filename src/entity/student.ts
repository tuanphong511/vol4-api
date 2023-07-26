import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Students {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    age: number;
    @Column({type: 'text'})
    score: string;

}
