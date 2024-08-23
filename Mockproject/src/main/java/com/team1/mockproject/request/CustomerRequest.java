package com.team1.mockproject.request;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerRequest {

    private Long userId; // Reference to the User entity
    private Date registrationDate;
    private String bio;
}
