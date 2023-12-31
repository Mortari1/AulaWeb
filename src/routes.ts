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
        route:"/professores/buscar",
        controller: ProfessoresController,
        action: "all"
}, {
    method: "get",
    route: "/professores/buscarunico",
    controller: ProfessoresController,
    action: "one"
},
    {
    method: "delete",
    route:"/professores/:id",
    controller: ProfessoresController,
    action: "remove"
},]