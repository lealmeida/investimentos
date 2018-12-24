export class Transacao {
    id: number;
    ativo: string;
    empresa: string;
    setor: string;
    dataCompra: string;
    quantidade: number;
    valor: number;
    tipo: string;

    constructor(ativo: string, empresa: string, setor: string, dataCompra: string, quantidade: number, valor: number,
        tipo: string) {
            this.ativo = ativo;
            this.empresa = empresa;
            this.setor = setor;
            this.dataCompra = dataCompra;
            this.quantidade = quantidade;
            this.valor = valor;
            this.tipo = tipo;
    }
}
