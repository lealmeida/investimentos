package br.com.investimentos.investimentos.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.investimentos.investimentos.exception.InvestimentosException;
import br.com.investimentos.investimentos.model.Provento;
import br.com.investimentos.investimentos.model.RespostaErro;
import br.com.investimentos.investimentos.service.ProventoService;

@CrossOrigin(origins="*")
@Controller
@RequestMapping(path="/investimentos/proventos")
public class ProventoController {
	
	@Autowired
	ProventoService proventoService;
	
	@GetMapping(produces = "application/json")
	public ResponseEntity<List<Provento>> getProventos() {
		List<Provento> response = proventoService.getProventos();
		return ResponseEntity.ok(response);
	}
	
	@PostMapping(consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> salvarProvento(@RequestBody Provento provento) {
		Provento response;
		try {
			response = proventoService.salvarProventos(provento);
		} catch (InvestimentosException e) {
			RespostaErro respostaErro = new RespostaErro();
			respostaErro.setCodigo(e.getInvestimentosErro().getCode());
			respostaErro.setMensagem(e.getInvestimentosErro().getError());
			return ResponseEntity.status(400).body(respostaErro);
		}
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deleteProvento(@PathParam(value = "id") long id) {
		proventoService.deleteProvento(id);
		return ResponseEntity.ok().build();
	}
	

}
