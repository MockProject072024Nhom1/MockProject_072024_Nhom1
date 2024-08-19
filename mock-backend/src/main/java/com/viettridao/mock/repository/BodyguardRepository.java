package com.viettridao.mock.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.viettridao.mock.entity.BodyguardEntity;

@Repository
public interface BodyguardRepository extends JpaRepository<BodyguardEntity, Integer> {

    
    @Query(value = "SELECT u.*, bg.* FROM [user] u JOIN bodyguard bg ON u.user_id = bg.bodyguard_id WHERE u.role_id like 4", 
        countQuery = "SELECT COUNT(u.user_id) FROM [user] u JOIN bodyguard bg ON u.user_id = bg.bodyguard_id WHERE u.role_id like 4", 
        nativeQuery = true)
    Page<BodyguardEntity> getBodyguards(Pageable pageable);

    @Query(value = "SELECT u.*, bg.* FROM [user] u JOIN bodyguard bg ON u.user_id = bg.bodyguard_id WHERE u.role_id like 4 AND bg.bodyguard_id like ?1", 
        nativeQuery = true)
    BodyguardEntity getBodyguardById(int bodyguardId);

    boolean existsByBodyguardId(int bodyguardId);

}
