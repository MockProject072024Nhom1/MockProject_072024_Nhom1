package com.viettridao.mock.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data
public class ContractDTO {

    private Integer contractId;
    private String name;
    private LocalDate createdAt;
    private LocalDate startDate;
    private LocalDate finishDate;
    private BigDecimal cost;
    private String paymentMethod;
    private String paymentStatus;
    private String contractStatus;
    private String file;
    private SupervisorDTO supervisor;
    private RegistrationDTO registration;
    private HolidayDTO holiday;
    private List<TimekeepingDTO> timekeepingList;
    private List<RatingDTO> ratings;

}
