package de.neuefische.backend.controller;

import de.neuefische.backend.service.ServiceKeeper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final ServiceKeeper serviceKeeper;

    @GetMapping
    public String getMeControllerOnly(Principal principal) {
        return principal.getName();
    }
}
