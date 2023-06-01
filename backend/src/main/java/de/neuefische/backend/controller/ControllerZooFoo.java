package de.neuefische.backend.controller;

import de.neuefische.backend.model.Animal;
import de.neuefische.backend.service.ServiceFeeding;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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

    @PostMapping("/animal")
    public Animal postAnimal(@RequestBody Animal animal){
        return serviceFeeding.saveAnimal(animal);
    }
    @PutMapping({"animal/{id}"})
    public Animal changeAnimalStatus(@PathVariable String id, @RequestBody Animal animal){
        if (!animal.getId().equals(id)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The id in the url does not match the request body's id");
        }
        return serviceFeeding.saveAnimal(animal);
    }

}
