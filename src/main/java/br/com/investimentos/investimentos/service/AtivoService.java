package br.com.investimentos.investimentos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import br.com.investimentos.investimentos.enumerator.InvestimentosErro;
import br.com.investimentos.investimentos.exception.InvestimentosException;
import br.com.investimentos.investimentos.model.Ativo;
import br.com.investimentos.investimentos.model.Transacao;
import br.com.investimentos.investimentos.repository.AtivoRepository;

@Configuration
public class AtivoService {

	@Autowired
	private AtivoRepository ativoRepository;

	public List<Ativo> getAtivos() {
		return ativoRepository.findAll();
	}

	public void diminuirPrecoMedioReal(String ativo, double valor) throws InvestimentosException {
		ativoRepository.findByCodigo(ativo).map(transacao -> {
			double capital = (transacao.getPrecoMedioReal() * transacao.getQuantidade()) - valor;
			transacao.setPrecoMedioReal(capital / transacao.getQuantidade());
			return ativoRepository.save(transacao);
		}).orElseThrow(() -> new InvestimentosException(InvestimentosErro.IN0001));
	}

	public void compraAtivo(Transacao transacao) {
		ativoRepository.findByCodigo(transacao.getAtivo()).map(ativo -> {
			int qtde = ativo.getQuantidade() + transacao.getQuantidade();
			double capitalInvestido = aumentaCapitalInvestido(transacao, ativo);
			double precoMedio = calculaPrecoMedio(qtde, capitalInvestido);
			double precoMedioReal = calcularPrecoMedioReal(ativo.getPrecoMedioReal(), ativo.getQuantidade(), transacao.getValor(), transacao.getQuantidade(), qtde);
			ativo.setPrecoMedioReal(precoMedioReal);
			ativo.setQuantidade(qtde);
			ativo.setCapitalInvestido(capitalInvestido);
			ativo.setPrecoMedioIR(precoMedio);

			return ativoRepository.save(ativo);
		}).orElseGet(() -> {
			Ativo ativo = new Ativo();
			double ci = transacao.getValor() * transacao.getQuantidade();
			double pm = ci / transacao.getQuantidade();
			ativo.setCapitalInvestido(ci);
			ativo.setCodigo(transacao.getAtivo());
			ativo.setEmpresa(transacao.getEmpresa());
			ativo.setPrecoMedioIR(pm);
			ativo.setPrecoMedioReal(pm);
			ativo.setQuantidade(transacao.getQuantidade());
			ativo.setSetor(transacao.getSetor());
			ativo.setTipo("Ações");
			return ativoRepository.save(ativo);
		});
	}

	private double aumentaCapitalInvestido(Transacao transacao, Ativo ativo) {
		return ativo.getCapitalInvestido() + (transacao.getValor() * transacao.getQuantidade());
	}
	
	private double diminuiCapitalInvestido(Transacao transacao, Ativo ativo) {
		return ativo.getCapitalInvestido() - (transacao.getValor() * transacao.getQuantidade());
	}

	private double calculaPrecoMedio(int qtde, double ci) {
		return ci / qtde;
	}

	private double calcularPrecoMedioReal(double ativoPrecoMedioReal, int ativoQtde, double transacaValor, int transacaoQtde, int qtde) {
		double capitalInvestido = ativoPrecoMedioReal * ativoQtde;
		double transacaoValorInvestido = transacaValor * transacaoQtde;
		return (capitalInvestido + transacaoValorInvestido) / qtde;
	}

	public void vendaAtivo(Transacao transacao) throws InvestimentosException {
		ativoRepository.findByCodigo(transacao.getAtivo()).map(ativo -> {
			int qtde = ativo.getQuantidade() - transacao.getQuantidade();
			double capitalInvestido = diminuiCapitalInvestido(transacao, ativo);
			double precoMedio = calculaPrecoMedio(qtde, capitalInvestido);
			double precoMedioReal = calcularPrecoMedioReal(ativo.getPrecoMedioReal(), ativo.getQuantidade(), transacao.getValor(), transacao.getQuantidade(), qtde);
			ativo.setPrecoMedioReal(precoMedioReal);
			ativo.setQuantidade(qtde);
			ativo.setCapitalInvestido(capitalInvestido);
			ativo.setPrecoMedioIR(precoMedio);
			if (ativo.getQuantidade() == 0) {
				ativoRepository.delete(ativo);
				return null;
			}

			return ativoRepository.save(ativo);
		}).orElseThrow(() -> new InvestimentosException(InvestimentosErro.IN0002));
		
	}

}
