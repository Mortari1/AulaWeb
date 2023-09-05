import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Professores } from "./entity/Professores"

export const AppDataSource = new DataSource({
        type: "mysql",
        host: "127.0.0.1",
        port: 3306,
        username: "root",
        password: "",
        database: "web_project",
        entities: [User,Professores],
        synchronize: true,
        logging:false
        
    })
