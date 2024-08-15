package com.viettridao.mock.dto;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class RatingDTO {

    private CustomerDTO customer;
    private ContractDTO contract;
    private BigDecimal rate;
    private String feedback;

}
