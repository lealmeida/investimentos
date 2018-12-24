package br.com.investimentos.investimentos.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Entity
@Table(name="transacao")
@Data
public class Transacao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String ativo;
	private String empresa;
	private String setor;
	@Temporal(TemporalType.DATE)
	private Date dataCompra;
	private int quantidade;
	private BigDecimal valor;
	private String tipo;

}
