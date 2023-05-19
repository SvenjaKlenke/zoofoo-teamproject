package de.neuefische.backend.Service;

import de.neuefische.backend.Model.Animals;
import de.neuefische.backend.Repository.RepoAnimals;
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
