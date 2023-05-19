package de.neuefische.backend.repository;

import de.neuefische.backend.model.Animals;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository



public class RepoAnimals {
    Animals animals1 = new Animals("1", "Elephant", "fruit", 10, "Monday", 3, "open", "Amelie", "");
    Animals animals2 = new Animals("2", "Giraffe", "fruit", 9, "Wednesday", 4, "open", "Svenja", "");

    private final Map<String, Animals> allAnimalsMap = new HashMap<>(Map.of(
            "1", animals1,
            "2", animals2

    ));



    public List<Animals> getAllAnimals() {
        return new ArrayList<>(allAnimalsMap.values());
    }
}
