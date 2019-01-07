package br.com.investimentos.investimentos.enumerator;

import lombok.Getter;

public enum InvestimentosErro {
    
	IN0001("IN-0001", "Não foi possível adicionar o provento, ativo informado não foi encontrado"),
	IN0002("IN-0002", "Não foi possível adicionar a venda, ativo informado não foi encontrado na carteira");
	
	@Getter
    private String code;

    @Getter
    private String error;
    
    InvestimentosErro( String code, String error ) {
        this.code = code;
        this.error = error;
    }
}
