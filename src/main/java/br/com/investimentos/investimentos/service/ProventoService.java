package br.com.investimentos.investimentos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import br.com.investimentos.investimentos.exception.InvestimentosException;
import br.com.investimentos.investimentos.model.Provento;
import br.com.investimentos.investimentos.repository.ProventoRepository;

@Configuration
public class ProventoService {

	@Autowired
	private ProventoRepository proventoRepository;

	@Autowired
	private AtivoService ativoService;
	
	public List<Provento> getProventos() {
		return proventoRepository.findAll();
	}

	public Provento salvarProventos(Provento provento) throws InvestimentosException {
		ativoService.diminuirPrecoMedioReal(provento.getAtivo(), provento.getValor());
		return proventoRepository.save(provento);
	}

	public void deleteProvento(long id) {
		proventoRepository.deleteById(id);
	}

}
