export class Ativo {
    codigo: string;
    empresa: string;
    setor: string;
    precoMedioIR: number;
    precoMedioReal: number;
    quantidade: number;
    capitalInvestido: number;
    ultimoFechamento: number;
    capitalAtual: number;
    variacaoPercentual: number;
    variacaoFinanceira: number;

    constructor(codigo: string, empresa: string, setor: string, precoMedioIR: number, precoMedioReal: number,
         quantidade: number, capitalInvestido: number, ultimoFechamento: number, capitalAtual: number,
         variacaoPercentual: number, variacaoFinanceira: number) {
             this.codigo = codigo;
             this.empresa = empresa;
             this.setor = setor;
             this.precoMedioIR = precoMedioIR;
             this.precoMedioReal = precoMedioReal;
             this.quantidade = quantidade;
             this.capitalInvestido = capitalInvestido;
             this.ultimoFechamento = ultimoFechamento;
             this.capitalAtual = capitalAtual;
             this.variacaoPercentual = variacaoPercentual;
             this.variacaoFinanceira = variacaoFinanceira;
         }
}
