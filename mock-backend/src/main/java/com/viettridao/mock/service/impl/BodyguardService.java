package com.viettridao.mock.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.viettridao.mock.converter.BodyguardConverter;
import com.viettridao.mock.dto.BodyguardDTO;
import com.viettridao.mock.entity.BodyguardEntity;
import com.viettridao.mock.exception.ResourceNotFoundException;
import com.viettridao.mock.repository.BodyguardRepository;
import com.viettridao.mock.service.IBodyguardService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BodyguardService implements IBodyguardService {

    private final BodyguardRepository bodyguardRepository;
    private final BodyguardConverter bodyguardConverter;

    @Override
    public List<BodyguardDTO> getBodyguards(int page, int size) {        
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<BodyguardEntity> entities = bodyguardRepository.getBodyguards(pageable);
        if (page > entities.getTotalPages() || page <= 0) {
            throw new ResourceNotFoundException("No users with page " + page);
        }

        return entities.stream().map(bodyguardConverter::toDTO).collect(Collectors.toList());
    }

    @Override
    public BodyguardDTO getBodyguardById(int bodyguardId) {
        BodyguardEntity bodyguardEntity = bodyguardRepository.getBodyguardById(bodyguardId);
        if (bodyguardEntity == null) {
            throw new ResourceNotFoundException("Bodyguard with id " + bodyguardId + " not found");
        }

        return bodyguardConverter.toDTO(bodyguardEntity);
    }
    
    @Override
    public BodyguardDTO addBodyguard(BodyguardDTO bodyguardDTO) {
        BodyguardEntity bodyguardEntity = bodyguardConverter.toEntity(bodyguardDTO);
        return bodyguardConverter.toDTO(bodyguardRepository.save(bodyguardEntity));
    }

}
