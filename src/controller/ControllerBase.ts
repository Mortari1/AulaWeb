export abstract class ControllerBase {
    notificacoes?: Array<{mensagens:string}>;

    constructor(){
        this.notificacoes = new Array<{mensagens:string}>()
    }

    addNotificacao (mensagem: string): void{
        this.notificacoes.push({mensagens:mensagem})
    }

    get retornaNotificacao(): Array<{mensagens:string}>{
        return this.notificacoes
    }

    valid (): boolean{
        return this.notificacoes.length === 0;
    }

    isRequired (value, msg){
        if(!value || value.length <= 0 || value === null){
            this.addNotificacao(msg);
        }
    }
}
