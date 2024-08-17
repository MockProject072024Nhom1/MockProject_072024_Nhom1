package com.viettridao.mock.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "bodyguard")
public class BodyguardEntity {

    @Id
    private Integer bodyguardId;

    @Lob
    private byte[] certificate;

    private BigDecimal experience;

    private BigDecimal salary;

    private String health;

    private String skills;

    @Column(name = "bg_status")
    private String status;

    @MapsId
    @OneToOne
    @JoinColumn(name = "bodyguard_id", referencedColumnName = "user_id")
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "service_id")
    private ServiceEntity service;

    @OneToMany(mappedBy = "bodyguard", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TimekeepingEntity> timekeepingList = new ArrayList<>();
    
    @OneToMany(mappedBy = "bodyguard", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DayOffEntity> dayOffs = new ArrayList<>();

}
