package com.viettridao.mock.dto;

import java.util.List;

import lombok.Data;

@Data
public class ServiceDTO {

    private Integer serviceId;
    private String name;
    private String description;
    private List<SupervisorDTO> supervisors;
    private List<BodyguardDTO> bodyguards;
    private List<RegistrationDTO> registrations;
}
