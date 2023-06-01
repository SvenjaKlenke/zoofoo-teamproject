package de.neuefische.backend.dto;

import de.neuefische.backend.model.Animal;
import de.neuefische.backend.model.FeedingState;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimalDTO {

    Animal animal = new Animal();

    private String id;
    private String species;
    private String food;
    private int foodAmount;
    private String dayToFeed;
    private int numberOfAnimals;
    private FeedingState feedStatus;
    private String animalKeeper;
    private String pictureOfAnimal;

    public AnimalDTO(String number, String elephant, String fruit, int i, String monday, int i1, FeedingState feedingState, String amelie, String s) {
    }
}

