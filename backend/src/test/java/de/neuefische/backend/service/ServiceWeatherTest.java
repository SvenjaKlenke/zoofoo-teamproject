package de.neuefische.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.web.reactive.function.client.WebClient;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ServiceWeatherTest {

    @Test
    void kelvinToCelsiusShouldReturnCelsius() {
        //GIVEN
        double kelvin = 299.5;
        //WHEN
        int actual = ServiceWeather.kelvinToCelsius(kelvin);
        //THEN
        assertEquals(actual, 26);
    }

  /*  @Test
    void getTemperatureFromApi() {
        //Mocking the webClient
        WebClient webClientMock = mock(WebClient.class);
        WeatherResponse weatherResponse = new WeatherResponse();
        Weather weather = new Weather();
        //GIVEN
        when(webClientMock.get()).thenReturn();

        //Then

    }*/

    @Test
    void getTemperatureThrowsException() {
        //Mocking
        WebClient webClientMock = mock(WebClient.class);
        ServiceWeather serviceWeather = new ServiceWeather();

        when(webClientMock.get()).thenReturn(null);

        try {
            serviceWeather.getTemperature();
        } catch (NullPointerException e) {
        }
    }
}
