package com.viettridao.mock.service;

import java.util.List;

import com.viettridao.mock.dto.UserDTO;

public interface IUserService {

    List<UserDTO> getBodyguards(int page, int size);

    UserDTO getBodyguardById(int bodyguardId);

    UserDTO addBodyguard(UserDTO user);

    UserDTO updateBodyguard(int id, UserDTO updatedUser);

    void banBodyguard(int id);

}
