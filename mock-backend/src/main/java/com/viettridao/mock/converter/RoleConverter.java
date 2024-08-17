package com.viettridao.mock.converter;

import org.springframework.stereotype.Component;

import com.viettridao.mock.dto.RoleDTO;
import com.viettridao.mock.entity.RoleEntity;

@Component
public class RoleConverter {

    public RoleDTO toDTO(RoleEntity entity) {
        RoleDTO roleDTO = new RoleDTO();
        roleDTO.setRoleId(entity.getRoleId());
        roleDTO.setName(entity.getName());

        return roleDTO;
    }

    public RoleEntity toEntity(RoleDTO dto) {
        RoleEntity roleEntity = new RoleEntity();
        roleEntity.setRoleId(dto.getRoleId());
        roleEntity.setName(dto.getName());

        return roleEntity;
    }

}
