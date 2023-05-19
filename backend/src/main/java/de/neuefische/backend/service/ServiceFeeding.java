package de.neuefische.backend.service;

import de.neuefische.backend.model.Animals;
import de.neuefische.backend.repository.RepoAnimals;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceFeeding {

    private final RepoAnimals repoAnimals;

    public List<Animals> getAllAnimals() {
        return repoAnimals.getAllAnimals();
    }
}
