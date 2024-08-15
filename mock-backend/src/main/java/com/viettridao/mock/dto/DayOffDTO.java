package com.viettridao.mock.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.viettridao.mock.entity.BodyguardEntity;

import lombok.Data;

@Data
public class DayOffDTO {

    private Integer bodyguardId;
    private LocalDate day;
    private LocalTime time;
    private String subject;
    private String reason;
    private String status;
    private BodyguardEntity bodyguard;
    
}
