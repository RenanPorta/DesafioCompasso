import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeCompleto: string;

    @Column()
    sexo: string;

    @Column()
    dataNascimento: Date;

    @Column()
    idade: number;

    @Column()
    cidade: string;
}