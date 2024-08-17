package com.viettridao.mock.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "[user]")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;
    
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String email;

    private String password;

    @Lob
    private byte[] avatar;

    private String address;

    @Column(name = "phone_number")
    private String phoneNumber;

    private String gender;

    private LocalDate dob;

    @Column(name = "user_status")
    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private RoleEntity role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    private CityEntity city;

    @OneToOne(mappedBy = "user")
    private CustomerEntity customer;
    
    @OneToOne(mappedBy = "user")
    private SupervisorEntity supervisor;

    @OneToOne(mappedBy = "user")
    private BodyguardEntity bodyguard;

}
