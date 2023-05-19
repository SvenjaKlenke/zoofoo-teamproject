package de.neuefische.backend.Controller;

import de.neuefische.backend.Model.Animals;
import de.neuefische.backend.Repository.RepoAnimals;
import de.neuefische.backend.Service.ServiceFeeding;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc

class IntegrationTestControllerZooFoo {
@Autowired
MockMvc mockMvc;
RepoAnimals repoAnimals = new RepoAnimals();
ServiceFeeding serviceFeeding = new ServiceFeeding(repoAnimals);
    @Test
    @DirtiesContext
    void getAllAnimals_returnAllAnimalsAsList_andStatusCode200() throws Exception {
     mockMvc.perform(MockMvcRequestBuilders.get("/api/animal"))
             .andExpect(status().isOk())
             .andExpect(content().json("[]"));
     verify(serviceFeeding.getAllAnimals());
    }
}