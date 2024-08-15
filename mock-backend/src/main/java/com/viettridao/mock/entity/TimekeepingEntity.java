package com.viettridao.mock.entity;

import java.time.LocalDate;

import com.viettridao.mock.entity.impl.TimekeepingId;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "timekeeping")
public class TimekeepingEntity {

    @EmbeddedId
    private TimekeepingId timekeepingId;

    @ManyToOne
    @MapsId("bodyguardId")
    @JoinColumn(name = "bodyguard_id", nullable = false)
    private BodyguardEntity bodyguard;

    @ManyToOne
    @MapsId("contractId")
    @JoinColumn(name = "contract_id", nullable = false)
    private ContractEntity contract;

    @Column(name = "time_in")
    private LocalDate timeIn;

    @Column(name = "time_out")
    private LocalDate timeOut;

    @Column(name = "start_time")
    private LocalDate startTime;

    @Column(name = "end_time")
    private LocalDate endTime;
    
}
