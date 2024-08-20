package com.viettridao.mock.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Base64;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.viettridao.mock.dto.ContractDTO;
import com.viettridao.mock.dto.SupervisorDTO;
import com.viettridao.mock.service.IContractService;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/contract")
public class ContractController {

    private final IContractService contractService;

    @GetMapping("/list")
    public ResponseEntity<List<ContractDTO>> getContracts(@RequestParam("page") int page, 
                                                        @RequestParam(defaultValue = "10") int size) {
        List<ContractDTO> contracts = contractService.getContracts(page, size);
        return ResponseEntity.ok(contracts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContractDTO> getContractById(@PathVariable("id") int contractId) {
        ContractDTO contract = contractService.getContractById(contractId);
        return ResponseEntity.ok(contract);
    }

    @SuppressWarnings("null")
    @PostMapping("/add")
    public ResponseEntity<?> addContract(@RequestParam(value = "name", required = false) String name, 
                                        @RequestParam(value = "startDate", required = false) LocalDate startDate, 
                                        @RequestParam(value = "finishDate", required = false) LocalDate finishDate, 
                                        @RequestParam(value = "cost", required = false) BigDecimal cost, 
                                        @RequestParam(value = "paymentMethod", required = false) String paymentMethod, 
                                        @RequestParam(value = "paymentStatus", required = false) String paymentStatus, 
                                        @RequestParam(value = "contractStatus", required = false) String contractStatus, 
                                        @RequestParam(value = "file", required = false) MultipartFile file, 
                                        @RequestParam(value = "supervisorId", required = false) Integer supervisorId) throws IOException {
        ContractDTO newContract = new ContractDTO();
        newContract.setName(name);
        newContract.setStartDate(startDate);
        newContract.setFinishDate(finishDate);
        newContract.setCost(cost);
        newContract.setPaymentMethod(paymentMethod);
        newContract.setPaymentStatus(paymentStatus);
        newContract.setContractStatus(contractStatus);
        if (file != null && !file.isEmpty()) {
            if (!file.getContentType().startsWith("image/")) {
                return ResponseEntity.badRequest().body("The file is not an image format!");
            }
            newContract.setFile(Base64.getEncoder().encodeToString(file.getBytes()));
        } else {
            newContract.setFile(null);
        }

        if (supervisorId != null) {
            SupervisorDTO supervisorDTO = new SupervisorDTO();
            supervisorDTO.setSupervisorId(supervisorId);
            newContract.setSupervisor(supervisorDTO);
        }

        ContractDTO savedContract = contractService.addContract(newContract);

        return new ResponseEntity<>(savedContract, HttpStatus.OK);
    }

    @SuppressWarnings("null")
    @PutMapping("edit/{id}")
    public ResponseEntity<?> updateContract(@PathVariable("id") int id, 
                                            @RequestParam(value = "name", required = false) String name, 
                                            @RequestParam(value = "startDate", required = false) LocalDate startDate, 
                                            @RequestParam(value = "finishDate", required = false) LocalDate finishDate, 
                                            @RequestParam(value = "cost", required = false) BigDecimal cost, 
                                            @RequestParam(value = "paymentMethod", required = false) String paymentMethod, 
                                            @RequestParam(value = "paymentStatus", required = false) String paymentStatus, 
                                            @RequestParam(value = "contractStatus", required = false) String contractStatus, 
                                            @RequestParam(value = "file", required = false) MultipartFile file, 
                                            @RequestParam(value = "supervisorId", required = false) Integer supervisorId) throws IOException {
        ContractDTO existedContract = new ContractDTO();
        existedContract.setName(name);
        existedContract.setStartDate(startDate);
        existedContract.setFinishDate(finishDate);
        existedContract.setCost(cost);
        existedContract.setPaymentMethod(paymentMethod);
        existedContract.setPaymentStatus(paymentStatus);
        existedContract.setContractStatus(contractStatus);
        if (file != null && !file.isEmpty()) {
            if (!file.getContentType().startsWith("image/")) {
                return ResponseEntity.badRequest().body("The file is not an image format!");
            }
            existedContract.setFile(Base64.getEncoder().encodeToString(file.getBytes()));
        } else {
            existedContract.setFile(null);
        }

        if (supervisorId != null) {
            SupervisorDTO supervisorDTO = new SupervisorDTO();
            supervisorDTO.setSupervisorId(supervisorId);
            existedContract.setSupervisor(supervisorDTO);
        }

        ContractDTO updatedContract = contractService.updateContract(id, existedContract);

        return new ResponseEntity<>(updatedContract, HttpStatus.OK);
    }

}
