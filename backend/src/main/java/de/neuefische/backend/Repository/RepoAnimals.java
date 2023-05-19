package de.neuefische.backend.Repository;

import de.neuefische.backend.Model.Animals;
import lombok.Data;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Data

public class RepoAnimals {
    private final Map<String, Animals> allAnimalsMap = new HashMap<>();

    public List<Animals> getAllAnimals() {
        return new ArrayList<>(allAnimalsMap.values());
    }
}
