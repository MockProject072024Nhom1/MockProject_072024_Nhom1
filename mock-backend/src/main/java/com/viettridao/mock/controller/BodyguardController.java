package com.viettridao.mock.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Base64;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.viettridao.mock.dto.BodyguardDTO;
import com.viettridao.mock.dto.UserDTO;
import com.viettridao.mock.service.IBodyguardService;
import com.viettridao.mock.service.IUserService;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/admin/bodyguard")
public class BodyguardController {

    private final IUserService userService;
    private final IBodyguardService bodyguardService;

    @GetMapping("/list")
    public ResponseEntity<List<BodyguardDTO>> getBodyguards(@RequestParam(value = "page") int page, 
                                                    @RequestParam(defaultValue = "10") int size) {
        List<BodyguardDTO> models = bodyguardService.getBodyguards(page, size);

        return ResponseEntity.ok(models);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BodyguardDTO> getBodyguardById(@PathVariable("id") int bodyguardId) {
        BodyguardDTO model = bodyguardService.getBodyguardById(bodyguardId);

        return ResponseEntity.ok(model);
    }

    @SuppressWarnings("null")
    @PostMapping("/add")
    public ResponseEntity<?> addBodyguard(@RequestParam(value = "firstName", required = false) String firstName, 
                                        @RequestParam(value = "lastName", required = false) String lastName, 
                                        @RequestParam(value = "email", required = false) String email, 
                                        @RequestParam(value = "avatar", required = false) MultipartFile avatar, 
                                        @RequestParam(value = "address", required = false) String address, 
                                        @RequestParam(value = "phoneNumber", required = false) String phoneNumber, 
                                        @RequestParam(value = "gender", required = false) String gender, 
                                        @RequestParam(value = "dob", required = false) LocalDate dob, 
                                        @RequestParam(value = "certificate", required = false) MultipartFile certificate, 
                                        @RequestParam(value = "experience", required = false) BigDecimal experience, 
                                        @RequestParam(value = "salary", required = false) BigDecimal salary, 
                                        @RequestParam(value = "health", required = false) String health, 
                                        @RequestParam(value = "skills", required = false) String skills) throws IOException {        
        UserDTO newUser = new UserDTO();
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);
        newUser.setEmail(email);
        newUser.setAddress(address);
        newUser.setPhoneNumber(phoneNumber);
        newUser.setGender(gender);
        newUser.setDob(dob);
        if (avatar != null && !avatar.isEmpty()) {
            if (!avatar.getContentType().startsWith("image/")) {
                return ResponseEntity.badRequest().body("The file is not an image format!");
            }
            newUser.setAvatar(Base64.getEncoder().encodeToString(avatar.getBytes()));            
        } else {
            newUser.setAvatar(null);
        }

        UserDTO savedUser = userService.addBodyguard(newUser);
        if (savedUser != null) {
            BodyguardDTO newBodyguard = new BodyguardDTO();
            newBodyguard.setBodyguardId(savedUser.getUserId());
            newBodyguard.setExperience(experience);
            newBodyguard.setSalary(salary);
            newBodyguard.setHealth(health);
            newBodyguard.setSkills(skills);
            if (certificate != null && !certificate.isEmpty()) {
                if (!certificate.getContentType().startsWith("image/")) {
                    return ResponseEntity.badRequest().body("The file is not an image format!");
                }
                newBodyguard.setCertificate(Base64.getEncoder().encodeToString(certificate.getBytes()));
            } else {
                newBodyguard.setCertificate(null);
            }

            BodyguardDTO savedBodyguard = bodyguardService.addBodyguard(newBodyguard);

            return new ResponseEntity<>(savedBodyguard, HttpStatus.OK);
        }

        return new ResponseEntity<>(savedUser, HttpStatus.OK);
    }

}
