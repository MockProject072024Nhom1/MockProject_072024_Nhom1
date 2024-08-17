package com.viettridao.mock.service.impl;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.viettridao.mock.converter.ContractConverter;
import com.viettridao.mock.dto.ContractDTO;
import com.viettridao.mock.entity.ContractEntity;
import com.viettridao.mock.exception.ResourceNotFoundException;
import com.viettridao.mock.repository.ContractRepository;
import com.viettridao.mock.service.IContractService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContractService implements IContractService{

    private final ContractRepository contractRepository;
    private final ContractConverter contractConverter;
    
    @Override
    public List<ContractDTO> getContracts(int page, int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<ContractEntity> entities = contractRepository.getContracts(pageable);
        if (entities.isEmpty()) {
            if (page > entities.getTotalPages() || page <= 0) {
                throw new ResourceNotFoundException("No contracts with page: " + page);
            }
        }

        return entities.stream().map(contractConverter::toDTO).collect(Collectors.toList());
    }

    @Override
    public ContractDTO getContractById(int id) {
        ContractEntity contractEntity = contractRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contract with id " + id + " not found"));
        ContractDTO contractDTO = contractConverter.toDTO(contractEntity);
        return contractDTO;
    }

    @Override
    @Transactional
    public ContractDTO addContract(ContractDTO contract) {
        ContractEntity contractEntity = contractConverter.toEntity(contract);
        return contractConverter.toDTO(contractRepository.save(contractEntity));
    }

    @Override
    @Transactional
    public ContractDTO updateContract(int id, ContractDTO updatedContract) {
        ContractEntity contractEntity = contractRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contract with id " + id + " not found"));
        contractEntity.setName(updatedContract.getName());
        contractEntity.setStartDate(updatedContract.getStartDate());
        contractEntity.setFinishDate(updatedContract.getFinishDate());
        contractEntity.setCost(updatedContract.getCost());
        contractEntity.setPaymentMethod(updatedContract.getPaymentMethod());
        contractEntity.setPaymentStatus(updatedContract.getPaymentStatus());
        contractEntity.setContractStatus(updatedContract.getContractStatus());
        contractEntity.setFile(updatedContract.getFile() != null ? Base64.getDecoder().decode(updatedContract.getFile()) : null);

        return contractConverter.toDTO(contractRepository.save(contractEntity));
    }

}
