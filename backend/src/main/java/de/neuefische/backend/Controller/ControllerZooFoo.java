package de.neuefische.backend.Controller;

import de.neuefische.backend.Model.Animals;
import de.neuefische.backend.Service.ServiceFeeding;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api")


public class ControllerZooFoo {
    private final ServiceFeeding serviceFeeding;

    public ControllerZooFoo(ServiceFeeding serviceFeeding) {
        this.serviceFeeding = serviceFeeding;
    }

    @GetMapping("/animal")
    public List<Animals> getAllAnimals() {
        return serviceFeeding.getAllAnimals();
    }


}
