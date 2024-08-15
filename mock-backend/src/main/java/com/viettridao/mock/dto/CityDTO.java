package com.viettridao.mock.dto;

import java.util.List;

import lombok.Data;

@Data
public class CityDTO {

    private Integer cityId;
	private String name;
    private StateDTO state;
    private List<UserDTO> users;
}
