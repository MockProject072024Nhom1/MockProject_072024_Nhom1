package com.viettridao.mock.dto;

import java.math.BigDecimal;
import java.util.List;

import lombok.Data;

@Data
public class SupervisorDTO {

    private Integer supervisorId;
    private String certificate;
    private BigDecimal experience;
    private BigDecimal salary;
    private String health;
    private String skills;
    private String status;
    private UserDTO user;
    private ServiceDTO service;
    private List<ContractDTO> contracts;
}
