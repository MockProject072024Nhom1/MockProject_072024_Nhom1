package com.viettridao.mock.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.viettridao.mock.dto.UserDTO;
import com.viettridao.mock.service.IUserService;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/admin/bodyguard")
public class BodyguardController {

    private final IUserService userService;

    @GetMapping("/list")
    public ResponseEntity<List<UserDTO>> getBodyguards(@RequestParam(value = "page") int page, 
                                                    @RequestParam(defaultValue = "10") int size) {
        List<UserDTO> models = userService.getBodyguards(page, size);

        return ResponseEntity.ok(models);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getBodyguardById(@PathVariable("id") int bodyguardId) {
        UserDTO model = userService.getBodyguardById(bodyguardId);

        return ResponseEntity.ok(model);
    }

}
