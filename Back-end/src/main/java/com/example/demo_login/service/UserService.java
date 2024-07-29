package com.example.demo_login.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    /*
     * Checks if the provided email and password are valid.
     *
     * @param email the email to check
     * @param password the password to check
     * @return true if the email is "admin" and the password is "admin", false otherwise
     */
    public boolean login(String email, String password) {
        return email.equals("admin@gmail.com") && password.equals("admin");
    }
}
