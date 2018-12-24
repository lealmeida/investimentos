package br.com.investimentos.investimentos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.investimentos.investimentos.model.Transacao;

public interface TransacaoRepository extends JpaRepository<Transacao, Long>{

}
