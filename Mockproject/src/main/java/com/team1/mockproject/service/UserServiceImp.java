package com.team1.mockproject.service;

import com.team1.mockproject.model.User;
import com.team1.mockproject.repository.UserRepository;
import com.team1.mockproject.request.AddUserRequest;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(AddUserRequest userRequest) {

        User user = new User();
        user.setFirstName(userRequest.getFirstName());
        user.setLastName(userRequest.getLastName());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword()); // Consider encoding the password
        user.setAvatar(userRequest.getAvatar());
        user.setAddress(userRequest.getAddress());
        user.setPhoneNumber(userRequest.getPhoneNumber());
        user.setGender(userRequest.getGender());
        user.setDob(userRequest.getDob());
        user.setStatus(userRequest.getStatus());
        user.setRoleId(userRequest.getRoleId());
        user.setCityId(userRequest.getCityId());

        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    @Override
    public User updateUser(Long userId, AddUserRequest userRequest) {

        Optional<User> existingUser = userRepository.findById(userId);
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            user.setFirstName(userRequest.getFirstName());
            user.setLastName(userRequest.getLastName());
            user.setEmail(userRequest.getEmail());
            user.setPassword(userRequest.getPassword()); // Consider encoding the password
            user.setAvatar(userRequest.getAvatar());
            user.setAddress(userRequest.getAddress());
            user.setPhoneNumber(userRequest.getPhoneNumber());
            user.setGender(userRequest.getGender());
            user.setDob(userRequest.getDob());
            user.setStatus(userRequest.getStatus());
            user.setRoleId(userRequest.getRoleId());
            user.setCityId(userRequest.getCityId());

            return userRepository.save(user);
        }
        return null; // Or throw a custom exception
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return Optional.ofNullable(userRepository.findByEmail(email));
    }
}
