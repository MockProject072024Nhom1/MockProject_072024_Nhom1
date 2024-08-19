package com.viettridao.mock.converter;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.viettridao.mock.dto.BodyguardDTO;
import com.viettridao.mock.dto.ServiceDTO;
import com.viettridao.mock.dto.UserDTO;
import com.viettridao.mock.entity.BodyguardEntity;
import com.viettridao.mock.entity.ServiceEntity;
import com.viettridao.mock.entity.UserEntity;

@Component
public class BodyguardConverter {
    
    private ServiceConverter serviceConverter;
    private UserConverter userConverter;

    @Autowired
    public void setServiceConverter(@Lazy ServiceConverter serviceConverter) {
        this.serviceConverter = serviceConverter;
    }

    @Autowired
    public void setUserConverter(@Lazy UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    public BodyguardDTO toDTO(BodyguardEntity entity) {
        BodyguardDTO bodyguardDTO = new BodyguardDTO();
        bodyguardDTO.setBodyguardId(entity.getBodyguardId());
        bodyguardDTO.setCertificate(entity.getCertificate() != null ? Base64.getEncoder().encodeToString(entity.getCertificate()) : null);
        bodyguardDTO.setExperience(entity.getExperience());
        bodyguardDTO.setSalary(entity.getSalary());
        bodyguardDTO.setHealth(entity.getHealth());
        bodyguardDTO.setSkills(entity.getSkills());
        bodyguardDTO.setStatus(entity.getStatus());
        bodyguardDTO.setService(entity.getService() != null ? toServiceDTO(entity.getService()) : null);
        bodyguardDTO.setUser(entity.getUser() != null ? toUserDTO(entity.getUser()) : null);

        return bodyguardDTO;
    }

    public BodyguardEntity toEntity(BodyguardDTO dto) {
        BodyguardEntity bodyguardEntity = new BodyguardEntity();
        bodyguardEntity.setBodyguardId(dto.getBodyguardId());
        bodyguardEntity.setCertificate(dto.getCertificate() != null ? Base64.getDecoder().decode(dto.getCertificate()) : null);
        bodyguardEntity.setExperience(dto.getExperience());
        bodyguardEntity.setSalary(dto.getSalary());
        bodyguardEntity.setHealth(dto.getHealth());
        bodyguardEntity.setSkills(dto.getSkills());
        bodyguardEntity.setStatus(dto.getStatus() != null ? dto.getStatus() : "Working");
        bodyguardEntity.setService(dto.getService() != null ? toServiceEntity(dto.getService()) : null);
        bodyguardEntity.setUser(dto.getUser() != null ? toUserEntity(dto.getUser()) : null);

        return bodyguardEntity;
    }

    private ServiceDTO toServiceDTO(ServiceEntity serviceEntity) {
        return serviceConverter.toDTO(serviceEntity);
    }

    private ServiceEntity toServiceEntity(ServiceDTO serviceDTO) {
        return serviceConverter.toEntity(serviceDTO);
    }

    private UserDTO toUserDTO(UserEntity userEntity) {
        return userConverter.toDTO(userEntity);
    }

    private UserEntity toUserEntity(UserDTO userDTO) {
        return userConverter.toEntity(userDTO);
    }

}
