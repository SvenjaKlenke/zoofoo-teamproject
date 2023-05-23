package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Animal {

    private String id;
    private String species;
    private String food;
    private int foodAmount;
    private String dayToFeed;
    private int numberOfAnimals;
    private FeedingState feedStatus;
    private String animalKeeper;
    private String pictureOfAnimal;

}
