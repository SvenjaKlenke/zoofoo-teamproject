package de.neuefische.backend.service;

import de.neuefische.backend.model.Weather;
import de.neuefische.backend.model.WeatherConfig;
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;

import static de.neuefische.backend.service.ServiceWeather.kelvinToCelsius;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ServiceWeatherTest {

    private static MockWebServer mockWebServer;
    @Mock
    private WeatherConfig weatherConfig;

    @InjectMocks
    private ServiceWeather serviceWeather;


    @BeforeAll
    static void setUp() throws IOException {
        mockWebServer = new MockWebServer();
        mockWebServer.start();
    }

    private String mockServerURL;

    @BeforeEach
    void initialize() {
        mockServerURL = String.format("http://localhost:%s",
                mockWebServer.getPort());
    }


    @Test
    void kelvinToCelsiusShouldReturnCelsius() {
        //GIVEN
        double kelvin = 299.5;
        //WHEN
        int actual = kelvinToCelsius(kelvin);
        //THEN
        assertEquals(actual, 26);
    }

    @Test
    void getTemperatureThrowsException() {
        //Mocking

        when(weatherConfig.getUrl()).thenReturn(mockServerURL);

        double kelvin = 299.54;
        double celsius = Math.round(kelvin - 273.15);

        mockWebServer.enqueue(new MockResponse()
                .addHeader("Content-Type", "application/json")
                .setBody("""
                        {
                            "coord": {
                                "lon": 157.8583,
                                "lat": 21.3069
                            },
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10n"
                                }
                            ],
                            "base": "stations",
                            "main": {
                                "temp": 299.54,
                                "feels_like": 299.54,
                                "temp_min": 299.54,
                                "temp_max": 299.54,
                                "pressure": 1017,
                                "humidity": 71,
                                "sea_level": 1017,
                                "grnd_level": 1017
                            },
                            "visibility": 10000,
                            "wind": {
                                "speed": 8.12,
                                "deg": 88,
                                "gust": 8.91
                            },
                            "rain": {
                                "1h": 0.13
                            },
                            "clouds": {
                                "all": 100
                            },
                            "dt": 1685635226,
                            "sys": {
                                "sunrise": 1685645176,
                                "sunset": 1685693216
                            },
                            "timezone": 39600,
                            "id": 0,
                            "name": "",
                            "cod": 200
                        }
                        """));


        Weather actual = serviceWeather.getTemperature();

        assertEquals(actual.getTemp(), celsius);
    }

    @Test
    void getTempThrowsNullPointer() {
        //Mocking

        when(weatherConfig.getUrl()).thenReturn(mockServerURL);


        mockWebServer.enqueue(new MockResponse());

        try {
            serviceWeather.getTemperature();
        } catch (Exception e) {
            assertEquals(e.getMessage(), "Failed to retrieve temperature data");
        }

    }
}
