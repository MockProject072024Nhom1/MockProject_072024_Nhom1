package com.viettridao.mock.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data
public class HolidayDTO {

    private Integer holidayId;
    private String name;
    private String type;
    private LocalDate date;
    private BigDecimal surcharge;
    private List<ContractDTO> contracts;
}
