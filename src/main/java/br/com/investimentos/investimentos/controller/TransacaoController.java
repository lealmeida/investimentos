package br.com.investimentos.investimentos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.investimentos.investimentos.model.Transacao;
import br.com.investimentos.investimentos.service.TransacaoService;

@CrossOrigin(origins="*")
@Controller
@RequestMapping(path="/investimentos/transacao")
public class TransacaoController {
	
	@Autowired
	TransacaoService transacaoService;
	
	@PostMapping(consumes = "application/json", produces =  "application/json")
	public ResponseEntity<Transacao> salvarTransacao(@RequestBody Transacao transacao) {
		transacao = transacaoService.salvarTransacao(transacao);
		return ResponseEntity.ok(transacao);
	}
	
	@GetMapping(produces = "application/json")
	public ResponseEntity<List<Transacao>> getTransacoes() {
		List<Transacao> response = transacaoService.getTransacoes();
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(path="/{id}")
	public ResponseEntity<?> deleteTransacao(@PathVariable long id) {
		transacaoService.deleteTransacao(id);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping(consumes = "application/json")
	public ResponseEntity<?> updateTransacao(@RequestBody Transacao transacao) {
		transacaoService.updateTransacao(transacao);
		return ResponseEntity.ok().build();
	}

}
