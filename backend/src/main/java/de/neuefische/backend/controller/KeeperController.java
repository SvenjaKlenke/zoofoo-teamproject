package de.neuefische.backend.controller;

import de.neuefische.backend.service.ServiceKeeper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class KeeperController {

    private final ServiceKeeper serviceKeeper;

    @GetMapping("/user")
    public String getUserControllerOnly(Principal principal) {
        if (principal != null) {
            return principal.getName();
        }
        return "Not Logged in";
    }

    @GetMapping("/user2")
    public String getUserFromEverywhere() {
        System.out.println(SecurityContextHolder.getContext());
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }
}
