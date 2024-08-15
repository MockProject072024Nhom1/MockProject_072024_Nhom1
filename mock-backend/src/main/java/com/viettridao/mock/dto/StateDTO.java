package com.viettridao.mock.dto;

import java.util.List;

import lombok.Data;

@Data
public class StateDTO {

    private Integer stateId;
	private String name;
    private List<CityDTO> cities;
}
