package com.viettridao.mock.converter;

import org.springframework.stereotype.Component;

import com.viettridao.mock.dto.ServiceDTO;
import com.viettridao.mock.entity.ServiceEntity;

@Component
public class ServiceConverter {

    public ServiceDTO toDTO(ServiceEntity entity) {
        ServiceDTO serviceDTO = new ServiceDTO();
        serviceDTO.setServiceId(entity.getServiceId());
        serviceDTO.setName(entity.getName());
        serviceDTO.setDescription(entity.getDescription());

        return serviceDTO;
    }

    public ServiceEntity toEntity(ServiceDTO dto) {
        ServiceEntity serviceEntity = new ServiceEntity();
        serviceEntity.setServiceId(dto.getServiceId());
        serviceEntity.setName(dto.getName());
        serviceEntity.setDescription(dto.getDescription());

        return serviceEntity;
    }

}
