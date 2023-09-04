import { ProfessoresController } from "./controller/ProfessoresController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
    {
        method:"post",
        route:"/professores/inserir",
        controller: ProfessoresController,
        action: "save"
},
    {
        method:"get",
        rout:"/professores/buscar",
        controller: ProfessoresController,
        action: "all"
},]