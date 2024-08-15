package com.viettridao.mock.dto;

import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data
public class CustomerDTO {

    private Integer customerId;
    private LocalDate registrationDate;
    private String bio;
    private UserDTO user;
    private List<RegistrationDTO> registrations;
}
