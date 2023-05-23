package de.neuefische.backend.service;

import de.neuefische.backend.model.Animal;
import de.neuefische.backend.repository.RepoAnimals;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ServiceFeedingTest {

    RepoAnimals repoAnimals = mock(RepoAnimals.class);
    Animal animal1 = new Animal("1", "Elephant", "fruit", 10, "Monday", 3, "open", "Amelie", "");
    ServiceFeeding serviceFeeding = new ServiceFeeding(repoAnimals);
    @Test
    void getAllAnimals_shouldReturnAListOfAllAnimals() {
        //GIVEN
        when(repoAnimals.findAll()).thenReturn(List.of(
                animal1

        ));
        //WHEN
        List<Animal> actual = serviceFeeding.getAllAnimals();

        //THEN
        verify(repoAnimals).findAll();
        assertEquals(actual, List.of(
                animal1
        ));
    }
}