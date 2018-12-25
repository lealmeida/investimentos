package br.com.investimentos.investimentos.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="ativo")
@Data
public class Ativo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String codigo;
	private String empresa;
	private String setor;
	private double precoMedioIR;
	private double precoMedioReal;
	private int quantidade;
	private double capitalInvestido;
	private String tipo;

}
