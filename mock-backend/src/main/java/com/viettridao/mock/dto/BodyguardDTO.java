package com.viettridao.mock.dto;

import java.math.BigDecimal;
import java.util.List;

import lombok.Data;

@Data
public class BodyguardDTO {

    private Integer bodyguardId;
    private String certificate;
    private BigDecimal experience;
    private BigDecimal salary;
    private String health;
    private String skills;
    private String status;
    private UserDTO user;
    private ServiceDTO service;
    private List<TimekeepingDTO> timekeepingList;
    private List<DayOffDTO> dayOffs;

}
