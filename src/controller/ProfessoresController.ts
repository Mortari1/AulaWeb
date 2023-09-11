import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Professores } from "../entity/Professores"
import { ControllerBase } from "./ControllerBase"

export class ProfessoresController extends ControllerBase {

    private professoresRepository = AppDataSource.getRepository(Professores)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.professoresRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const professores = await this.professoresRepository.findOne({
            where: { id }
        })

        if (!professores) {
            return "professor não registrado"
        }
        return professores
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { nome, sobrenome, idade, formacao, especializacao } = request.body;

        const professores = Object.assign(new Professores(), {
            nome,
            sobrenome,
            idade, 
            formacao, 
            especializacao
        })

        return this.professoresRepository.save(professores)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let professoresToRemove = await this.professoresRepository.findOneBy({ id })

        if (!professoresToRemove) {
            return "Este professor não existe"
        }

        await this.professoresRepository.remove(professoresToRemove)

        return "professor removido"
    }

}