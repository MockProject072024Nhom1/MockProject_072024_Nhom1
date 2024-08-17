package com.viettridao.mock.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.viettridao.mock.entity.ContractEntity;

@Repository
public interface ContractRepository extends JpaRepository<ContractEntity, Integer> {

    @Query(value = "SELECT c.* FROM [contract] c", 
            countQuery = "SELECT COUNT(c.contract_id) FROM [contract] c", 
            nativeQuery = true)
    Page<ContractEntity> getContracts(Pageable pageable);

}
