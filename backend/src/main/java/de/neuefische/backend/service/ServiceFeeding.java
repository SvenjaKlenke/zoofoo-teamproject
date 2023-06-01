package de.neuefische.backend.service;

import de.neuefische.backend.model.Animal;
import de.neuefische.backend.repository.RepoAnimals;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceFeeding {

    private final RepoAnimals repoAnimals;

    public List<Animal> getAllAnimals() {
        return repoAnimals.findAll();
    }

    public Animal saveAnimal(Animal animal){
        return repoAnimals.save(animal);
    }
}
