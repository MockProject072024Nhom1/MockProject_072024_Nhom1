package com.team1.mockproject.service;

import com.team1.mockproject.model.User;
import com.team1.mockproject.request.AddUserRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {

    User createUser(AddUserRequest userRequest);

    Optional<User> getUserById(Long userId);

    User updateUser(Long userId, AddUserRequest userRequest);

    void deleteUser(Long userId);

    Optional<User> getUserByEmail(String email);
}
