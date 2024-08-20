package com.viettridao.mock.service.impl;

import java.util.Base64;

import org.springframework.stereotype.Service;

import com.viettridao.mock.converter.UserConverter;
import com.viettridao.mock.dto.UserDTO;
import com.viettridao.mock.entity.UserEntity;
import com.viettridao.mock.exception.ResourceNotFoundException;
import com.viettridao.mock.repository.UserRepository;
import com.viettridao.mock.service.IUserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserConverter userConverter;
    private final UserRepository userRepository;

    @Override
    public UserDTO addBodyguard(UserDTO user) {
        UserEntity userEntity = userConverter.toEntity(user);
        return userConverter.toDTO(userRepository.save(userEntity));
    }

    @Override
    public UserDTO updateBodyguard(int id, UserDTO updatedUser) {
        UserEntity userEntity = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " not found"));
        userEntity.setFirstName(updatedUser.getFirstName());
        userEntity.setLastName(updatedUser.getLastName());
        userEntity.setEmail(updatedUser.getEmail());
        userEntity.setPassword(updatedUser.getPassword());
        userEntity.setAvatar(updatedUser.getAvatar() != null ? Base64.getDecoder().decode(updatedUser.getAvatar()) : null);
        userEntity.setAddress(updatedUser.getAddress());
        userEntity.setPhoneNumber(updatedUser.getPhoneNumber());
        if (updatedUser.getGender() == null || updatedUser.getGender().toUpperCase().equals("Male".toUpperCase())) {
            userEntity.setGender("M");
        } else if (updatedUser.getGender().toUpperCase().equals("Female".toUpperCase())) {
            userEntity.setGender("F");
        } else if (updatedUser.getGender().toUpperCase().equals("Other".toUpperCase())) {
            userEntity.setGender("L");
        }
        userEntity.setDob(updatedUser.getDob());
        userEntity.setStatus(updatedUser.getStatus() == null ? "Active" : updatedUser.getStatus());

        return userConverter.toDTO(userRepository.save(userEntity));
    }

    @Override
    public void banBodyguard(int id) {
        UserEntity userEntity = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with " + id + " is not found"));
        userEntity.setStatus("Inactive");
        userRepository.save(userEntity);
    }

}
