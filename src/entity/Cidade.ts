import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Cidade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    estado: string;

    //@Column({
        //default: false
    //})
    //finished: boolean;

    //@CreateDateColumn()
    //created_at: Date;

    //@CreateDateColumn()
    //updated_at: Date;
}