package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document("Animals")
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
