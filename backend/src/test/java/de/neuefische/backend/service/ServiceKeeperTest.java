package de.neuefische.backend.service;

import de.neuefische.backend.model.Keeper;
import de.neuefische.backend.repository.RepoKeeper;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ServiceKeeperTest {
    RepoKeeper repoKeeper = mock(RepoKeeper.class);
    Keeper keeper1 = new Keeper(
            "1",
            "Amelie",
            "12345"
    );

    ServiceKeeper serviceKeeper = new ServiceKeeper(repoKeeper);

    @Test
    void getAllKeepers_shouldReturnAListOfAllKeepers() {
        //GIVEN
        when(repoKeeper.findAll()).thenReturn(List.of(keeper1));
        //WHEN
        List<Keeper> actual = serviceKeeper.getAllKeeper();

        //THEN
        verify(repoKeeper).findAll();
        assertEquals(actual, List.of(keeper1));
    }


}