package com.viettridao.mock.converter;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.viettridao.mock.dto.BodyguardDTO;
import com.viettridao.mock.dto.RoleDTO;
import com.viettridao.mock.dto.UserDTO;
import com.viettridao.mock.entity.BodyguardEntity;
import com.viettridao.mock.entity.RoleEntity;
import com.viettridao.mock.entity.UserEntity;

@Component
public class UserConverter {

    private BodyguardConverter bodyguardConverter;

    private RoleConverter roleConverter;

    @Autowired
    public void setBodyguardConverter(@Lazy BodyguardConverter bodyguardConverter) {
        this.bodyguardConverter = bodyguardConverter;
    }

    @Autowired
    public void setRoleConverter(@Lazy RoleConverter roleConverter) {
        this.roleConverter = roleConverter;
    }

    public UserDTO toDTO(UserEntity entity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(entity.getUserId());
        userDTO.setFirstName(entity.getFirstName());
        userDTO.setLastName(entity.getLastName());
        userDTO.setEmail(entity.getEmail());
        userDTO.setPassword(entity.getPassword());
        userDTO.setAvatar(entity.getAvatar() != null ? Base64.getEncoder().encodeToString(entity.getAvatar()) : null);
        userDTO.setAddress(entity.getAddress());
        userDTO.setPhoneNumber(entity.getPhoneNumber());
        if (entity.getGender().contains("F")) {
            userDTO.setGender("Female");
        } else if (entity.getGender().contains("M")) {
            userDTO.setGender("Male");
        } else if (entity.getGender().contains("L")) {
            userDTO.setGender("Other");
        }
        userDTO.setDob(entity.getDob());
        userDTO.setStatus(entity.getStatus());
        userDTO.setBodyguard(toBodyguardDTO(entity.getBodyguard()));
        userDTO.setRole(toRoleDTO(entity.getRole()));

        return userDTO;
    }

    public UserEntity toEntity(UserDTO dto) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUserId(dto.getUserId());
        userEntity.setFirstName(dto.getFirstName());
        userEntity.setLastName(dto.getLastName());
        userEntity.setEmail(dto.getEmail());
        userEntity.setPassword(dto.getPassword());
        userEntity.setAvatar(dto.getAvatar() != null ? Base64.getDecoder().decode(dto.getAvatar()) : null);
        userEntity.setAddress(dto.getAddress());
        userEntity.setPhoneNumber(dto.getPhoneNumber());
        if (dto.getGender() == null || dto.getGender().toUpperCase().equals("Male".toUpperCase())) {
            userEntity.setGender("M");
        } else if (dto.getGender().toUpperCase().equals("Female".toUpperCase())) {
            userEntity.setGender("F");
        } else if (dto.getGender().toUpperCase().equals("Other".toUpperCase())) {
            userEntity.setGender("L");
        }
        userEntity.setDob(dto.getDob());
        userEntity.setStatus(dto.getStatus() == null ? "Active" : dto.getStatus());
        userEntity.setBodyguard(toBodyguardEntity(dto.getBodyguard()));
        userEntity.setRole(toRoleEntity(dto.getRole()));

        return userEntity;
    }

    private BodyguardDTO toBodyguardDTO(BodyguardEntity bodyguardEntity) {
        return bodyguardConverter.toDTO(bodyguardEntity);
    }

    private BodyguardEntity toBodyguardEntity(BodyguardDTO bodyguardDTO) {
        return bodyguardConverter.toEntity(bodyguardDTO);
    }

    private RoleDTO toRoleDTO(RoleEntity roleEntity) {
        return roleConverter.toDTO(roleEntity);
    }

    private RoleEntity toRoleEntity(RoleDTO roleDTO) {
        return roleConverter.toEntity(roleDTO);
    }

}
