package com.team1.mockproject.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String firstName;
    private String lastName;

    @Column(unique = true)
    private String email;

    private String password;
    private String avatar;
    private String address;
    private String phoneNumber;
    private String gender;

    @Temporal(TemporalType.DATE)
    private Date dob;

    private String status;
    private Long roleId;
    private Long cityId;
}
