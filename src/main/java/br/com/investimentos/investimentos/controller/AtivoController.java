package br.com.investimentos.investimentos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.investimentos.investimentos.model.Ativo;
import br.com.investimentos.investimentos.service.AtivoService;

@CrossOrigin(origins="*")
@Controller
@RequestMapping(path="/investimentos/ativo")
public class AtivoController {
	
	@Autowired
	AtivoService ativoService;
	
	@GetMapping(produces = "application/json")
	public ResponseEntity<List<Ativo>> getTransacoes() {
		List<Ativo> response = ativoService.getAtivos();
		return ResponseEntity.ok(response);
	}
	

}
