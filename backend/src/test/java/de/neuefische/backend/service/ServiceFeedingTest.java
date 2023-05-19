package de.neuefische.backend.service;

import de.neuefische.backend.model.Animals;
import de.neuefische.backend.repository.RepoAnimals;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ServiceFeedingTest {
RepoAnimals repoAnimals = mock(RepoAnimals.class);
    Animals animals1 = new Animals("1", "Elephant", "fruit", 10, "Monday", 3, "open", "Amelie", "");

    ServiceFeeding serviceFeeding = new ServiceFeeding(repoAnimals);
    @Test
    void getAllAnimals_shouldReturnAListOfAllAnimals() {
        //GIVEN
        when(repoAnimals.getAllAnimals()).thenReturn(List.of(
                animals1

        ));
        //WHEN
        List<Animals> actual = serviceFeeding.getAllAnimals();

        //THEN
        verify(repoAnimals).getAllAnimals();
        assertEquals(actual, List.of(
                animals1
        ));
    }
}