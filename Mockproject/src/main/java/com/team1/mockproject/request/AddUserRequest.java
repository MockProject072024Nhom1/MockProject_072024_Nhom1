package com.team1.mockproject.request;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddUserRequest {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String avatar;
    private String address;
    private String phoneNumber;
    private String gender;
    private Date dob;
    private String status;
    private Long roleId;
    private Long cityId;
}
