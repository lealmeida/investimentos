package br.com.investimentos.investimentos.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.investimentos.investimentos.model.Ativo;

@Repository
public interface AtivoRepository extends JpaRepository<Ativo, Long>{
	
	@Query("SELECT u FROM Ativo u WHERE u.codigo= :codigo")
	Optional<Ativo> findByCodigo(@Param("codigo") String codigo);

}
