package com.viettridao.mock.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    public List<UserDTO> getBodyguards(int page, int size) {        
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<UserEntity> entities = userRepository.getBodyguards(pageable);
        if (page > entities.getTotalPages() || page <= 0) {
            throw new ResourceNotFoundException("No users with page " + page);
        }

        return entities.stream().map(userConverter::toDTO).collect(Collectors.toList());
    }

    @Override
    public UserDTO getBodyguardById(int bodyguardId) {
        UserEntity userEntity = userRepository.getBodyguardById(bodyguardId);
        if (userEntity == null) {
            throw new ResourceNotFoundException("Bodyguard with id " + bodyguardId + " not found");
        }

        return userConverter.toDTO(userEntity);
    }

    @Override
    public UserDTO addBodyguard(UserDTO user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'addUser'");
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
