package de.neuefische.backend.Service;

import de.neuefische.backend.Model.Animals;
import de.neuefische.backend.Repository.RepoAnimals;
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
