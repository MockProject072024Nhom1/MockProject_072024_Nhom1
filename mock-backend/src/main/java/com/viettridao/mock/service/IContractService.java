package com.viettridao.mock.service;

import java.util.List;

import com.viettridao.mock.dto.ContractDTO;

public interface IContractService {

    List<ContractDTO> getContracts(int page, int size);

    ContractDTO getContractById(int id);

    ContractDTO addContract(ContractDTO contract);

    ContractDTO updateContract(int id, ContractDTO updatedContract);

}
