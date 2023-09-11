import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn } from "typeorm"

@Entity()
export class Professores {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    idade: number

    @Column()
    formacao: string;

    @Column()
    especializacao: string;

    @CreateDateColumn()
    dataHora: Timestamp;

}
