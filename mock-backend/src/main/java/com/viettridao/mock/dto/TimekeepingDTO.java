package com.viettridao.mock.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class TimekeepingDTO {

    private BodyguardDTO bodyguard;
    private ContractDTO contract;
    private LocalDate timeIn;
    private LocalDate timeOut;
    private LocalDate startTime;
    private LocalDate endTime;
}
