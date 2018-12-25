package br.com.investimentos.investimentos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import br.com.investimentos.investimentos.model.Transacao;
import br.com.investimentos.investimentos.repository.TransacaoRepository;

@Configuration
public class TransacaoService {
	
	@Autowired
	private TransacaoRepository transacaoRepository;

	@Autowired
	private AtivoService ativoService;
	
	public Transacao salvarTransacao(Transacao transacao) {
		ativoService.updateAtivo(transacao);
		return transacaoRepository.save(transacao);
	}

	public List<Transacao> getTransacoes() {
		// TODO Auto-generated method stub
		List<Transacao> transacoes = transacaoRepository.findAll();
		return transacoes;
	}

	public void deleteTransacao(long id) {
		transacaoRepository.deleteById(id);
	}

	public void updateTransacao(Transacao transacao) {
		ativoService.updateAtivo(transacao);
		transacaoRepository.save(transacao);
	}

}
