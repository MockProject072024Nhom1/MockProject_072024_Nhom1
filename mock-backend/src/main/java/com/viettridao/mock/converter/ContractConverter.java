package com.viettridao.mock.converter;

import java.time.LocalDate;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.viettridao.mock.dto.ContractDTO;
import com.viettridao.mock.dto.SupervisorDTO;
import com.viettridao.mock.entity.ContractEntity;
import com.viettridao.mock.entity.SupervisorEntity;

@Component
public class ContractConverter {

    private SupervisorConverter supervisorConverter;

    @Autowired
    public void setSupervisorConverter(@Lazy SupervisorConverter supervisorConverter) {
        this.supervisorConverter = supervisorConverter;
    }

    public ContractDTO toDTO(ContractEntity entity) {
        ContractDTO contractDTO = new ContractDTO();
        contractDTO.setContractId(entity.getContractId());
        contractDTO.setName(entity.getName());
        contractDTO.setCreatedAt(entity.getCreatedAt());
        contractDTO.setStartDate(entity.getStartDate());
        contractDTO.setFinishDate(entity.getFinishDate());
        contractDTO.setCost(entity.getCost());
        contractDTO.setPaymentMethod(entity.getPaymentMethod());
        contractDTO.setPaymentStatus(entity.getPaymentStatus());
        contractDTO.setContractStatus(entity.getContractStatus());
        contractDTO.setFile(entity.getFile() != null ? Base64.getEncoder().encodeToString(entity.getFile()) : null);
        contractDTO.setSupervisor(entity.getSupervisor() != null ? toDTOSupervisor(entity.getSupervisor()) : null);

        return contractDTO;
    }

    public ContractEntity toEntity(ContractDTO dto) {
        ContractEntity contractEntity = new ContractEntity();
        contractEntity.setContractId(dto.getContractId());
        contractEntity.setName(dto.getName());
        contractEntity.setCreatedAt(LocalDate.now());
        contractEntity.setStartDate(dto.getStartDate());
        contractEntity.setFinishDate(dto.getFinishDate());
        contractEntity.setCost(dto.getCost());
        contractEntity.setPaymentMethod(dto.getPaymentMethod());
        contractEntity.setPaymentStatus(dto.getPaymentStatus());
        contractEntity.setContractStatus(dto.getContractStatus());
        contractEntity.setFile(dto.getFile() != null ? Base64.getDecoder().decode(dto.getFile()) : null);
        contractEntity.setSupervisor(dto.getSupervisor() != null ? toEntitySupervisor(dto.getSupervisor()) : null);

        return contractEntity;
    }    

    private SupervisorEntity toEntitySupervisor(SupervisorDTO supervisorDTO) {
        return supervisorConverter.toEntity(supervisorDTO);
    }

    private SupervisorDTO toDTOSupervisor(SupervisorEntity supervisorEntity) {
        return supervisorConverter.toDTO(supervisorEntity);
    }

}
