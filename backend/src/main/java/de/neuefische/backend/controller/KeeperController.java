package de.neuefische.backend.controller;

import de.neuefische.backend.service.ServiceKeeper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/keeper")
@RequiredArgsConstructor
public class KeeperController {

    private final ServiceKeeper serviceKeeper;

    @GetMapping("/user")
    public String getUserFromEverywhere() {
        System.out.println(SecurityContextHolder.getContext());
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @PostMapping("/login")
    String login() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
