package de.neuefische.backend.service;

import de.neuefische.backend.model.Animal;
import de.neuefische.backend.model.FeedingState;
import de.neuefische.backend.repository.RepoAnimals;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ServiceFeedingTest {

    RepoAnimals repoAnimals = mock(RepoAnimals.class);
    Animal animals1 = new Animal("1", "Elephant", "fruit", 10, "Monday", 3, FeedingState.NONE, "Amelie", "");
    ServiceFeeding serviceFeeding = new ServiceFeeding(repoAnimals);
    @Test
    void getAllAnimals_shouldReturnAListOfAllAnimals() {
        //GIVEN
        when(repoAnimals.getAllAnimals()).thenReturn(List.of(
                animals1

        ));
        //WHEN
        List<Animal> actual = serviceFeeding.getAllAnimals();

        //THEN
        verify(repoAnimals).getAllAnimals();
        assertEquals(actual, List.of(
                animals1
        ));
    }
}