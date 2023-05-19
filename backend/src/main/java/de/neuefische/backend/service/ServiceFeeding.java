package de.neuefische.backend.service;

import de.neuefische.backend.model.Animals;
import de.neuefische.backend.repository.RepoAnimals;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ServiceFeeding {
    private final RepoAnimals repoAnimals;

    public ServiceFeeding(RepoAnimals repoAnimals) {
        this.repoAnimals = repoAnimals;
    }

    public List<Animals> getAllAnimals() {
        return repoAnimals.getAllAnimals();
    }
}
