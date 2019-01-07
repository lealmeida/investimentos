package br.com.investimentos.investimentos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import br.com.investimentos.investimentos.exception.InvestimentosException;
import br.com.investimentos.investimentos.model.Transacao;
import br.com.investimentos.investimentos.repository.TransacaoRepository;

@Configuration
public class TransacaoService {
	
	@Autowired
	private TransacaoRepository transacaoRepository;

	@Autowired
	private AtivoService ativoService;
	
	public Transacao salvarTransacao(Transacao transacao) throws InvestimentosException {
		if (transacao.getTipo().equalsIgnoreCase("compra")) {
			ativoService.compraAtivo(transacao);
		} else {
			ativoService.vendaAtivo(transacao);
		}
		return transacaoRepository.save(transacao);
	}

	public List<Transacao> getTransacoes() {
		List<Transacao> transacoes = transacaoRepository.findAll();
		return transacoes;
	}

	public void deleteTransacao(long id) {
		transacaoRepository.deleteById(id);
	}

}
