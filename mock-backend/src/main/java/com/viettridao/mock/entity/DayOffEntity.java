package com.viettridao.mock.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "day_off")
public class DayOffEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "day_off_id")
    private Integer dayOffId;

    private LocalDate day;

    private LocalTime time;

    private String subject;

    private String reason;

    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bodyguard_id")
    private BodyguardEntity bodyguard;

}
