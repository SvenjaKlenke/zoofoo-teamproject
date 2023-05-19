package de.neuefische.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ControllerZooFooTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @DirtiesContext
    void getAllAnimals_returnAllAnimalsAsList_andStatusCode200() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/animal"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                           [{
                                   "id": "1",
                                   "species": "Elephant",
                                   "food": "fruit",
                                   "foodAmount": 10,
                                   "dayToFeed": "Monday",
                                   "numberOfAnimals": 3,
                                   "feedStatus": "open",
                                   "animalKeeper": "Amelie",
                                   "pictureOfAnimal": ""
                           }, 
                           {
                                   "id": "2",
                                   "species": "Giraffe",
                                   "food": "fruit",
                                   "foodAmount": 9,
                                   "dayToFeed": "Wednesday",
                                   "numberOfAnimals": 4,
                                   "feedStatus": "open",
                                   "animalKeeper": "Svenja",
                                   "pictureOfAnimal": ""
                               }
                           ]
                        """));

    }

}