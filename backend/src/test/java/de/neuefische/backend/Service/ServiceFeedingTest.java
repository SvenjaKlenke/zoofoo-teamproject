package de.neuefische.backend.Service;

import de.neuefische.backend.Model.Animals;
import de.neuefische.backend.Repository.RepoAnimals;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ServiceFeedingTest {
RepoAnimals repoAnimals = mock(RepoAnimals.class);
    Animals animals1 = new Animals("1", "Elephant", "fruit", 10, "Monday", 3, "open", "Amelie", "");
    Animals animals2 = new Animals("2", "Giraffe", "fruit", 9, "Wednesday", 4, "open", "Svenja", "");
    Animals animals3 = new Animals("3", "Bear", "fish", 10, "Friday", 1, "open", "Richard", "");
    Animals animals4 = new Animals("4", "Monkey", "fruit", 5, "Thursday", 23, "open", "Kristina", "");

    ServiceFeeding serviceFeeding = new ServiceFeeding(repoAnimals);
    @Test
    void getAllAnimals_shouldReturnAListOfAllAnimals() {
        //GIVEN
        when(repoAnimals.getAllAnimals()).thenReturn(List.of(
                animals1,
                animals2,
                animals3,
                animals4
        ));
        //WHEN
        List<Animals> actual = serviceFeeding.getAllAnimals();

        //THEN
        verify(repoAnimals).getAllAnimals();
        assertEquals(actual, List.of(
                animals1,
                animals2,
                animals3,
                animals4
        ));
    }
}