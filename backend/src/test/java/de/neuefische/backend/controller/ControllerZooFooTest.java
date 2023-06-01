package de.neuefische.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.model.Animal;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class ControllerZooFooTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DirtiesContext
    @WithMockUser(username = "user", password = "1234")
    void getAllAnimals_returnAllAnimalsAsList_andStatusCode200() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/animal"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "user", password = "1234")
    void postNewAnimal_expectSuccessfulPost() throws Exception {
        String actual = mockMvc.perform(
                        post("/api/animal")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {
                                                       "id": "2",
                                                       "species":"Elephant",
                                                        "food":"Gras",
                                                        "foodAmount":10,
                                                        "dayToFeed":"Monday",
                                                        "numberOfAnimals":2,
                                                        "animalKeeper":"Richard",
                                                        "pictureOfAnimal":""
                                        }
                                        """)
                                .with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                                        {
                                                       "id": "2",
                                                       "species":"Elephant",
                                                        "food":"Gras",
                                                        "foodAmount":10,
                                                        "dayToFeed":"Monday",
                                                        "numberOfAnimals":2,
                                                        "animalKeeper":"Richard",
                                                        "pictureOfAnimal":""
                                        }
                        """))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Animal actualAnimal = objectMapper.readValue(actual, Animal.class);
        assertThat(actualAnimal.getId())
                .isNotBlank();
    }
    @DirtiesContext
    @Test
    @WithMockUser(username = "user", password = "1234")
    void whenChangeAnimalStatus_ThenReturnUpdatedAnimalItem_AndStatusCode200() throws Exception {
        mockMvc.perform(post("/api/animal")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                                                "id": "2",
                                                                "species":"Elephant",
                                                                "food":"Gras",
                                                                "foodAmount":10
                                }
                                """)
                        .with(csrf()))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders.put("/api/animal/" + "2")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                                                "id": "2",
                                                                "species":"Elephant",
                                                                "food":"Weed",
                                                                "foodAmount":20
                                }
                                """)
                        .with(csrf()))
                    .andExpect(status().isOk())
                    .andExpect(content().json("""
                        {
                                                        "id": "2",
                                                        "species":"Elephant",
                                                        "food":"Weed",
                                                        "foodAmount":20
                        }
                        """))
                    .andExpect(jsonPath("$.id").isNotEmpty())
                    .andReturn();

    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "user", password = "1234")
    void whenChangeAnimalStatus_ThenTrowException_AndStatusCode400() throws Exception {
        mockMvc.perform(post("/api/animal")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                                                "id": "2",
                                                                "species":"Elephant",
                                                                "food":"Gras",
                                                                "foodAmount":10
                                }
                                """)
                        .with(csrf()))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders.put("/api/animal/" + "5")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                                                "id": "2",
                                                                "species":"Elephant",
                                                                "food":"Weed",
                                                                "foodAmount":20
                                }
                                """)
                        .with(csrf()))
                .andExpect(status().is(400))
                .andExpect(status().reason(containsString("The id in the url does not match the request body's id")));
    }
    @Test
    void getTemperature_andReturnStatusCode200() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/temperature"))
                .andExpect(status().isOk())
                .andExpect(content().json("{}"));
    }

}