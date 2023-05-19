package de.neuefische.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Animals {
    private String id;
    private String species;
    private String food;
    private int foodAmount;
    private String dayToFeed;
    private int numberOfAnimals;
    private String feedStatus;
    private String animalKeeper;
    private String pictureOfAnimal;

}
