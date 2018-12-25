package br.com.investimentos.investimentos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

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
	
	public void updateAtivo(Transacao transacao) {
		ativoRepository.findByCodigo(transacao.getAtivo())
		.map(ativo -> {
			int qtde = 0;
			double ci = 0;
			if (transacao.getTipo().equalsIgnoreCase("comprar")) {
				qtde = ativo.getQuantidade() + transacao.getQuantidade();
				ci = ativo.getCapitalInvestido() + (transacao.getValor() * transacao.getQuantidade());
			} else {
				qtde = ativo.getQuantidade() + transacao.getQuantidade();
				ci = ativo.getCapitalInvestido() + (transacao.getValor() * transacao.getQuantidade());
			}
			double pm = ci / qtde;
			ativo.setQuantidade(qtde);
			ativo.setCapitalInvestido(ci);
			ativo.setPrecoMedioIR(pm);
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

}
