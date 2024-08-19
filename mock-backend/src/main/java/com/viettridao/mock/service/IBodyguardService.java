package com.viettridao.mock.service;

import java.util.List;

import com.viettridao.mock.dto.BodyguardDTO;

public interface IBodyguardService {

    List<BodyguardDTO> getBodyguards(int page, int size);

    BodyguardDTO getBodyguardById(int bodyguardId);

    BodyguardDTO addBodyguard(BodyguardDTO bodyguardDTO);

}
