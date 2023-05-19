package de.neuefische.backend.Controller;

import de.neuefische.backend.Model.Animals;
import de.neuefische.backend.Service.ServiceFeeding;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/")
@RequiredArgsConstructor

public class ControllerZooFoo {
    private final ServiceFeeding serviceFeeding;
    @GetMapping("animal")
    public List<Animals> getAllAnimals() {
        return serviceFeeding.getAllAnimals();
    }


}
