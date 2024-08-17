package com.viettridao.mock.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.viettridao.mock.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    @Query(value = "SELECT u.*, bg.* FROM [user] u JOIN bodyguard bg ON u.user_id = bg.bodyguard_id WHERE u.role_id like 4", 
        countQuery = "SELECT COUNT(u.user_id) FROM [user] u JOIN bodyguard bg ON u.user_id = bg.bodyguard_id WHERE u.role_id like 4", 
        nativeQuery = true)
    Page<UserEntity> getBodyguards(Pageable pageable);

    @Query(value = "SELECT u.*, bg.* FROM [user] u JOIN bodyguard bg ON u.user_id = bg.bodyguard_id WHERE u.role_id like 4 AND bg.bodyguard_id like ?1", 
        nativeQuery = true)
    UserEntity getBodyguardById(int bodyguardId);

}
