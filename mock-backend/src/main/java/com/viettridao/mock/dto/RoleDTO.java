package com.viettridao.mock.dto;

import java.util.List;

import lombok.Data;

@Data
public class RoleDTO {

    private Integer roleId;
    private String name;
    private List<UserDTO> users;
}
