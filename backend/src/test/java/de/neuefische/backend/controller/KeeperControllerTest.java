package de.neuefische.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class KeeperControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @WithMockUser(username = "user", password = "123")
    void getUserControllerOnly() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/user"))
                .andExpect(status().isOk())
                .andExpect(content().string("user"));
    }

    @Test
    @WithMockUser(username = "", password = "")
    void getUserControllerOnly_Empty_SayNotLoggedIn() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/user"))
                .andExpect(status().isOk())
                .andExpect(content().string("Not Logged in"));
    }

    @Test
    @WithMockUser(username = "user", password = "123")
    void getUserFromEverywhere() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/user2"))
                .andExpect(status().isOk())
                .andExpect(content().string("user"));
    }
}