package com.viettridao.mock.converter;

import java.util.Base64;

import org.springframework.stereotype.Component;

import com.viettridao.mock.dto.SupervisorDTO;
import com.viettridao.mock.entity.SupervisorEntity;

@Component
public class SupervisorConverter {

    public SupervisorDTO toDTO(SupervisorEntity entity) {
        SupervisorDTO supervisorDTO = new SupervisorDTO();
        supervisorDTO.setSupervisorId(entity.getSupervisorId());
        supervisorDTO.setCertificate(entity.getCertificate() != null ? Base64.getEncoder().encodeToString(entity.getCertificate()) : null);
        supervisorDTO.setExperience(entity.getExperience());
        supervisorDTO.setSalary(entity.getSalary());
        supervisorDTO.setHealth(entity.getHealth());
        supervisorDTO.setSkills(entity.getSkills());
        supervisorDTO.setStatus(entity.getStatus());
        
        return supervisorDTO;
    }

    public SupervisorEntity toEntity(SupervisorDTO dto) {
        SupervisorEntity supervisorEntity = new SupervisorEntity();
        supervisorEntity.setSupervisorId(dto.getSupervisorId());
        supervisorEntity.setCertificate(dto.getCertificate() != null ? Base64.getDecoder().decode(dto.getCertificate()) : null);
        supervisorEntity.setExperience(dto.getExperience());
        supervisorEntity.setSalary(dto.getSalary());
        supervisorEntity.setHealth(dto.getHealth());
        supervisorEntity.setSkills(dto.getSkills());
        supervisorEntity.setStatus(dto.getStatus());
        
        return supervisorEntity;
    }

}
