package com.viettridao.mock.service.impl;

import org.springframework.stereotype.Service;

import com.viettridao.mock.converter.UserConverter;
import com.viettridao.mock.dto.UserDTO;
import com.viettridao.mock.entity.UserEntity;
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
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public void banBodyguard(int id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'banUser'");
    }

}
