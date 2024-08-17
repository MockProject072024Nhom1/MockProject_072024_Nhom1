package com.viettridao.mock.converter;

import java.time.LocalDate;
import java.util.Base64;

import org.springframework.stereotype.Component;

import com.viettridao.mock.dto.ContractDTO;
import com.viettridao.mock.entity.ContractEntity;

@Component
public class ContractConverter {

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

        return contractEntity;
    }    

}
