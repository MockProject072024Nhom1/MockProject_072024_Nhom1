package com.viettridao.mock.service;

import com.viettridao.mock.dto.UserDTO;

public interface IUserService {

    UserDTO addBodyguard(UserDTO user);

    UserDTO updateBodyguard(int id, UserDTO updatedUser);

    void banBodyguard(int id);

}
