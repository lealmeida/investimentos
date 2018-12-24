package br.com.investimentos.investimentos.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import br.com.investimentos.investimentos.model.Transacao;
import br.com.investimentos.investimentos.repository.TransacaoRepository;

@Configuration
public class TransacaoService {
	
	@Autowired
	private TransacaoRepository transacaoRepository;

	public Transacao salvarTransacao(Transacao transacao) {
		return transacaoRepository.save(transacao);
		// TODO Auto-generated method stub
		
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
		transacaoRepository.save(transacao);
	}

}
