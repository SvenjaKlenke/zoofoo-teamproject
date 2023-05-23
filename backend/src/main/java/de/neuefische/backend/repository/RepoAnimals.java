package de.neuefische.backend.repository;

import de.neuefische.backend.model.Animal;
import de.neuefische.backend.model.FeedingState;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class RepoAnimals {

    Animal animals1 = new Animal("1", "Elephant", "fruit", 10, "Monday", 3, FeedingState.NONE, "Amelie", "");
    Animal animals2 = new Animal("2", "Giraffe", "fruit", 9, "Wednesday", 4,FeedingState.NONE, "Svenja", "");

    private final Map<String, Animal> allAnimalsMap = new HashMap<>(Map.of(
            "1", animals1,
            "2", animals2

    ));
    private Map<String, Animal> animals = new HashMap<>();

    public List<Animal> getAllAnimals() {
        return new ArrayList<>(allAnimalsMap.values());
    }

    public Animal update(Animal animal) {
        animals.put(animal.getId(), animal);
        return  animal;
    }
}
