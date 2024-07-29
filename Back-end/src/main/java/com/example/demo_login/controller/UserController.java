package com.example.demo_login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo_login.service.UserService;
import com.example.demo_login.request.LoginRequest;
import com.example.demo_login.response.LoginResponse;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    /*
     * Handles the login request.
     *
     * @param loginRequest the login request containing email and password
     * @return a ResponseEntity containing a LoginResponse with the result of the login attempt
     */
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        if (userService.login(loginRequest.getEmail(), loginRequest.getPassword())) {
            return ResponseEntity.ok(new LoginResponse("Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponse("Invalid email or password"));
        }
    }
}
