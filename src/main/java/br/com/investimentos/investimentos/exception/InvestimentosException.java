package br.com.investimentos.investimentos.exception;

import br.com.investimentos.investimentos.enumerator.InvestimentosErro;
import lombok.Getter;

public class InvestimentosException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Getter
	private InvestimentosErro investimentosErro;
	
	public InvestimentosException( InvestimentosErro investimentosErro) {
		super( investimentosErro.getError());
		this.investimentosErro = investimentosErro;
	}
	

}
