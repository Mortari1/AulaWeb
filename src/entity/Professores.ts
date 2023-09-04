import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

}
