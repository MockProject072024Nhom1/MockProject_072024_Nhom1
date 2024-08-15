package com.viettridao.mock.entity;

import java.math.BigDecimal;

import com.viettridao.mock.entity.impl.RatingId;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "rating")
public class RatingEntity {

    @EmbeddedId
    private RatingId ratingId;

    @ManyToOne
    @MapsId("customerId")
    @JoinColumn(name = "customer_id")
    private CustomerEntity customer;

    @ManyToOne
    @MapsId("contractId")
    @JoinColumn(name = "contract_id")
    private ContractEntity contract;

    private BigDecimal rate;

    private String feedback;

}
