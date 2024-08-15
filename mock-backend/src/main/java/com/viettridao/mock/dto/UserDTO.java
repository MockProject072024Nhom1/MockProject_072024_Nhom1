package com.viettridao.mock.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UserDTO {

    private Integer userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String avatar;
    private String address;
    private String phoneNumber;
    private String gender;
    private LocalDate dob;
    private String status;
    private RoleDTO role;
    private CityDTO city;
    private CustomerDTO customer;
    private SupervisorDTO supervisor;
    private BodyguardDTO bodyguard;
}
