package de.neuefische.backend.controller;

import de.neuefische.backend.model.Animal;
import de.neuefische.backend.service.ServiceFeeding;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class ControllerZooFoo {

    private final ServiceFeeding serviceFeeding;

    @GetMapping("/animal")
    public List<Animal> getAllAnimals() {
        return serviceFeeding.getAllAnimals();
    }

    @GetMapping("/temperature")
    public Weather getTemperature() {
        return serviceWeather.getTemperature();
    }
}
