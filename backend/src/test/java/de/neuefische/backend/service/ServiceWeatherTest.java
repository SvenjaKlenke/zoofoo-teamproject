package de.neuefische.backend.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
}