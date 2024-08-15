package com.viettridao.mock.dto;

import lombok.Data;

@Data
public class RegistrationDTO {

    private Integer registrationId;
    private String requirement;
    private Integer manQuantity;
    private Integer womanQuantity;
    private String venue;
    private String status;
    private CustomerDTO customer;
    private ServiceDTO service;
    private ContractDTO contract;
}
